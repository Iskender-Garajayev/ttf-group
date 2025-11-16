import React from 'react';
import { Link, useParams } from 'react-router-dom';
import allDatas from '../../data/allData';
import Header from '../header/Header';

const Lodka = () => {
  const { category } = useParams();
  allDatas.find((product) => product.category === category);
  const lodka = allDatas.filter((l) => l.category === 'lodka');

  return (
    <>
      <Header />
      {lodka.map((item) => (
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

export default Lodka;
