import React, {useState} from 'react';
import ArticleContent from './ArticleContent'
import CommentSection from './CommentSection';
import LikeButton from './LikeButton';
import css from './index.module.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

function ArticleSection({articles}){
    const[likeTimes, setLikeTimes]=useState(0);
    function handleClick(){
        setLikeTimes(likeTimes+1);
    }
    return(
        <article className="container">
    
            {articles.map((article) => {
            return (
                <div>
                    <h2 className={css.title}>{article.title}</h2>
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
