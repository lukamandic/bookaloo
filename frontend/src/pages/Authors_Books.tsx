import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';
import instance from "../APICalls/axios";
import { useDispatch } from "react-redux";

const Authors_Books = () => {
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleLogin = async () => {

        try {
            const res = await instance.post('/login', { email, password })
            console.log(res)
        } catch(e) {
            
        }

    }

    return (
        <div>
            
        </div>
    )
}

export default Authors_Books