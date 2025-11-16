import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import allDatas from '../../data/allData';
import { Link } from 'react-router-dom';

const Home = () => {
  const needIds = ['2', '4', '5', '1'];

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
              <>
                <Link to={`/item/${item._id}`} key={item._id}>
                  <div className="card-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                </Link>
                <div className="card-title">
                  <h2>{item.name}</h2>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

// const Sedan = () => {
//   const needIds = ['2', '5', '7'];

//   const selectedProducts = allDatas.filter((item) =>
//     needIds.includes(item._id)
//   );

//   return (
//     <>
//       {selectedProducts.map((item) => (
//         <Link to={`/avto/${item._id}`} key={item._id}>
//           <div>
//             <h1>{item.name}</h1>
//             <img src={item.image} alt={item.name} />
//             <h2>{item.price}</h2>
//           </div>
//         </Link>
//       ))}
//     </>
//   );
// };
