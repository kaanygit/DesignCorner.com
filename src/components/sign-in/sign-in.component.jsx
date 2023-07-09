import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";



const SignIn=()=>{
    const handleSubmit=()=>{
        console.log('SignIn ');
    }
    return(
        <>
            <div className="sign-in-container bg-gray-200 rounded-2xl shadow-xl p-10 flex flex-col items-center">
                <form onSubmit={handleSubmit} className="w-full">
                    <h1 className="text-3xl font-bold text-woodColor mb-5">Sign In</h1>
                    <div className="mb-5">
                        <Input label="E-mail" required type="email"/>
                    </div>
                    <div className="mb-5">
                        <Input label="Password" required type="password"/>
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