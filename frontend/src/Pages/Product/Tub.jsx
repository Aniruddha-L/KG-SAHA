import React from "react";
import Menu from "../../Components/Menu";
import Item from "../../Components/Item";
import "../../Static/Style/tub.css";

function Tub() {
  return (
    <section className="tub">
      <Menu></Menu>
      <ul className="tub_dispaly">
        <li>
          <Item
            name={"Choco Chips"}
            size={"1L"}
            price={"250"}
            image={39}
          ></Item>
        </li>
        <li>
          <Item
            name={"Chocolate Brownie"}
            size={"1L"}
            price={"250"}
            image={40}
          ></Item>
        </li>
        <li>
          <Item
            name={"Fruit N Nut Fantasy"}
            size={"1L"}
            price={"250"}
            image={41}
          ></Item>
        </li>
        <li>
          <Item
            name={"King Alphonso"}
            size={"1L"}
            price={"250"}
            image={42}
          ></Item>
        </li>
        <li>
          <Item
            name={"Moroccan Dry Fruit"}
            size={"1L"}
            price={"250"}
            image={43}
          ></Item>
        </li>
        <li>
          <Item name={"Rajbhog"} size={"1L"} price={"250"} image={44}></Item>
        </li>
        <li>
          <Item
            name={"Roasted Almond"}
            size={"1L"}
            price={"250"}
            image={45}
          ></Item>
        </li>
      </ul>
    </section>
  );
}

export default Tub;
