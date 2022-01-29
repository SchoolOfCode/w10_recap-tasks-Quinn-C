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
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

const MotionBox = motion(Box)


function App() {
  const[articlesInfo, setArticlesInfo]=useState(articles);
  
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Container>
        <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>WikiPigeon</Heading>
          <MotionBox
          height='40px'
          bg='red.300'
          drag='x'
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />  
          <ArticleSection articles={articlesInfo} />
      </Container>
    
    </div>

  );
}

export default App;
