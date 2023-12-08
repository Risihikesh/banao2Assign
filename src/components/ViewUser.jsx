import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/material';
import photo from '../assets/profile.png'
import axios from 'axios';
import '../App.css'
export default function ViewUser({props}) {
  // console.log(props)
const [img , setImg] = useState(null);
const fetchimg = async()=>{
  setImg(null)
 try {
  const res = await axios.get(props.avatar)
  setImg(true);
 } catch (error) {
  setImg(false)
 }
 
}
useEffect(()=>{
fetchimg();
},[props])

  return (
     <div className='viewCard' style={{ position : 'fixed' , display : 'flex' , flexDirection : 'row' , marginTop : '30px' , border :'1' , borderStyle : 'solid', borderColor: 'violet'}}>
      
     <div className='viewCardleft' style={{ textAlign :'center' , backgroundImage : 'linear-gradient(to right bottom, #ffbf00, #f19f00, #e08001, #cc6108, #b5440e)'}}>

{img === null ? <><CircularProgress className='viewCardimg'/></> : ""}
{img === true ? <div>
  <img src={props.avatar} alt='pp' className='viewCardimg'
  onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  }}
style={{borderRadius : '50%' ,border : '1 Solid black'}}/> 
</div>: ""}
{img === false ?  <div>
  <img src={photo} alt='pp' className='viewCardimg'
  onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  }}
style={{borderRadius : '50%' ,border : '1 Solid black'}}/>
</div> : "" }








<p className='viewCardusername' style={{color : 'white'}}>@{props.profile.username}</p>
<p style={{color : 'white'}}>{props.jobTitle}</p>
     </div>
     <div style={{ }} className='viewCardright'>
      <h1 style={{marginLeft : '5%'}}>User Information</h1>
      <hr/>
      <div className='firstext'style={{display : 'flex' , justifyContent : 'center'}}>
      <div className='sumne'style={{width:'50%' , textAlign:'left' }}> <p style={{fontWeight:'bold'}}> First Name : </p> <p> {props.profile.firstName} </p>        </div>
      <div className='sumne'style={{width:'50%' , textAlign:'left'}}> <p style={{fontWeight:'bold'}}> Last Name : </p> <p> {props.profile.lastName} </p>       </div>
      </div>
      <div className='secondtext' >
        <p style={{fontWeight : 'bold'}}>email : </p><p>{props.profile.email}</p>
      </div>
      <div className='secondtext'>
        <p style={{fontWeight : 'bold'}}>Bio : </p><p>{props.Bio}</p>
      </div>
     </div>
    </div>
  )
}
