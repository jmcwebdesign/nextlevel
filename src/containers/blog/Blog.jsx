import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='nextlvl__blog section__padding' id='blog'>
      <div className="nextlvl__blog-heading">
        <h1>Latest Articles</h1>
        <p>Stay up to date with our informative blog posts</p>
      </div>
      <div className="nextlvl__blog-container">
        <div className="nextlvl__blog-container_groupA">
          <Article linkUrl='https://nextlevellaunchpad.com/category/accounting/' imgUrl={blog01} title='Accounting' desc='Decoding numbers to drive your business narrative forward.' />
        </div>
        <div className="nextlvl__blog-container_groupB">
          <Article linkUrl='https://nextlevellaunchpad.com/category/it-solutions/' imgUrl={blog02} title='IT Solutions' desc='Empowering businesses with tech that defines tomorrow.' />
          <Article linkUrl='https://strativerhr.com/blog/' imgUrl={blog03} title='Human Resources' desc='Cultivating talent, shaping organizational triumphs.' />
          <Article linkUrl='https://nextlevellaunchpad.com/category/marketing/' imgUrl={blog04} title='Marketing' desc='Crafting messages that resonate and captivate audiences.' />
          <Article linkUrl='https://nextlevellaunchpad.com/category/operations/' imgUrl={blog05} title='Operations' desc='Streamlining processes for optimal business efficiency.' />
        </div>
      </div>
    </div>
  )
}

export default Blog
