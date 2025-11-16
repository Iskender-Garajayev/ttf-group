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
      {pricep.map((item) => (
        <Link to={`/item/${item._id}`} key={item._id}>
          <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Pricep;
