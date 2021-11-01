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
import Author_Books from '../pages/Author_Books'
import Authors_Books from '../pages/Authors_Books'
import Books from '../pages/Books'

const AuthorView = () => {
    const dispatch = useDispatch();
    const token = useSelector( state => state )
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    return (
        <div>
            <Router>
                <Switch>
                    <Route component={Authors} path="/authors" />
                    <Route component={} path="/author-books/:id" />
                    <Route component={} path="/authors-books" />
                </Switch>
            </Router>
        </div>
    )
}

export default AdminView