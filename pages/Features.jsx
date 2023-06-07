import React from 'react';
import style from "../styles/Features.module.css"

const Card = ({ title, content, imageUrl }) => {
  /*<div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
    <img src={imageUrl} alt={title} className={style.fit}/>
    <button className={style.btn}>Enroll for Feature</button>
  </div>*/
  return (
    <div className="row">
      <div className='col-md-12'>
        <div class="card  m-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={imageUrl} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{content}</p>
                <button type="button" class="btn btn-outline-primary">Enroll for Feature</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const Features = () => {
  return (
    <div className={style.proper}>
      <h1 class="display-3 text-light-emphasis fw-bold">Please select your TEZ redeem choice</h1>
      <div className={style.screenleft}>
        <Card title="Consultancy"
          content="Use the TEZ tokens for a one to one session with a senior crypto guide"
          imageUrl="https://www.freeiconspng.com/thumbs/consultancy-icon/business-consulting-icon-0.png" />

        <Card title="Pooling"
          content="Use your TEZ tokens to participate in a pooling event"
          imageUrl="https://simg.nicepng.com/png/small/18-181111_free-icons-png-money-bag-icon-transparent-background.png" />

      </div>
      <div className={style.screenright}>

        <Card title="Crowdfunding"
          content="Use the TEZ tokens to promote the emerging projects/D-Apps and gain with them"
          imageUrl="https://previews.123rf.com/images/bsd555/bsd5552011/bsd555201102851/159555435-crowdfunding-linear-icon-practice-funding-project-by-raising-small-amounts-of-money-from-people.jpg"
        />

        <Card title="Basket Investment"
          content="Invest your earned TEZ in a safe and tested basket of cryptocurrencies"
          imageUrl="https://png.pngtree.com/png-clipart/20190705/original/pngtree-basket-icon-vector-illustration-in-line-style-for-any-purpose-png-image_4257254.jpg"
        />
      </div>
    </div>
  );
};

export default Features;
