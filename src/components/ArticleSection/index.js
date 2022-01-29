import React, {useState} from 'react';
import ArticleContent from './ArticleContent'
import CommentSection from './CommentSection';
import LikeButton from './LikeButton';
function ArticleSection({articles}){
    const[likeTimes, setLikeTimes]=useState(0);
    function handleClick(){
        setLikeTimes(likeTimes+1);
    }
    return(
        <article className="post">
    
            {articles.map((article) => {
            return (
                <div>
                    <h2>{article.title}</h2>
                    <ArticleContent article={article} />
                    <LikeButton handleClick={handleClick} likeTimes={likeTimes}/>
                    <CommentSection article={article} />
                </div>
                
                );
            })
        }   
        </article>  

    )
};



export default ArticleSection;
