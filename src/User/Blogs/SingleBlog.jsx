
import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../../Globals/config';
import{Box,Typography,Divider} from "@mui/material";

const SingleBlog = () => {
    const{id}=useParams();
    const[SingleBlog,setSingleBlog]=React.useState({});
    const getSingleBlog=async()=>{
        let res=await axios.get(`${baseurl}/Amishablog/${id}`);
        setSingleBlog(res.data);
    };
    React.useEffect(()=>
    {
        getSingleBlog();
    },[]);
  return (
    <div>
        <Box sx={{p:3}}>
            <Typography sx={{fontSize:"20px",fontWeight:"800"}}>
                {SingleBlog.title}
            </Typography>
            <img src={SingleBlog.image}
            style={{height:"400px",width:"100%"}}
            />
            <Typography sx={{pb:2,pt:2}}>{SingleBlog.author}
            </Typography>
            <Divider/>
            <Typography sx={{pt:3}}>{SingleBlog.description}
            </Typography>
        </Box>
    </div>
  );
};

export default SingleBlog