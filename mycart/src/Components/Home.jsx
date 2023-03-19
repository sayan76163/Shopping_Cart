import React from 'react';
import CardItems from './CardItems';
import data from "../Components/Data"
const Home = () => {

    return (
        <>
          <h1 className='text-center mt-3'>Products</h1>  
          <section className='py-4 container'>
            <div className='row justify-content-center'>
              {data.productData.map((item, index)=>{
                    return(
                      <CardItems 
                      img={item.img} 
                      title={item.title}
                      description={item.Description}
                      price={item.price} 
                      item={item}
                      key={index} 
                  />
                    )
              })}
                
            </div>
          </section>
        </>
    );
};

export default Home;