import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import dotenv from 'dotenv';
import path from 'path';


const MyComponent = () => {
    const [veri, setVeri] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        dotenv.config({ path: path.resolve(__dirname, '.env') });
        const apiKey = process.env.DATA_API;

    const fetchData = async () => {
      try {
        const data = JSON.stringify({
          collection: 'Products',
          database: 'Category',
          dataSource: 'DesignCorner',
          projection: {
            _id: 1,
          },
        });

        const config = {
          method: 'post',
          url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-tgfst/endpoint/data/v1/action/findOne',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': apiKey,
            Accept: 'application/ejson',
          },
          data: data,
        };

        const response = await axios(config);
        setVeri(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
        <div>
        <h1>Veri</h1>
        {veri && (
            <div>
            <h2>{veri.name}</h2>
            <p>Fiyat: {veri.price}</p>
            <p>Açıklama: {veri.productInformation}</p>
            </div>
        )}
        </div>
        <Outlet/>
    </>
  );
};

export default MyComponent;
