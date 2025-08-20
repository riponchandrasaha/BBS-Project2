import React from 'react';
import Navsection from '../components/Navsection';
import Background from '../components/Background';
import Buttonsection from '../components/Buttonsection';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import { Slider } from '@material-tailwind/react';
import Review from '../components/Review';
import Card4 from '../components/Card4';
import Card5 from '../components/Card5';
import Marquee from 'react-fast-marquee';
import ClientReview from '../components/ClientReview';
import Card6 from '../components/Card6';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div className='p-[40px_140px_60px_140px] max-full bg-[#130202] '>
            <Navsection>
            </Navsection>
            <Background></Background>
            <Buttonsection></Buttonsection>
            <Card></Card>
            <Card2></Card2>
            <Card3></Card3>
            <Review></Review>
            <ClientReview></ClientReview>
            <ClientReview></ClientReview>
            
            <Card4></Card4>
            <Card5></Card5>
            <Card6></Card6>
            <Footer></Footer>






        </div>
    );
};

export default Home;