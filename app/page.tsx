import React from 'react'
import Hero from './_components/Hero';
import ScrollUp from './_components/Common/ScrollUp';
import AboutSectionOne from './_components/About/AboutSectionOne';
import AboutSectionTwo from './_components/About/AboutSectionTwo';
import Blog from './_components/Blog';
import { Contact } from 'lucide-react';
import Footer from './_components/Footer';
import Header from './_components/Header';
export default function Home() {
  return (
    <>
      *
      <Header/>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Blog/>
      <Contact/>
      <Footer/>
      
    </>
  );
}