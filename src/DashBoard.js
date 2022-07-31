import React, { useEffect, useState } from 'react'
import { Button, CssBaseline, Grid, List, Typography } from "@mui/material";
import { useNavigate,useHistory  } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { userLoginReducer } from "./Redux/Reducer/AuthReducer/authReducer";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { addProductList } from './Redux/Action/Auth/index'
import {persistor} from './Redux/Store/configureStore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DashBoard = (props) => {

    useEffect(() => {
    }, [])
    
    const dispatch = useDispatch();

    const [Detail, setDetail] = useState()
    const [list, setlist] = useState()
    const [AllList, setAllList] = useState([])

    const [product, setProduct] = useState({
        ProductName: "",
        ProductCategory: "",
        ProductQuantity: ""

    })
    
    const history = useNavigate();
    const handleLogout = () => {
        persistor.purge()
        
        history('/UserLogin')
        window.location.reload()

    }
    const handleSubmit = () => {
        console.log("test");
            if(product.ProductName !=="" && product.ProductCategory !=="" &&product.ProductQuantity ){
                dispatch(addProductList(product))
                toast.success('Success Added Data !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }else{
                toast.error('Please fill all details !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
          
               
        
        setProduct({
            ProductName: "",
            ProductCategory: "",
            ProductQuantity: ""
        })
    }

    

    const userDetailReducer = useSelector(state => state.userLoginReducer)
    const listReducer = useSelector(state => state.addReducer)


    useEffect(() => {
        const { action } = userDetailReducer
        console.log(listReducer);

        setlist(listReducer)
            setDetail(action?.value)


    },[])
  

    function onhandleChange(evt) {
        const value = evt.target.value;
        setProduct({
            ...product,
            [evt.target.name]: value
        });
    }

    return <>
        <CssBaseline />
        <nav className="navbar navbar-light bg-light" >
        <Button className='mt-2' variant="outlined" onClick={()=>history("/list")}>View List</Button>
            <a className="navbar-brand" href="#">{`Welcome : ${Detail?.email}`} </a>
          

            <Button variant='contained' color='warning' size='large' onClick={handleLogout}>Logout</Button>
        </nav>
        
        <Grid container >
        <ToastContainer />
            <Grid item sm={4} sx={{ backgroundColor: 'black', p: 10, color: 'white' }} >
                <h1>Dashboard</h1>
                <Typography variant='h5'></Typography>

            </Grid>
            <Grid item lg={8} sx={{ backgroundColor: '#fff', border:'1px solid black' , p: 10, color: 'white' }} >

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>

                        <TextField id="standard-basic" value={product.ProductName} name="ProductName" label="Product Name (unique) *" variant="standard" onChange={onhandleChange} />
                    </FormControl>

                    <FormControl fullWidth className='mt-2'>
                        <InputLabel id="demo-simple-select-label">Select Category *</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="ProductCategory"
                            displayEmpty
                            value={product.ProductCategory}
                            onChange={onhandleChange}
                        >
                            <MenuItem value={'Category1'}>Category1</MenuItem>
                            <MenuItem value={'Category2'}>Category2</MenuItem>
                            <MenuItem value={'Category3'}>Category3</MenuItem>
                            <MenuItem value={'Category4'}>Category4</MenuItem>
                            <MenuItem value={'Category5'}>Category5</MenuItem>
                            <MenuItem value={'Category6'}>Category6</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth className='mt-2'>
                        <InputLabel id="demo-simple-select-label1">Select Quantity *</InputLabel>

                        <Select
                            labelId="demo-simple-select-label1"
                            id="demo-simple-select"
                            name="ProductQuantity"
                            value={product.ProductQuantity}
                            onChange={onhandleChange}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={50}>50</MenuItem>

                        </Select>
                    </FormControl>
                    <Button className='mt-2' variant="outlined" onClick={handleSubmit}>Submit</Button>
                </Box>
             
                <hr style={{ height: '2px' }} />
              
              
            </Grid>

        </Grid>
    </>
}
export default DashBoard;