import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
function Registration1() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        RegistrationBox: false,
    });
    const [errors, setErrors] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        RegistrationBox: false,
    });

    const navigate=useNavigate();
    function handleUserNameChange(e) {
        setUserDetails((prev) => {
            return { ...prev, name: e.target.value };
        });
    }
    function handleEmailChange(e) {
        setUserDetails((prev) => {
            return { ...prev, email: e.target.value };
        });
    }
    function handleMobileChange(e) {
        setUserDetails((prev) => {
            return { ...prev, mobile: e.target.value };
        });
    }
    function handleBoxChange(e) {
        setUserDetails((prev) => {
            return { ...prev, RegistrationBox: e.target.checked };
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        let isError=false;
        if (userDetails.name.trim().length === 0) {
            setErrors((prev) => {
                return {
                    ...prev,
                    name: "Name Required",
                };
            });
            isError=true;
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    name: "",
                };
            });
        }
        if (userDetails.username.trim().length === 0) {
            setErrors((prev) => {
                return {
                    ...prev,
                    username: "user name required",
                };
            });
            isError=true;
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    username: "",
                };
            });
        }
        if (userDetails.email.trim().length === 0) {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: "email Required",
                };
            });
            isError=true;
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: "",
                };
            });
        }
        if (userDetails.mobile.trim().length === 0) {
            setErrors((prev) => {
                return {
                    ...prev,
                    mobile: "mobile no Required",
                };
            });
            isError=true;
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    mobile: "",
                };
            });
        }
        if (userDetails.RegistrationBox === false) {
            setErrors((prev) => {
                return {
                    ...prev,
                    RegistrationBox: "Registration Box Required",
                };
            });
            isError=true;
        }else{
            setErrors((prev) => {
                return {
                    ...prev,
                    RegistrationBox:false,
                };
            });
        }
        if(isError){
            return;
        }else{
            navigate("/Info");
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-box">
                <input value={userDetails.name} onChange={handleUserNameChange} type="text" placeholder="Name" />
                <p className="error">{errors.name}</p>
                <input value={userDetails.username} onChange={(e) => setUserDetails((prev) => ({ ...prev, username: e.target.value }))} type="text" placeholder="UserName" />
                <p className="error">{errors.username}</p>
                <input value={userDetails.email} onChange={handleEmailChange} type="text" placeholder="email" />
                <p className="error">{errors.email}</p>
                <input value={userDetails.mobile} onChange={handleMobileChange} type="text" placeholder="mobile" />
                <p className="error">{errors.mobile}</p>
                <label htmlFor="RegistrationBox">
                    <input checked={userDetails.RegistrationBox} onChange={handleBoxChange} type="checkbox" id="RegistrationBox" name="RegisterBox" /><span>agree and continue</span>
                </label>
                <p className="error">{errors.RegistrationBox}</p>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Registration1;
