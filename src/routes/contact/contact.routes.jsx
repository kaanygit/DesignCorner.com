import { Outlet } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import {BsCheck} from 'react-icons/bs'
import { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const [sendMessage,setSendMessage]=useState(true);
  const positionMap = { lat: 41.0082, lng: 28.9784 };

  const handleMessage=()=>{
    setSendMessage(!sendMessage);
  }

  return (
    <>
        <div className="w-full h-full justify-center items-center flex p-16  font-montserrat-alternates">
          <div className="w-full h-full grid grid-cols-2 gap-5">
            <div className="justify-center items-center text-center flex w-full min-h-full h-96">
              <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultZoom={13} defaultCenter={positionMap}>
                <AnyReactComponent lat={positionMap.lat} lng={positionMap.lng} text="My Marker"/>              
              </GoogleMapReact>
            </div>
            <div className="w-full h-full justify-center items-center">
            {sendMessage?(
              <>
                <div className=" text-4xl flex"><span>Contact</span><BsCheck className="text-green-500"/></div>
                <hr/>
                <div className="grid grid-cols-1 gap-5 mt-5">
                  <Input variant="static" color="brown" placeholder="Name and Surname"/>
                  <Input variant="static" color="brown" placeholder="E-mail"/>
                  <Textarea variant="static" color="brown" placeholder="Your Message to Us"/>
                  <Button color="brown" variant="outlined" onClick={handleMessage}>Send</Button>
                </div>
              </>
            ):(
              <div className="w-full h-full text-center justify-center items-center flex text-4xl">
                <span>Message Sent 😎</span>
              </div>
            )}
            </div>  
          </div>
        </div>
        <Outlet/>
    </>
  );
};

export default Contact;
