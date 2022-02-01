import "./PostItem.css"
const PostItem = (props) => {
  return (
    <div className="photos">
        <h2 className="p-title" >{props.el.title}</h2>
        <p className="p-id" >{props.el.id}</p>
        <img className="photo1" src={props.el.url} />
        {/* <img className="photo2" src={props.el.thumbnailUrl} /> */}
    </div>
  );
};
export default PostItem;
