import Card from './card';
import Loading from '../../components/loading';
import useApi from '../../hooks/useApi';
import useForm from '../../hooks/useForm';
import { Suspense } from 'react';

function Dashboard() {

    const { data, error, loading } = useApi('http://localhost:3030/posts');

    const { values, handleChange, handleSubmit } = useForm({
        title: '',
        content: '',
        image: '',
    });

    function closeSession() {
        localStorage.removeItem('token');
        window.location.href = "/";
    }
    
    function convertFileToBase64(callback) {
        const fileInput = document.getElementById('imageInput');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
            const base64String = e.target.result;
            callback(base64String);
            };
            reader.readAsDataURL(file);
        } else {
            callback('');
        }
    }

    async function createPost() {
        convertFileToBase64(async(base64String) => {
            values.image = base64String;

            await fetch('http://localhost:3030/posts', {
            method: 'POST',
            headers: {
                'x-auth-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: values.title,
                content: values.content,
                image: values.image
            })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success: ', data);

                if (data.error) {
                    return;
                }

                window.location.reload();
            })
        });
    }

    function showDialogDash(){
        let dialog = document.getElementById('dialogDash');
        dialog.showModal();
    }

    function hideDialogDash(){
        let dialog = document.getElementById('dialogDash');
        dialog.close();
    }

    if (loading) {
        return (
            <div style={{
                display: 'grid',
                justifyContent: 'center',
                height: '90dvh',
                overflowY: 'auto',
                placeItems: 'center',
            }}>
                <Loading />
            </div>
        )
        
    }
    if (error) {
        return <div>Error...</div>
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        }}>
            <div style={{
                display: "flex",
                width: "100%",
                height: "10dvh",
                justifyContent: "end"
            }}>
                <button style={{
                    margin: "20px",
                    padding: "10px",
                    backgroundColor: "#4dbfd6",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "16px",
                }}
                onClick={showDialogDash}>Crear Post</button>
                <button style={{
                    margin: "20px",
                    padding: "10px",
                    backgroundColor: "#f00024",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "16px",
                }}
                onClick={closeSession}>Cerrar sesión</button>
            </div>
            <div style={{
                display: 'grid',
                justifyContent: 'center',
                height: '80dvh',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
                overflowY: 'auto',
                width: '100%',
            }}>
                <Suspense fallback={
                    <Loading />
                }>
                    {data.map((post) => (
                        <Card key={post.id} titleP={post.title} id={post.id} imageP={post.image_base64} contentP={post.content} />
                    ))}
                </Suspense>
            </div>
            <dialog style={{
                width: '30%',
                height: '42%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '3%',
                position: 'fixed',
                top: '18%',
                left: '32%',
            }}
            id="dialogDash">
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                }}
                onSubmit={handleSubmit(createPost)}>
                    <div>
                        <button style={{
                            position: 'absolute',
                            right: '10px',
                            top: '10px',
                            backgroundColor: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '5px',
                            border: 'none',
                        }}
                        onClick={hideDialogDash}>X</button>
                    </div>
                    <h2>Crear Post</h2>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '20px',
                    }}>
                        <label htmlFor="title" style={{

                        }}>Título</label>
                        <input type="text" id="title" name="title"
                        onChange={handleChange}
                        value={values.title}
                        style={{
                            padding: '10px',
                            borderRadius: '10px',
                            border: '1px solid #4dbfd6',
                        }} />
                    </div>

                    <div>
                        <label htmlFor="content">Contenido</label>
                        <textarea id="content" name="content" 
                        onChange={handleChange}
                        value={values.content}
                        style={{
                            padding: '10px',
                            borderRadius: '10px',
                            border: '1px solid #4dbfd6',
                            width: '93%',
                        }}></textarea>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '20px',
                    }}>
                        <label htmlFor="image">Imagen</label>
                        <input type="file" id="imageInput" name="image"
                        onChange={handleChange}
                        accept="image/*"
                        value={values.image}
                        style={{
                            padding: '10px',
                            borderRadius: '10px',
                            border: '1px solid #4dbfd6',
                        }} />
                    </div>

                    <button type="submit" style={{
                        padding: '10px',
                        borderRadius: '10px',
                        border: '1px solid #4dbfd6',
                        backgroundColor: '#4dbfd6',
                        color: 'white',
                        fontSize: '16px',
                    
                    }}>Crear</button>
                </form>
            </dialog>
        </div>
    );
}

export default Dashboard;