function Header(props) {
    let text = props.title

    return (
      <div style={{width: "100%", height: "13vh", backgroundColor:'#292929', display: 'grid', placeItems: 'center'}}>
        <h1 style={{backgroundColor: '#292929', color: 'white', fontSize: '30px'}}>
            {text}
        </h1>
      </div>
    );
  }