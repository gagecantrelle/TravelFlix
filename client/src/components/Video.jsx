 import React from 'react'
 import axios from 'axios'
import { Toolbar } from '@mui/material'
 import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
 import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
 import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

////dummy data
let GageDummyData = [
    {country: 'mexico', title: 'housefire', likes: 300, dislikes: 30, video: 'video', synopsis: 'synopsis', id: 1, title_date: '2023-1-1', image: 'image'}, 
    {country: 'usa', title: 'housefloods', likes: 500, dislikes: 3, video: 'video', synopsis: 'synopsis', id: 2, title_date: '2023-1-1', image: 'image'}, 
    {country: 'japan', title: 'housestorm', likes: 1, dislikes: 0, video: 'video', synopsis: 'synopsis', id: 3, title_date: '2023-1-1', image: 'image'}
]
////

class Video extends React.Component {
    constructor(){
        super()
        this.state={
            //will resprent the list of videos
            videos: GageDummyData 
        }
    }
//will get the list of videos from the api and then give that value to the state video key
getVideosData(){
    axios.get('/')
    .then((data)=>{
      if(data){
       this.setState({
        videos: data
       })
      console.log('sucessfull get')
      }else{
      console.log('unsucessfull get')
      }
    })
    .catch((err)=>{
        console.log('ERROR was unable to get video data:  ', err)
    })
}

//onclick add to like of dislike
thums(opition, value, id){
if(opition ===  'likes'){
axios.put(`/${id}`,{
    likes: value + 1
})
.then((data)=>{
    if(data){
    console.log('sucessfull put')
    }else{
    console.log('unsucessfull put')
    }
})
.catch((err)=>{
    console.log('ERROR was unable to get video data:  ', err)
})
}else if(opition === 'dislikes'){
    axios.put(`/${id}`,{
        dislikes: value + 1
    })
    .then((data)=>{
        if(data){
        console.log('sucessfull put')
        }else{
        console.log('unsucessfull put')
        }
    })
    .catch((err)=>{
        console.log('ERROR was unable to get video data:  ', err)
    })
}
}

log(id, value){
    console.log(value, id)
//   if(value === 'like'){
//     for(let i = 0; i < this.state.videos.length; i++){
//         if(this.state.videos[i].id === id){
//             this.state.video[i].likes += 1;
//         }
//     }
    
//   }else if(value === 'dislike'){
//     for(let i = 0; i < this.state.videos.length; i++){
//         if(this.state.videos[i].id === id){
//             this.state.video[i].likes += 1;
//         }
//     }
//   }
//   console.log(this.state.videos)
}

//will run all componets that need to run befor render
// componentDidMount(){
//   this.getVideosData();  
// }

render(){
const {videos} = this.state
//this.thums('likes', data.likes, data._id)
//this.thums('dislikes', data.dislikes, data._id)
console.log(videos);
return(
    <div className="box">
    {videos.map(data =>{return(
        <div key={data.country}>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
        <div>{data.title}</div>
        <div>{data.image}</div>  
        <div>{data.video}</div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar variant="dense">
      <button onClick={() => this.log(data.id, 'like')} ><ThumbUpOffAltIcon></ThumbUpOffAltIcon></button>
      <div className="likebutton">{data.likes}</div>
      <button onClick={() => this.log(data.id, 'dislike')}><ThumbDownOffAltIcon></ThumbDownOffAltIcon></button>
      <div className="dislikebutton">{data.dislikes}</div>
      </Toolbar>
      </AppBar>
      </Box>
      <div>made in {data.title_date}</div>
      <div>{data.synopsis}</div>
      </CardContent>
      </Card>
      </div>
    )})}




    </div>
)    

}

}

export default Video;