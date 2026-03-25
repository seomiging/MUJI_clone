import React from 'react'
import Header_muji from './Header_muji'
import Footer_muji from './Footer_muji'
import Slide_section1 from './section/Slide_section1'
import Button_section from './section/Button_section'
import Newproducts from './section/Newproducts'
import Slide_Section2 from './section/Slide_Section2'
import Eventbanner from './section/Eventbanner'

const App = () => {
  return (
    <div>
     <Header_muji/>
     <Slide_section1/>
     <Button_section/>
     <Newproducts/>
     <Slide_Section2/>
     <Eventbanner/>
     <Footer_muji/>
    </div>
  )
}

export default App
