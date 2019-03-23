import React from 'react'

const Contact = ()=>{
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
            <h1>Contact</h1>
            <p>This is Contact Component</p>
            <img src='https://www.toshiba.com/taes/cms_images/contact-us.jpg' alt='contact' style={style} />
        </div>
    )
}

export default Contact;