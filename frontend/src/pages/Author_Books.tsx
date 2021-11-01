import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';
import instance from "../APICalls/axios";
import { useDispatch } from "react-redux";

const Author_Books = () => {
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
            <Input value={ email } onChange={ (e) => setEmail(e.target.value) } placeholder="Email" /> <br />
            <Input value={ password } onChange={ (e) => setPassword(e.target.value) } placeholder="Password" /> <br />

            <Button onClick={ handleLogin } type="primary" size='large'>
                Primary
            </Button>
        </div>
    )
}

export default Author_Books