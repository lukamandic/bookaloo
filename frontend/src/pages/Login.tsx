import React, { useState } from "react";
import { Input, Button } from 'antd';
import instance from "../APICalls/axios";
import { useDispatch } from "react-redux";
import { loginRequest, loginUser } from "../slices/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleLogin = async () => {

        try {
            dispatch(loginRequest)
            const res : any = await instance.post('/login', { email, password })
            if (res.data.success === true && res.data.message === "Login succeeded") {
                const payload = {
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    accessToken: res.data.accessToken,
                    refreshToken: res.data.refreshToken,
                    role: res.data.role
                }
                
                dispatch(loginUser(payload))
            }
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

export default Login