import React from 'react';
import { Link, useParams } from 'react-router-dom';
import allDatas from '../../data/allData';
import Header from '../header/Header';

const Pricep = () => {
  const { category } = useParams();
  allDatas.find((product) => product.category === category);
  const pricep = allDatas.filter((l) => l.category === 'pricep');

  return (
    <>
      <Header />

      <div className="main">
        <div className="main-inner">
          <div className="card-box">
            {pricep.map((item) => (
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

export default Pricep;
