import React from 'react'

const About = ()=>{
    const style = {
        width:'300px',
        height:'200px',
        border:'1px solid',
        display:'flex',
        margin:'auto',
        objectFit:'cover'
    }
    return (
        <div>
            <h1>About</h1>
            <p>This is About Component</p>
            <img src='https://lwchurch.org.uk/Images/content/2417/871231.jpg' alt='contact' style={style} />
        </div>
    )
}

export default About;