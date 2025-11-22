import React from 'react';
import allDatas from '../../data/allData';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';

function ProductScreen() {
  const { id } = useParams();

  const product = allDatas.find((p) => p._id === id);

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  return (
    <>
      <Header />
      <div key={product._id}>
        <h1>{product.name}</h1>
        <img src={product.images.img} alt={product.model} />
        <p>{product.description}</p>
        <p>Цена: {product.price}</p>
      </div>
    </>
  );
}

export default ProductScreen;
