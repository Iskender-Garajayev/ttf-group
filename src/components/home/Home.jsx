import React from 'react';
import Header from '../header/Header';
// import Footer from '../footer/Footer';
import allDatas from '../../data/allData';
import { Link } from 'react-router-dom';

const Home = () => {
  const needIds = ['2', '4', '5', '1', '3'];

  const selectedProducts = allDatas.filter((item) =>
    needIds.includes(item._id)
  );

  return (
    <div>
      <Header />

      <div className="main">
        <div className="main-inner">
          <div className="card-box">
            {selectedProducts.map((item) => (
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

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
