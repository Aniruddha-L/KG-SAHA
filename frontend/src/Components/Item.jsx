import "../Static/Style/Item.css";

function Item() {
  return (
    <div className="item_display">
      <div className="pdt_img"></div>
      <ul className="desc">
        <li>
          <p>AMUL BULK VANILLA</p>
        </li>
        <li>
          <p>5L</p>
        </li>
        <li>
          <p>Rs. 600</p>
        </li>
      </ul>
      <button><b>ADD TO CART</b></button>
    </div>
  );
}

export default Item;
