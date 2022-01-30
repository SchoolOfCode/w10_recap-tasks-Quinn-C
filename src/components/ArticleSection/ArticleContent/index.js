import ArticleParagraph from "./ArticleParagraph";
function ArticleContent({article}){
    return(
        <ArticleParagraph key = {article.id} article={article} />
    )
}
export default ArticleContent;