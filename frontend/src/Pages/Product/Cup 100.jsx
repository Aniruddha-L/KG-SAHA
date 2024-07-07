import Item from "../../Components/Item";
import Menu from "../../Components/Menu";
import '../../Static/Style/100.css'

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
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={2}
          ></Item>
        </li>
        <li>
          <Item
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={3}
          ></Item>
        </li>
        <li>
          <Item
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={4}
          ></Item>
        </li>
        <li>
          <Item
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={5}
          ></Item>
        </li>
        <li>
          <Item
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={6}
          ></Item>
        </li>
        <li>
          <Item
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={7}
          ></Item>
        </li>
        <li>
          <Item
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={8}
          ></Item>
        </li>
        <li>
          <Item
            name={"Afghan Dry Fruit"}
            size={"100ml"}
            price={"20"}
            image={9}
          ></Item>
        </li>
      </ul>
    </div>
  );
}

export default Cup;
