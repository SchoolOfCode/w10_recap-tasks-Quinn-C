import {useState} from 'react';
import "./App.css";
import articles from "../../libs/articles";
import ArticleSection from '../ArticleSection';

function App() {
  const[articlesInfo, setArticlesInfo]=useState(articles);
  
  return (
    <main className="App">
      <h1>WikiPigeon</h1>
      <ArticleSection articles={articlesInfo} />
    </main>
  );
}

export default App;
