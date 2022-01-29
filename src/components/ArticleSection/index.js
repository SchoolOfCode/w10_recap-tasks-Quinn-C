import React, {useState} from 'react';
import ArticleContent from './ArticleContent'
import CommentSection from './CommentSection';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { Heading } from '@chakra-ui/react'

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
                    <Heading as='h4' size='lg'>
                        {article.title} 
                    </Heading>
                    <ArticleContent article={article} />
                    <CommentSection article={article} handleClick={()=> handleClick} likeTimes={likeTimes} />
                </div>
                
                );
            })
        }   
        </article>  

    )
};



export default ArticleSection;
