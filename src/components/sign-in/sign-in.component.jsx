import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const defaultSignForm={
    "email":"",
    "password":""
}

const SignIn=()=>{
    const [formData,setFormData]=useState(defaultSignForm);
    const [formValue,setFormValue]=useState(defaultSignForm);
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
            console.log('SignIn ');
            resetDefaultForms();
        } catch (error) {
            console.log("Error !! : ",error);
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