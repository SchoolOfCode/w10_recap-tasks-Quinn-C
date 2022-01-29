

function ArticleParagraph({article}){
    return(
        <div>
            {article.paragraphs.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.text}</p>
            ))}
        </div>
    )
}
export default ArticleParagraph;