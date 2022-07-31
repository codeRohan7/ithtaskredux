import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function List() {
    const [list, setlist] = useState([])

    const listReducer = useSelector(state => state.addReducer)

    const [product, setProduct] = useState({
        ProductName: "",
        ProductCategory: "",
        ProductQuantity: ""

    })
        // persistor.purge()
    
        function onhandleChange(evt) {
            const value = evt.target.value;
            setProduct({
                ...product,
                [evt.target.name]: value
            });
        }
   
    const handleSubmit = () => {
        console.log("test");
         let data = list.map((obj)=>{
              if(obj.ProductName===product.ProductName){
                 console.log(product);
                     return {product}
                    }
                 
        })
        setlist([...list,data])
          
               
        
        setProduct({
            ProductName: "",
            ProductCategory: "",
            ProductQuantity: ""
        })
    }

    const handleRemove = (item) => {
        // console.log(item);
        // // dispatch(RemovePersistList())
      
    }
    const handleEdit= (item) => {
        console.log(item);
        const data = list.filter((el)=>el.ProductName==item)
        setProduct(...data)
    }
    useEffect(() => {
console.log(listReducer);
        setlist(listReducer)


    })
  return (
    <div>
         
                <table style={{backgroundColor:'gray'}}  class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>

        <th>Quantity</th>
        <th>edit</th>
        <th>Remove</th>


      </tr>
    </thead>
 
   {list.map((item,index)=>{
                    return(
                        <>
                         <tbody>
      <tr key={index}>
        <td>{item.ProductName}</td>
        <td>{item.ProductCategory}</td>
        <td>{item.ProductQuantity}</td>
        <td onClick={()=>handleEdit(item.ProductName)} data-toggle="modal" data-target="#modalLoginForm"><i class="fa fa-edit"></i></td>
        <td onClick={()=>handleRemove(item.ProductName)}><i    class="fa fa-trash" aria-hidden="true"></i></td>


      </tr>
    </tbody>
                        </>
                    )
                })}

      </table>

      <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Update</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
      <Grid item lg={8} sx={{ backgroundColor: '#fff' , p: 10, color: 'white' }} >

<Box sx={{ minWidth: 120 }}>
    <FormControl  fullWidth>

        <TextField id="standard-basic" value={product&& product.ProductName} name="ProductName" label="Product Name (unique) *" variant="standard" onChange={onhandleChange} />
    </FormControl>

    <FormControl fullWidth className='mt-4'>
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

    <FormControl fullWidth className='mt-4'>
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
    <Button className='mt-2' variant="outlined" onClick={handleSubmit}>Update</Button>
</Box>



</Grid>

      </div>
      <div class="modal-footer d-flex justify-content-center">
      <hr style={{ height: '2px' }} />

      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default List