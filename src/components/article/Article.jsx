import React from 'react';
import './article.css';

const Article = ({ linkUrl, imgUrl, desc, title }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className='nextlvl__blog-container_article-link'>
      <div className='nextlvl__blog-container_article'>
        <div className="nextlvl__blog-container_article-image">
          <img src={imgUrl} alt='blog' />
        </div>
        <div className="nextlvl__blog-container_article-content">        
            <h3>{title}</h3>
            <p>{desc}</p>        
        </div>
      </div>
    </a>
  )
}

export default Article
