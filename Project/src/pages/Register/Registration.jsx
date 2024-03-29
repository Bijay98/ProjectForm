import React, { useState } from "react";

function Registration() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        RegistrationBox: false,
    });

    const [error, setErrors] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        RegistrationBox: false,
    });

    const changeName = (e) => {
        if (e.target.value === "") {
            setErrors({
                ...error,
                name: "Name Required",
            });
        } else {
            setUserDetails({
                ...userDetails,
                name: e.target.value,
            });
            setErrors({
                ...error,
                name: "",
            });
        }
    };

    const changeUserName = (e) => {
        setUserDetails({
            ...userDetails,
            username: e.target.value,
        });
    };

    const changeEmail = (e) => {
        setUserDetails({
            ...userDetails,
            email: e.target.value,
        });
    };

    const changeMobile = (e) => {
        setUserDetails({
            ...userDetails,
            mobile: e.target.value,
        });
    };

    const changeRegistration = (e) => {
        setUserDetails({
            ...userDetails,
            RegistrationBox: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission logic, e.g., send data to backend
        console.log(userDetails);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={changeName} placeholder="Name" /> <br /><br />
                <label>{error.name}</label>
                <input type="text" onChange={changeUserName} placeholder="UserName" /> <br /><br />
                <input type="text" onChange={changeEmail} placeholder="Email" /> <br /><br />
                <input type="text" onChange={changeMobile} placeholder="Mobile" /> <br /><br />
                <label htmlFor="RegistrationBox">
                    <input type="checkbox" onChange={changeRegistration} /><span>Share my registration data with Superapp</span>
                </label><br /><br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Registration;
