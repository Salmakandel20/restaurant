import React from 'react'
import Baked from '../Components/Home/Baked/Baked'
import Blog from '../Components/Home/Blogs/Blog'
import Faq from '../Components/Home/Faq/Faq'
import Form from '../Components/Home/Form/Form'
import Header from '../Components/Home/Header/Header'
import Ingredients from '../Components/Home/Ingredients/Ingredients'
import Prelex from '../Components/Home/Prelax/Prelex'
import Pride from '../Components/Home/Pride/Prid'
import Title from '../Components/Home/Title/Title'
import SliderTitle from  "../Components/Utility/SliderTitle/SliderTitle"
import Footer from "../Components/Utility/Footer/Footer"
export default function Home() {
  return (
    <div>
        <Header/>
        <Title/>
        <Pride/>
        <Ingredients/>
        <Prelex/>
        <Blog/>
        <SliderTitle/>
        <Faq/>
        <Baked/>
        <Form/>
        <Footer/>

    </div>
  )
}
