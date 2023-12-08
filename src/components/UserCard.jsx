import { Box, Experimental_CssVarsProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import photo from '../assets/profile.png'
import '../App.css'
import axios from 'axios';
import { useEffect } from 'react';
// import photo from '../assets/profile.png'

export default function UserCard({props}) {
    // console.log(props)
    const [img , setImg] = useState(null); 
    const fun = async()=>{
      try {
        const res = await axios.get(props.avatar)
        setImg(true)
      } catch (error) {
        setImg(false)
      }
   
   
        
    }

    useEffect(()=>{
      fun()
        },[])

  return (

    <div style={{width:'100%'}} className='maincard'>
     
        <div className='subusercard' style={{display : 'flex' , justifyContent : 'center' , alignContent : 'center' , borderStyle : 'solid'}}>
            <div className='userCardimagediv' style={{ textAlign : 'right'  ,width : '50%'}}>
              
              {img === null ? <><CircularProgress className='userCardimg'/></> : ""}
              {img === true ? <div>
                <img className='userCardimg' src={props.avatar} style={{ borderRadius : '50%'}} alt='profile' 
             onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
            }}
            />
              </div> : 
              ""}

              {img === false ?    <div>
                <img src={photo} className='userCardimg' style={{ borderRadius : '50%'}} alt='sumne'></img>
                
                </div> : ""}
              
            
            
            
            </div>
            <div className='userCardname' style={{width : '50%' , fontWeight:'bold'  }}><p>{props.profile.firstName} {props.profile.lastName}</p></div>
        </div>
        
    </div>
  )
}
