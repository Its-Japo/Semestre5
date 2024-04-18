function Sidebar(props){
    let text = props.title
    let info = props.info

    return (
        <div id="sidebar" style={{height:"100vh", width:"13%", backgroundColor:'#000000', display: 'grid', placeItems: 'center'}}>
            <div>
                <h1 style={{backgroundColor: '#000000', color: 'white', fontSize: '30px', textAlign: 'center'}}>
                    {text}
                </h1>
                <p style={{backgroundColor: '#000000', color: 'white', fontSize: '20px', textAlign: 'center'}}>
                    {info}
                </p>
            </div>
        </div>
    )
}