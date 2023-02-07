import React from 'react'
import './App.css'
import  Header  from './components/Header'
import Card from './components/Card'
import Data from './Data'


export default function App() {

  const cards = Data.map((item)=>{
    return(
      <Card
        title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description = {item.description}
        imageUrl = {item.imageUrl}
      
      />
    )
  })


  return (
    <div className="app--container">
      <Header/>
      {cards}
    </div>
  );
}


