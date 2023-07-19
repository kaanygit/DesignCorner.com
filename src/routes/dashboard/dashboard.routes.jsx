import { Avatar, Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {selectToken} from '../../redux/user/user.selector';
import {selectUserData} from '../../redux/user-details/user.details.selector';
import {setUserDetails} from '../../redux/user-details/user.details.action'
import axios from "axios";

const defaultPassword={
    oldPassword:"",
    newPassword:"",
    confirmNewPassword:""
}

const Dashboard=()=>{
    const [activeTab,setActiveTab]=useState(0);
    const [formData,setFormData]=useState(defaultPassword);
    const [formValue,setFormValue]=useState(defaultPassword);
    const dispatch=useDispatch();
    const token=useSelector(selectToken).token;
    const userDetails=useSelector(selectUserData)
    console.log(token);

    const {oldPassword,newPassword,confirmNewPassword}=formValue;

    const resetDefaultForms=()=>{setFormValue(defaultPassword)};
    
    
    const handleActiveTab=(index)=>{
        setActiveTab(index);
    };
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValue({...formValue,[name]:value});
    };


    useEffect(() => {

        const handleGetUser = async () => {
            try {    
                if(token){
                    const response = await axios.get('http://localhost:5000/user', {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    });
                    if(!response.data){
                      console.log('asd');
                    }else{
                        dispatch(setUserDetails(response.data));
                    }
                }   
            } catch (error) {
              console.error(error);
            }
          };
          handleGetUser();
        }, [token]);
        


    const formSubmit=(e)=>{
        e.preventDefault();
        if(newPassword!==confirmNewPassword){
            alert("Passwords are not equal");
            return;
        };
        try {
            setFormData(formValue);
            console.log(formValue);
            const fetchData = async () => {
                try {
                  const response = await axios.post('/api/data', { token });
                  console.log(response.data);
                } catch (error) {
                  console.error(error);
                }
              };
              
              fetchData();
            resetDefaultForms();
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <>
            <div className="flex w-full h-screen justify-center items-center p-16 text-center shadow-xl rounded-xl font-montserrat-alternates">
                <div className="w-full h-full p-10">
                    <div className="pl-10">
                        <span className="flex justify-start text-3xl">Dashboard</span>
                    </div>
                    <div className="w-full h-full grid grid-cols-4 gap-0 p-10">
                        <div className="bg-gray-200 justify-center items-center  grid grid-cols-1 gap-3 p-3">
                            <div>
                                <span onClick={() => handleActiveTab(0)}>My Membership Information</span>
                            </div>
                            <div>
                                <span  onClick={() => handleActiveTab(1)}>Change Password</span>
                            </div>
                            <div>
                                <span  onClick={() => handleActiveTab(2)}>My Adress</span>
                            </div>
                            <div>
                                <span  onClick={() => handleActiveTab(3)}>My Orders</span>
                            </div>
                            <div>
                                <span  onClick={() => handleActiveTab(4)}>My Credit Cart</span>
                            </div>
                        </div>
                        <div className="col-span-3 bg-gray-100 w-full h-full  p-3">
                            <div className="grid grid-cols-1 gap-5  items-center justify-center flex h-full">
                                <div className={`items-center justify-center px-10 ${activeTab===0?"":"hidden"}`}>
                                    <div>
                                        <Avatar className="border border-woodColor border-4 shadow-xl" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt="avatar" size="xxl" />
                                    </div>
                                    <div className="mt-5">
                                        <span className="flex">NAME</span>
                                        <Input variant="outlined" disabled label={userDetails!==null?`${userDetails.name} ${userDetails.surname}`:"Loading..."} />
                                    </div>
                                    <div className="mt-5">
                                        <span className="flex">E - MAIL</span>
                                        <Input variant="outlined" disabled label={userDetails!==null?`${userDetails.email}`:"Loading..."}/>
                                    </div>
                                </div>
                                <div className={`items-center justify-center px-10 ${activeTab===1?"":"hidden"}`}>
                                    <form onSubmit={formSubmit}>
                                        <div>
                                            <span className="flex">OLD PASSWORD</span>
                                            <div>
                                                <Input type="password" name="oldPassword" onChange={handleChange} value={oldPassword} variant="static" placeholder="Old Password"/>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <span className="flex">NEW PASSWORD</span>
                                            <div className="mt-3">
                                                <Input type="password" name="newPassword" onChange={handleChange} value={newPassword} variant="static" placeholder="New Password" />
                                            </div>
                                            <div className="mt-3">
                                                <Input type="password" name="confirmNewPassword" onChange={handleChange} value={confirmNewPassword} variant="static" placeholder="Confirm Password"/>
                                            </div>
                                            <div className="mt-3">
                                                <Button type="submit" className="w-full" variant="outlined" color="brown">Change Password</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className={`items-center justify-center px-10 ${activeTab===2?"":"hidden"}`}>
                                    <span>Adress</span>
                                </div>
                                <div className={`items-center justify-center px-10 ${activeTab===3?"":"hidden"}`}>
                                    <span>My Orders</span>
                                </div>
                                <div className={`items-center justify-center px-10 ${activeTab===4?"":"hidden"}`}>
                                    <span>My Credit Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard