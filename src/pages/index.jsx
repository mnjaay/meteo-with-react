import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import HeroSection from '../components/herosection'
import { fetchPosts } from '../functions/api';
import Card from '../components/card';


function Index() {
   
    return (
        <>
            <Header />
            <HeroSection />
          
           

        </>
    )
}

export default Index