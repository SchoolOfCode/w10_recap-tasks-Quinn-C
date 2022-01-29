import {useState} from 'react';
import css from "./App.module.css";
import articles from "../../libs/articles";
import ArticleSection from '../ArticleSection';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import {
  Container,
  Heading,
} from '@chakra-ui/react';


function App() {
  const[articlesInfo, setArticlesInfo]=useState(articles);
  
  return (
    <Container>
      <Heading>WikiPigeon</Heading>
        <ArticleSection articles={articlesInfo} />
    </Container>
    
  );
}

export default App;
