import React from 'react';
import { Link, useParams } from 'react-router-dom';
import allDatas from '../../data/allData';
import Header from '../header/Header';

const Gruzovoy = () => {
  const { category } = useParams();
  allDatas.find((product) => product.category === category);
  const gruzovoy = allDatas.filter((g) => g.category === 'gruzovoy');

  return (
    <>
      <Header />
      {gruzovoy.map((item) => (
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

export default Gruzovoy;
