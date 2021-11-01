import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';
import instance from "../APICalls/axios";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
import Authors from '../pages/Authors'

const AdminView = () => {
    const dispatch = useDispatch();
    const token = useSelector( state => state )
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    console.log(token)
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/authors" />
                </Switch>
            </Router>
        </div>
    )
}

export default AdminView