import React from "react";
import Menu from "../../Components/Menu";
import Item from "../../Components/Item";
import "../../Static/Style/combo.css";

function Combo() {
  document.title = "Order - Combo";
  return (
    <section className="combo">
      <Menu />
      <ul className="combo_dislay">
        <li>
          <Item
            name={"Afghan Dry Fruie"}
            price={"220"}
            image={11}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Alphonso Mango"}
            price={"220"}
            image={12}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Black Current"}
            price={"220"}
            image={13}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Butter Scotch"}
            price={"220"}
            image={14}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Choco Chip"}
            price={"220"}
            image={15}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Creamy Almond"}
            price={"220"}
            image={16}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Kesar Pista Royal"}
            price={"220"}
            image={17}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Rajbhoj"}
            price={"220"}
            image={18}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Spanish Saffron and Cream Balls "}
            price={"220"}
            image={19}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Strawberry"}
            price={"220"}
            image={20}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Tutti Fruti"}
            price={"220"}
            image={21}
            size={"750ml + 750ml"}
          ></Item>
        </li>
        <li>
          <Item
            name={"Vanilla Royal"}
            price={"220"}
            image={22}
            size={"750ml + 750ml"}
          ></Item>
        </li>
      </ul>
    </section>
  );
}

export default Combo;
