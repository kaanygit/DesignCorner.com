import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {setToken} from "../../redux/user/user.action"

interface defaultSignFormInterfaceTS{
    email:string;
    password:string
}

const defaultSignForm:defaultSignFormInterfaceTS={
    "email":"",
    "password":""
}

const SignIn=()=>{
    const [formData,setFormData]=useState<defaultSignFormInterfaceTS>(defaultSignForm);
    const [formValue,setFormValue]=useState<defaultSignFormInterfaceTS>(defaultSignForm);
    const dispatch=useDispatch();
    const resetDefaultForms=()=>{setFormValue(defaultSignForm)};
    
    
    const {email,password}=formValue;
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setFormValue({...formValue,[name]:value});
    };
    console.log(formValue);
    const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            setFormData(formValue);
            axios.post('http://localhost:5000/signin',formValue).then((response)=>{
                console.log(response.data);
                const token=response.data.token;
                dispatch(setToken(token));
            }).catch((error:unknown)=>{
                if(axios.isAxiosError(error)){
                    if(error.response?.data.error){
                        toast.error(error.response.data.error);
                    }else{
                        toast.error(error.message);
                    }
                }

            })
            resetDefaultForms();
        } catch (error:unknown){
            if(axios.isAxiosError(error)){
                if(error.response?.data.error){
                    toast.error(error.response.data.error);
                }
            }
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