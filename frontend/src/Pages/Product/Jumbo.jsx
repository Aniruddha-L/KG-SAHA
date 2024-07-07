import React from 'react'
import Menu from '../../Components/Menu'
import Item from '../../Components/Item'
import '../../Static/Style/Jumbo.css'

function Jumbo(){
  document.title='Order- Jumbo Cup'
  return (
    <div className='Jumbo'>
      <Menu></Menu>
      <ul className='jumbo_display'>
        <li>
          <Item name={'Butterscotch Bliss'} size={'125ml'} price={'100'} image={23} ></Item>
        </li>
        <li>
          <Item name={'Chocolate Brownie'} size={'125ml'} price={'100'} image={24} ></Item>
        </li>
        <li>
          <Item name={'Fruit N Nut Fantasy'} size={'125ml'} price={'100'} image={25} ></Item>
        </li>
        <li>
          <Item name={'Golden Pearl'} size={'125ml'} price={'100'} image={26} ></Item>
        </li>
        <li>
          <Item name={'Haldi'} size={'125ml'} price={'100'} image={27} ></Item>
        </li>
        <li>
          <Item name={'King Alphonso'} size={'125ml'} price={'100'} image={28} ></Item>
        </li>
        <li>
          <Item name={'Pan-Nawabi'} size={'125ml'} price={'100'} image={29} ></Item>
        </li>
        <li>
          <Item name={'Rajbhoj'} size={'125ml'} price={'100'} image={30} ></Item>
        </li>
        <li>
          <Item name={'Shalimar'} size={'125ml'} price={'100'} image={31} ></Item>
        </li>
      </ul>
    </div>
  )
}

export default Jumbo
