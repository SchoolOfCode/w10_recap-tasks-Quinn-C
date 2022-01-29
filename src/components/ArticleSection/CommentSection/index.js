import Comment from "./Comment";

function CommentSection({article}){  
    return(
        <section>
            {article.comments.map((comment) => {
                    return (
                    <Comment key={comment.id} comment={comment} />
                    );
                })}
        </section>
    )

}
export default CommentSection;