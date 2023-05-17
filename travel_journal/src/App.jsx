import React from 'react';
import Header from './Header';
import data from './data';
import Content from './Content';


export default function App() {
    const cards = data.map(item => {
        return (
            <Content
                key={item.id}
                item={item}
            /> )
     }) 

  return (
    <>
        <Header/>
        {cards}
    </>
  )
}