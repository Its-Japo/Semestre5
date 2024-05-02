import useForm from "../../hooks/useForm";
import PropTypes from 'prop-types';

function Card({id, titleP, contentP, imageP}) {
    let idG = id ? id : null;
    let titleG = titleP ? titleP : null;
    let contentG = contentP ? contentP : null;
    let imageG = imageP ? imageP : null;

    const { values, handleChange, handleSubmit } = useForm({
        titleForm: '',
        contentForm: '',
        imageForm: '',
    });

    function showDialogCard(){
        let dialog = document.getElementById(`dialogCard+${idG}`);
        dialog.showModal();
    }

    function hideDialogCard(){
        let dialog = document.getElementById(`dialogCard+${idG}`);
        dialog.close();
    }

    function convertFileToBase64(callback) {
        const fileInput = document.getElementById(`imageInput${idG}`);
        const file = fileInput.files[0];

        if (file) {
            console.log("Entre al if")
            const reader = new FileReader();
            reader.onload = function (e) {
            const base64String = e.target.result;
            callback(base64String);
            };
            reader.readAsDataURL(file);
        }else {
            console.log("Entre al else")
            callback('');
        }
    }

    async function deletePost() {
        await fetch(`http://localhost:3030/posts/${idG}`, {
            method: 'DELETE',
            headers: {
                'x-auth-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(() => {
            window.location.reload();
        })
        
    }

    async function updatePost() {
        convertFileToBase64(async(base64String) => {
            values.imageForm = base64String;
            await fetch(`http://localhost:3030/posts/${idG}`, {
                method: 'PUT',
                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: values.titleForm != '' ? values.titleForm : titleG,
                    content: values.contentForm != '' ? values.contentForm : contentG,
                    image: values.imageForm != '' ? values.imageForm : imageG
                })
            })
            .then(response => response.json())
            .then((data) => {
                if (data.error) {
                    return;
                }

                window.location.reload();
            })
        })

    }

    

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height : '250px',
            backgroundColor: 'rgba(190,190,190,0.6)',
            margin: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                width: '80%',
            }}>
                {imageG ? <img src={imageG} alt="post" style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '5%',
                    marginBottom: '10px',
                }}/> : null}
                <h3>{titleG}</h3>
                <div style={{
                    display: 'grid',
                    placeItems: 'center',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    width: '100%',
                }}>
                    <div></div>
                    <div></div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        width: '100%',       
                        placeItems: 'center',
                    }}>
                        <div style={{
                            display: 'grid',
                            cursor: 'pointer',
                            backgroundColor: '#ffa114',
                            borderRadius: '10px',
                            placeItems: 'center',
                            padding: '5px',
                            marginTop: '10px',
                        }}
                        onClick={showDialogCard}
                        >
                            <img src="/src/assets/icons8-pencil-24.png" alt="" style={{
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer',
                            }}/>
                        </div>
                        <div style={{
                            display: 'grid',
                            cursor: 'pointer',
                            backgroundColor: '#e6001f',
                            borderRadius: '10px',
                            placeItems: 'center',
                            padding: '5px',
                            marginTop: '10px',
                        }}
                        onClick={deletePost}

                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" style={{
                                fill: 'white',
                            }} viewBox="0 0 24 24"> <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path> </svg>
                        </div>
                        
                    </div>

                </div>
            </div>
            <dialog 
            key = {idG}
            id = {`dialogCard+${idG}`}
            style={{
                width: '30%',
                height: '42%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '3%',
                position: 'fixed',
                top: '18%',
                left: '32%',
            }}>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                }}
                onSubmit={handleSubmit(updatePost)}>
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
                        onClick={hideDialogCard}>X</button>
                    </div>
                    <h2>Actualizar Post</h2>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '20px',
                    }}>
                        <label htmlFor="titleForm" style={{

                        }}>Título</label>
                        <input type="text" id="title" name="titleForm"
                        onChange={handleChange}
                        value={values.titleForm}
                        style={{
                            padding: '10px',
                            borderRadius: '10px',
                            border: '1px solid #4dbfd6',
                        }} />
                    </div>

                    <div>
                        <label htmlFor="contentForm">Contenido</label>
                        <textarea id="content" name="contentForm" 
                        onChange={handleChange}
                        value={values.contentForm}
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
                        <label htmlFor="imageForm">Imagen</label>
                        <input type="file" id={`imageInput${idG}`} name="imageForm"
                        onChange={handleChange}
                        accept="image/*"
                        value={values.imageForm}
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
                    
                    }}>Actualizar</button>
                </form>
            </dialog>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    titleP: PropTypes.string,
    contentP: PropTypes.string,
    imageP: PropTypes.string,
};


export default Card;