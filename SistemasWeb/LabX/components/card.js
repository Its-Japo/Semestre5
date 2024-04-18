function Card(props){

    let imgUrl = props.img
    let nombre = props.nombre
    let descripcion = props.descripcion

    return (
        <div style={{width: "30%", minHeight: "100px", display: "flex", backgroundColor: "#212121", display: 'grid', placeItems: 'center', padding: "20px", borderRadius: "30px"}}>
            <img src={imgUrl} style={{width: "50%", borderRadius: "50%", marginBottom: "50px"}}></img>
            <div style={{backgroundColor: '#212121'}}>
                <p style={{color: 'white', fontSize: '25px', textAlign: 'center', backgroundColor: '#212121'}}>
                    {nombre}
                </p>
                <p style={{color: 'white', fontSize: '20px', textAlign: 'center', backgroundColor: '#212121'}}>
                    {descripcion}
                </p>
            </div>
        </div>
    )
}