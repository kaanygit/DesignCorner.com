import { Button, Input, Typography } from "@material-tailwind/react"
import { useState } from "react"


const defaultForms={
    name:"",
    surname:"",
    email:"",
    password:"",
    confirmPassword:""
}
 

const SignUp=()=>{
    const [seePassword,setSeePassword]=useState(false);
    const [formValue,setFormValue]=useState(defaultForms);
    const [mongoseForm,setMongoseForm]=useState(defaultForms);


    const {name,surname,email,password,confirmPassword}=formValue;
    const resetDefaultForms=()=>{setFormValue(defaultForms)};
    
    // e.preventDefault();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };
    console.log(formValue);
    const handleSeePassword=()=>{
        setSeePassword(!seePassword);
    }
    const passwordSee=(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    )
    const passwordNotSee=(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>

    )
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert("Passwords are not equal");
            return;
        }
        try {
            setMongoseForm(formValue);
            resetDefaultForms();
        } catch (error) {
            console.log(error);
        }
    }
    console.log(mongoseForm);
    return (
        <>
            <div>
                <div className="bg-gray-200 rounded-2xl shadow-xl p-5 flex-col">
                    <div className="w-full h-full p-10">
                        <div>
                            <h1 className="font-bold text-3xl pb-5 text-woodColor">Sign Up</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <Input name="name" label="name" value={name} type="text" onChange={handleChange} required/>
                            </div>
                            <div className="mb-5">
                                <Input label="Surname" name="surname" value={surname} type="text" onChange={handleChange} required/>
                            </div>
                            <div className="mb-5">
                                <Input label="E-mail" name="email" value={email} type="email" onChange={handleChange} required/>
                            </div>
                            <div className="mb-5">
                                <Input label="Password" name="password" type="password" value={password} onChange={handleChange} icon={seePassword?passwordSee:passwordNotSee} required/>
                                <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal mt-2">
                                    Use at least 8 characters, one uppercase, one lowercase and one number!
                                </Typography>
                            </div>
                            <div className="mb-5">
                                <Input label="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleChange} type="password" required/>
                            </div>
                            <Button fullWidth type="submit">Sign Up</Button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SignUp