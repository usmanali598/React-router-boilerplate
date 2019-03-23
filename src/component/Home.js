import React from 'react'

const Home = ()=>{
    const style = {
        width:'300px',
        height:'270px',
        border:'1px solid',
        display:'flex',
        margin:'auto',
        // objectFit:'cover'
    }
    return (
        <div>
            <h1>Welcome</h1>  
            <p>This is Home Component</p>
            <img src='https://xvp.akamaized.net/assets/public/vpn-software/router/post-vpn-router-home-1e59860c9b0ffa22d2a502f7544e53d9.png' alt='contact' style={style} />
        </div>
    )
}

export default Home;