import { Button, Input, Typography } from "@material-tailwind/react"


const ForgotPassword=()=>{
    return(
        <>
            <div className="authentication flex text-center justify-center p-20 w-full items-center font-montserrat-alternates">
                <div className="bg-gray-100 p-20 shadow-2xl rounded-3xl h-full">
                    <div>
                        <h1 className="text-gray-900 mb-5 text-3xl ">Forgot Password</h1>
                    </div>
                    <form>
                        <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal mt-2 mb-3">
                            Please enter your e-mail
                        </Typography>
                        <Input label="E-mail" type="email"/>
                        <Button fullWidth className="mt-2" type="submit">Send Your Code</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword