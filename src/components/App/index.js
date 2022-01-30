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
import { useAuth0 } from "@auth0/auth0-react";

const MotionBox = motion(Box)


function App() {
  const[articlesInfo, setArticlesInfo]=useState(articles);
  const{isAuthenticated}=useAuth0();

  if(!isAuthenticated){
    return<div><LoginButton /></div>
  }
  return (
    <div>
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
