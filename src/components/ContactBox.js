

import "./ContactBox.scss";
import { useState } from "react";

function ContactBox() {

    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");   

    return <>

    <div  className='centralise'>
        <div className="contactbox">

            <h2> Contact Me </h2>

            <input name="Name" value={name} placeholder='Name' style={{height: '3rem'}} onChange={e => setName(e.target.value)}/>
            <input name="Subject" value={subject} placeholder='Subject' style={{height: '3rem'}} onChange={e => setSubject(e.target.value)}/>
            <textarea name="Message" value={message} placeholder='Your message here ...' style={{height: '10rem'}} onChange={e => setMessage(e.target.value)}></textarea>

            <button> Send Mail </button>

        </div>
    </div>

    </>
}

export default ContactBox;