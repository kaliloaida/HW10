import PostItem from "./PostItem"
const Post =({data})=>{
    return(
<>
    {data.map((el)=>{
        return(
            <PostItem el = {el} key = {el.id}/>
        )
    })}
</>

    )
    
}
export default Post