import React from 'react';
import allDatas from '../../data/allData';
import { Link, useParams } from 'react-router-dom';
import Header from '../header/Header';

const Sedan = () => {
  const { category } = useParams();
  allDatas.find((product) => product.category === category);
  const sedan = allDatas.filter((s) => s.category === 'sedan');

  return (
    <>
      <Header />
      <div className="main">
        <div className="main-inner">
          <div className="card-box">
            {sedan.map((item) => (
              <div className="card">
                <Link to={`/item/${item._id}`} key={item._id}>
                  <div className="card-img">
                    <img src={item.images.img} alt={item.model} />
                  </div>
                </Link>
                <div className="card-title">
                  <h2>{item.model}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sedan;
