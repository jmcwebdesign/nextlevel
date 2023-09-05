import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='nextlvl__blog section__padding' id='blog'>
      <div className="nextlvl__blog-heading">
        <h1>Latest Articles</h1>
        <h3>Stay up to date with our informative blog posts</h3>
      </div>
      <div className="nextlvl__blog-container">
        <div className="nextlvl__blog-container_groupA">
          <Article imgUrl={blog01} title='Accounting' desc='Brief description of blog section' />
        </div>
        <div className="nextlvl__blog-container_groupB">
          <Article imgUrl={blog02} title='IT Solutions' desc='Brief description of blog section' />
          <Article imgUrl={blog03} title='Human Resources' desc='Brief description of blog section' />
          <Article imgUrl={blog04} title='Marketing' desc='Brief description of blog section' />
          <Article imgUrl={blog05} title='Operations' desc='Brief description of blog section' />
        </div>
      </div>
    </div>
  )
}

export default Blog
