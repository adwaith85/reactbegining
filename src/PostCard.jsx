function PostCard(props){

    return<>
    <div style={{border:"3px solid black",
       background:" linear-gradient(30deg,#0753,#3c3eaf)",
       margin:"5px",
      
       fontWeight:"bold"}}>
      
  <h1 style={{fontSize:"20px", fontWeight:"bolder",fontFamily:"Montserrat"}}>Name: {props.name}</h1>
  <p>Division:{props.dec}<br/>
    District:{props.dis}
  </p>
    </div>
  
    </>
}

export default PostCard