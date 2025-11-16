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
      {sedan.map((item) => (
        <Link to={`/item/${item._id}`} key={item._id}>
          <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <h2>{item.price}</h2>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Sedan;
