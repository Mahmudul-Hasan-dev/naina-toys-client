import React from 'react';
import Banner from '../Banner/Banner';
import ShopByAge from '../ShopByAge/ShopByAge';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import gif4 from '../../../../assets/gif/4.gif'
import useTitle from '../../../../hooks/useTitle';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center mt-5 '>About us <img src={gif4} alt=""  width={100}/> </h1>
            <About></About>
            <h1 className='text-center my-5'>Shop By Category</h1>
            <ShopByCategory></ShopByCategory>
            <h1 className='text-center my-5'>Shop By Age</h1>
            <ShopByAge></ShopByAge>
            <h1 className='text-center my-5'>Gallery</h1>
            <Gallery></Gallery>
            
        </div>
    );
};

export default Home;