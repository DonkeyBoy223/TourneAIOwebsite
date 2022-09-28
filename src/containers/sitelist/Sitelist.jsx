import React from 'react';
import Article from '../../components/article/Article';
import { asos, office, kith, footlocker, jdsport, offspring, argos, footpatrol, hipstore, bstn, size, footasylum, luisa, stress, yme, scan, curry, zalando } from './imports';
import './sitelist.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="sitelist">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Our<br /> Sitelist</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={office} date="" />
        <Article imgUrl={zalando}  />
        <Article imgUrl={footasylum} />
        <Article imgUrl={bstn} />
        <Article imgUrl={hipstore} />
        <Article imgUrl={size} />
        <Article imgUrl={luisa} />
        <Article imgUrl={curry} />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={offspring} date="" text="Offspring" />
        <Article imgUrl={asos} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={jdsport} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={kith} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={footlocker} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={argos} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={scan} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={yme} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
