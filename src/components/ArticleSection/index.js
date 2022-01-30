import React, {useState} from 'react';
import ArticleContent from './ArticleContent'
import CommentSection from './CommentSection';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { Heading } from '@chakra-ui/react';
import { Routes, Route, Link } from "react-router-dom";

function ArticleSection({articles}){
    
    return(
        <article className="container">
    
            {articles.map((article) => {
            return (
                <div>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
                    <Heading as='h4' size='lg'>
                        {article.title} 
                    </Heading>
                    <ArticleContent article={article} />
                    <CommentSection article={article} />
                </div>
                
                );
            })
        }   
        </article>  

    )
};



export default ArticleSection;
