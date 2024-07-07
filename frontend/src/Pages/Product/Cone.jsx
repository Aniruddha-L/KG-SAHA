import React from 'react'
import Menu from '../../Components/Menu'
import Item from '../../Components/Item'
import '../../Static/Style/cone.css'

function Cone(){
  document.title = 'Order - Cone'
  return (
    <section className='cone'>
      <Menu></Menu>
      <ul className='cone_display'>
        <li>
          <Item name={'Black Currant'} price={'55'} size={'120ml'} image={32}></Item>
        </li>
        <li>
          <Item name={'Butterscotch'} price={'55'} size={'120ml'} image={33}></Item>
        </li>
        <li>
          <Item name={'Choco Crunch'} price={'55'} size={'120ml'} image={34}></Item>
        </li>
        <li>
          <Item name={'Choco Vanilla'} price={'55'} size={'120ml'} image={35}></Item>
        </li>
        <li>
          <Item name={'Cookie Crunch Delight'} price={'55'} size={'120ml'} image={36}></Item>
        </li>
        <li>
          <Item name={'Pista Badam'} price={'55'} size={'120ml'} image={37}></Item>
        </li>
        <li>
          <Item name={'Two in One'} price={'55'} size={'120ml'} image={38}></Item>
        </li>
      </ul>
    </section>
  )
}

export default Cone
