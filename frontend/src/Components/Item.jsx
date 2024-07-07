import "../Static/Style/Item.css";
import adf from '../Static/Asstes/100 ml/Afghan Dry Fruit.png'
import am from '../Static/Asstes/100 ml/Alphonso Mango.png'
import amn from '../Static/Asstes/100 ml/American Nuts.png'
import bb from '../Static/Asstes/100 ml/Butterscotch Bliss.png'
import cc from '../Static/Asstes/100 ml/Choco Chips.png'
import kd from '../Static/Asstes/100 ml/Kaju Draksh.png'
import kpr from '../Static/Asstes/100 ml/Kesar Pista Royale.png'
import raj from '../Static/Asstes/100 ml/Rajbhoj.png'
import vr from '../Static/Asstes/100 ml/Vanilla Royale.png'

function Item({name,size,  price, image}) {
  var source;
  switch(image){
    case 1:
      source = adf
      break
    case 2:
      source = am
      break
    case 3:
      source = amn
      break
    case 4:
      source = bb
      break
    case 5:
      source = cc
      break
    case 6:
      source = kd
      break
    case 7:
      source = kpr
      break
    case 8:
      source = raj
      break
    case 9:
      source = vr
      break
  }
  
  return (
    <div className="item_display">
      <div className="pdt_img"><img src={source} alt="Image missing" /></div>
      <ul className="desc">
        <li>
          <p>{name}</p>
        </li>
        <li>
          <p>{size}</p>
        </li>
        <li>
          <p>Rs.{price}</p>
        </li> 
      </ul>
      <button><b>ADD TO CART</b></button>
    </div>
  );
}

export default Item;
