import { Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import React ,{useEffect , useState}from 'react'
import photo from '../assets/profile.png'

export default function MobileView({props}) {
    const style = {
        position: 'absolute',
        top: '40%',
        // left: '50%',
        bottom : '0',
        // transform: 'translate(-50%, -50%)',
        height : '60%',
        width: '100%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        // boxShadow: 24,
        // p: 2,
        // display : 'flex',
        // flexDirection : 'column',
        // justifyContent : 'center',
        // alignContent : 'center'
      };

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
    <div style={{width : '100%'}} className='' >
        
        <Box sx={style}>
        <div className='' style={{margin  : '2%', height : '100eh',  position : 'fixed' , display : 'flex' , flexDirection : 'row'  , border :'1' , borderStyle : 'dotted'}}>
      
      <div className='' style={{ width : '40%', textAlign :'center' , backgroundImage : 'linear-gradient(to right bottom, #ffbf00, #f19f00, #e08001, #cc6108, #b5440e)'}}>
 
{img === null ? <div><CircularProgress sx={{mt :5}}/></div> : ""};
{img === true ? <div>
  <img src={props.avatar} alt='pp' className=''
   onError={({ currentTarget }) => {
     currentTarget.onerror = null; // prevents looping
     currentTarget.src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
   }}
 style={{borderRadius : '50%' ,border : '1 Solid black' , marginTop:'35px'}}/> 
</div>:""}
{img === false ? <div>
  <img src={photo} alt='pp' className=''
  
 style={{borderRadius : '50%' ,border : '1 Solid black' , marginTop:'35px', height :'110px' , width : '110px'}}/> 
</div>:""}

 
 
 

 
 <p className='' style={{color : 'white'}}>@{props.profile.username}</p>
 <p style={{color : 'white'}}>{props.jobTitle}</p>
      </div>
      <div style={{ width : '60%'}} className=''>
       <h2 style={{marginLeft : '5%'}}>User Information</h2>
       <hr/>
       <div className='' style={{display : 'flex' , justifyContent : 'center' , marginLeft : '3%'}}>
       <div className='' style={{width:'50%' , textAlign:'left' }}> <p style={{fontWeight:'bold' , marginBottom : '0'}}> First Name: </p> <p style={{marginTop :'3px'}}> {props.profile.firstName} </p>        </div>
       <div className='' style={{width:'50%' , textAlign:'left'}}> <p style={{fontWeight:'bold', marginBottom : '0'}}> Last Name: </p> <p style={{marginTop :'3px'}}> {props.profile.lastName} </p>       </div>
       </div>
       <div className=''  style={{ marginLeft : '3%'}}>
         <p style={{fontWeight : 'bold' , marginBottom : '0'}}>email: </p><p style={{marginTop :'3px'}}>{props.profile.email}</p>
       </div>
       <div className=''  style={{ marginLeft : '3%'}}>
         <p style={{fontWeight : 'bold', marginBottom : '0'}}>Bio: </p><p style={{marginTop :'3px'}}>{props.Bio}</p>
       </div>
      </div>
     </div>
        </Box>
    </div>
  )
}
