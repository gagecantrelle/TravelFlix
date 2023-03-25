// import react from 'react'
// import axios from 'axios'

////dummy data
let dummydata = [
    {country: 'mexico', movie: 'housefire', likes: 300, dislikes: 30, video: 'video', descriptions: 'descriptions'}, 
    {country: 'usa', movie: 'housefloods', likes: 500, dislikes: 3, video: 'video', descriptions: 'descriptions'}, 
    {country: 'japan', movie: 'housestorm', likes: 1, dislikes: 0, video: 'video', descriptions: 'descriptions'}
]
////

class Video extends React.Component {
    constructor(){
        super()
        this.state={
            //will resprent the list of videos
            videos: []
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


//will run all componets that need to run befor render
componentDidMount(){
  this.getVideosData();  
}

render(){
const {list} = this.state
return(
    <div className="box">
    {list.map(data =>{
        <div>
      <div>{data.movie}</div>  
      <div>{data.video}</div>
      <button onClick={this.thums('likes', data.likes, data._id)}>likes</button>
      <div className="likebutton">{data.likes}</div>
      <button onClick={this.thums('likes', data.likes, data._id)}>dislikes</button>
      <div className="dislikebutton">{data.dislikes}</div>
      <div>{data.descriptions}</div>
      </div>
    })}




    </div>
)    

}

}

export default Video;