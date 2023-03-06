import {Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import GiteRoundedIcon from '@mui/icons-material/GiteRounded';

export default function Topbar() {
  return (
    <div>
         <Typography sx={
        {
            display: 'flex',                 
        }
    }>
<Box sx={{
    fontWeight:'bold',
    fontSize:37
    }}>Amritpal Singh Sidhu
     <Box sx={{
    fontWeight:'normal',
    fontSize:17,
    ml:5
   }}> AWS Solutions Architect/Developer</Box>
   </Box>
  <Divider orientation="vertical" flexItem sx={{ml:22,border:1,borderColor:'#FCAE1E'}}></Divider>
 
  <ContactMailRoundedIcon sx={{ml:5,color:'rgb(25, 118, 210)'}}></ContactMailRoundedIcon><Box sx={{ml:1.5}}>amritsidhu1989@gmail.com</Box>
  <ContactPhoneRoundedIcon sx={{ml:5,color:'rgb(25, 118, 210)'}}></ContactPhoneRoundedIcon><Box sx={{ml:1.5}}>+44-7438325656</Box>
  
  </Typography>   

  <Typography sx={{ml:65,mt:-5,display:'flex'}}>
  <GiteRoundedIcon sx={{ml:5,color:'rgb(25, 118, 210)'}}></GiteRoundedIcon><Box sx={{ml:1.5,}}>https://github.com/itssidhu-makha</Box>
        </Typography>
        <Divider sx={{mt:5,mb:5,border:1,borderColor:'#FCAE1E'}}></Divider>
    </div>
    
  );
}
