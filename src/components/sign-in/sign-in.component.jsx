import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { setToken } from "../../redux/user.redux";

const defaultSignForm={
    "email":"",
    "password":""
}

const SignIn=()=>{
    const [formData,setFormData]=useState(defaultSignForm);
    const [formValue,setFormValue]=useState(defaultSignForm);
    const dispatch=useDispatch();
    const resetDefaultForms=()=>{setFormValue(defaultSignForm)};
    
    
    const {email,password}=formValue;
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValue({...formValue,[name]:value});
    };
    console.log(formValue);
    const handleSubmit=(e)=>{
        e.preventDefault();
        try {
            setFormData(formValue);
            axios.post('http://localhost:5000/signin',formData).then((response)=>{
                console.log(response.data);
                const token=response.data.token;
                dispatch(setToken(token));
            }).catch((error)=>{
                toast.error(error.response.data.error);
            })
            resetDefaultForms();
        } catch (error) {
            toast.log("Error !! : ",error);
        }
    };
    console.log(formData);
    return(
        <>
            <div className="sign-in-container bg-gray-200 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full">
                    <h1 className="text-3xl font-bold text-woodColor mb-5">Sign In</h1>
                    <div className="mb-5">
                        <Input label="E-mail" name="email" onChange={handleChange} value={email} required type="email"/>
                    </div>
                    <div className="mb-5">
                        <Input label="Password" name="password" onChange={handleChange} value={password} required type="password"/>
                    </div>
                    <Button fullWidth type="submit">Sign In</Button>
                </form>
                <div className="text-blue-400 mt-2">
                    <Link to='/forgotpassword'>Forgot Password?</Link>
                </div>
            </div>

        </>
    )
}

export default SignIn;