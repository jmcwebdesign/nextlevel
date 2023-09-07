import React from 'react';
import './article.css';

const Article = ({ imgUrl, desc, title }) => {
  return (
    <div className='nextlvl__blog-container_article'>
      <div className="nextlvl__blog-container_article-image">
        <img src={imgUrl} alt='blog' />
      </div>
      <div className="nextlvl__blog-container_article-content">        
          <h3>{title}</h3>
          <p>{desc}</p>        
      </div>
    </div>
  )
}

export default Article
