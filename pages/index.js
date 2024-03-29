import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Ambientadores de alta calidad</h2>
      <p>Ambientadores basados en la alta perfumería, compuesto por alcohol de melazas y esencias naturales aromáticas. Calidad máxima, perfuma, desodoriza y purifica el ambiente.</p>
    </div>
    

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
       
    </div>

    <div className="Team">
      <h2>Nosotros</h2>
      <p>Somos un equipo familiar con más de 20 años asesorando clientes y particulares en Sevilla y Andalucía. Para nosotros es importante compartir la mejor experiencia en fragancias, ambientadores y perfumes que vaya más acorde a su negocio</p>
      <img src="/ambientalo3.png" alt=""></img>
    </div>

     
    

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
