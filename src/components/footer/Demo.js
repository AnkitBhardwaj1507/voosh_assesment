import React, { useState } from "react";
import swal from 'sweetalert';
import './Demo.css';

const Demo = () => {

    // use state hooks to handle the form field
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    {/********************** */ }

    // function for handle from submission
    function handleSubmit(e) {
        e.preventDefault();

        const localEmail = JSON.parse(localStorage.getItem('email'));
        const localpassword = JSON.parse(localStorage.getItem('password'));

        console.log("localEmail ", localEmail);
        console.log("localpassword ", localpassword);

        if(email === localEmail && password === localpassword) {
            swal({
                title: "Alert!",
                text: "You are already logged In!!",
                icon: "alert",
                button: "OK!"
            })
        }else {
            localStorage.setItem("name", JSON.stringify(name));
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("password", JSON.stringify(password));

            swal({
                title: "Success!",
                text: "Logged in successfully!!",
                icon: "success",
                button: "OK!"
            })

        }

        
    }
    {/********************** */ }

    return (
    <div>
        <div className="demo-container">
            {/* section heading container */}
            <div className="section-heading">
                <p>Book A Demo Now</p>
            </div>
            {/********************** */ }

            {/* input form container for booking demo */}

            <div className="demo-form-container">
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="input-fields">
                        <label className="">Name:</label>
                        <input 
                            type='text'
                            name="name"
                            className=''
                            placeholder="Ex: John Doe"
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>

                    <div className="input-fields">
                        <label className="">Email:</label>
                        <input 
                            type='email'
                            name="email"
                            className=''
                            placeholder="Ex: John Doe"
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>

                    <div className="input-fields">
                        <label className="">Password:</label>
                        <input 
                            type='password'
                            name="password"
                            className=''
                            placeholder="Enter your password"
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>

                    <div className="input-fields">
                        <label className="">Company Name:</label>
                        <input 
                            type='text'
                            name="company_name"
                            className='form-control form-control-lg'
                            placeholder="Ex: XYZ PVT LTD"
                            // onChange=''
                        />
                    </div>

                    <div className="input-fields">
                        <label className="">Your Title:</label>
                        <input 
                            type='text'
                            name="title"
                            className=''
                            placeholder="Ex: Operational Head"
                            required
                            // onChange=''
                        />
                    </div>

                    <button type='submit'>Book Demo</button>
                </form>   
            </div> 
        </div>
        {/********************** */ }

        {/* background image of the component */}

        <img src='https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp' className="section-background" alt='form_background'/>
    </div>
    )
}

export default Demo;