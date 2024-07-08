import React from "react";
import Menu from "../../Components/Menu";
import Item from '../../Components/Item'
import '../../Static/Style/Kulfi.css'

function Kulfi() {
  return (
    <div className="kulfi">
      <Menu></Menu>
      <ul className="kulfi-display">
        <li>
          <Item name={'Badshahi'} size={'50ml'} price={'20'} image={46}></Item>
        </li>
        <li>
          <Item name={'Bombay'} size={'50ml'} price={'20'} image={47}></Item>
        </li>
        <li>
          <Item name={'Kaju Malai'} size={'50ml'} price={'20'} image={48}></Item>
        </li>
        <li>
          <Item name={'Kashmiri'} size={'50ml'} price={'20'} image={49}></Item>
        </li>
        <li>
          <Item name={'Mawa Malai'} size={'50ml'} price={'20'} image={50}></Item>
        </li>
        <li>
          <Item name={'Pista Malai'} size={'50ml'} price={'20'} image={51}></Item>
        </li>
        <li>
          <Item name={'Punjabi'} size={'50ml'} price={'20'} image={52}></Item>
        </li>
        <li>
          <Item name={'Rabdi'} size={'50ml'} price={'20'} image={53}></Item>
        </li>
        <li>
          <Item name={'Rajasthani'} size={'50ml'} price={'20'} image={54}></Item>
        </li>
        <li>
          <Item name={'Rajbhoj'} size={'50ml'} price={'20'} image={55}></Item>
        </li>
        <li>
          <Item name={'Rajwadi'} size={'50ml'} price={'20'} image={56}></Item>
        </li>
        <li>
          <Item name={'Rosogolla'} size={'50ml'} price={'20'} image={57}></Item>
        </li>
        <li>
          <Item name={'Shahi badam'} size={'50ml'} price={'20'} image={58}></Item>
        </li>
      </ul>
    </div>
  );
}

export default Kulfi;
