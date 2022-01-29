import {useState} from 'react';
import css from "./App.module.css";
import articles from "../../libs/articles";
import ArticleSection from '../ArticleSection';

function App() {
  const[articlesInfo, setArticlesInfo]=useState(articles);
  
  return (
    <main className={css.App}>
      <h1 className={css.title}>WikiPigeon</h1>
      <ArticleSection articles={articlesInfo} />
    </main>
  );
}

export default App;
