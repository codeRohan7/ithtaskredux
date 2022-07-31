import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { userLoginSubmit } from './Redux/Action/Auth/index'
const Loginarray = [
    'a@gmail.com',
    'b@gmail.com',
    'c@gmail.com',
    'd@gmail.com',
    'e@gmail.com',
    'f@gmail.com',
    'g@gmail.com',
    'h@gmail.com'
]

const UserLogin = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState({
        status: false,
        msg: '',
        type: ''
    })
    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })

    const handleOnchange = (e) => {
        const value = e.target.value;
        setuserData({
            ...userData,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.email && userData.password) {
            const validateLogin = Loginarray.includes(userData.email)

            if (validateLogin) {
                setError({
                    status: true, msg: 'Login Success', type: 'success'
                })

                const data = {
                    email: userData.email,
                    password: userData.password
                }
                dispatch(userLoginSubmit(data))




                navigate('/DashBoard')

            } else {
                setError({
                    status: true, msg: 'Please Enter Correct Email/Password!', type: 'error'
                })


            }
        } else {
            setError({
                status: true, msg: 'All fields are Required', type: 'error'
            })
        }
    }

    return <>
        <div style={{ border: '10px' }}>
            <Box component='form' noValidate id='login-form' sx={{ mt: 1 }} onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                <TextField margin='normal' required id='email' name='email' label='Email Address' onChange={handleOnchange} /><br></br>
                <TextField margin='normal' required id='password' name='password' label='Password' onChange={handleOnchange} type='password' />
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
                </Box>
                {
                    error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ' '
                }

            </Box>
        </div>
    </>
}
export default UserLogin;