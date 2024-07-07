import Item from "../../Components/Item";
import Menu from "../../Components/Menu";
import '../../Static/Style/cup.css'

function Cup() {
  document.title = "Order - Cup 100ml";
  return (
    <div className="cup_100">
      <Menu></Menu>
      <ul className="display">
        <li>
          <Item
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={1}
          ></Item>
        </li>
        <li>
          <Item
            name={"Alphonso Mango"}
            size={"100ml"}
            price={"20"}
            image={2}
          ></Item>
        </li>
        <li>
          <Item
            name={"American Nuts"}
            size={"100ml"}
            price={"20"}
            image={3}
          ></Item>
        </li>
        <li>
          <Item
            name={"Butterscotch Bliss"}
            size={"100ml"}
            price={"20"}
            image={4}
          ></Item>
        </li>
        <li>
          <Item
            name={"Choco Chips"}
            size={"100ml"}
            price={"20"}
            image={5}
          ></Item>
        </li>
        <li>
          <Item
            name={"Kaju Draksh"}
            size={"100ml"}
            price={"20"}
            image={6}
          ></Item>
        </li>
        <li>
          <Item
            name={"Kesar Pista Royale"}
            size={"100ml"}
            price={"20"}
            image={7}
          ></Item>
        </li>
        <li>
          <Item
            name={"Rajbhoj"}
            size={"100ml"}
            price={"20"}
            image={8}
          ></Item>
        </li>
        <li>
          <Item
            name={"Vanilla Royale"}
            size={"100ml"}
            price={"20"}
            image={9}
          ></Item>
        </li>
        <li>
          <Item
            name={"Vanilla Royale"}
            size={"65ml"}
            price={"15"}
            image={9}
          ></Item>
        </li>
        <li>
          <Item
            name={"Strawberry"}
            size={"65ml"}
            price={"15"}
            image={10}
          ></Item>
        </li>
      </ul> 
    </div>  
  );
}

export default Cup;
