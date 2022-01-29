function LikeButton({handleClick, likeTimes}){
    return(
        <button onClick={handleClick}>{`Like 👍 ${likeTimes}`}</button>
    )
}
export default LikeButton;