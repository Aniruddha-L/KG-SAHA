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
import cup_straw from '../Static/Asstes/65 ml/Strawberry.png'

import combo_adf from '../Static/Asstes/Combo/Afghan dry fruit.png'
import combo_mango from '../Static/Asstes/Combo/Alphonso mango.png'
import combo_bc from '../Static/Asstes/Combo/Black current.png'
import combo_bs from '../Static/Asstes/Combo/Bs.png'
import combo_cc from '../Static/Asstes/Combo/Choco Chips.png'
import combo_ca from '../Static/Asstes/Combo/Creamy Almond.png'
import combo_kpr from '../Static/Asstes/Combo/Kesar Pista Royale.png'
import combo_raj from '../Static/Asstes/Combo/Rajbhoj.png'
import combo_sscb from  '../Static/Asstes/Combo/sscb.png'
import combo_straw from "../Static/Asstes/Combo/Strawberry.png"
import combo_tf from  "../Static/Asstes/Combo/Tutti Frutti.png"
import combo_van from  "../Static/Asstes/Combo/Vanilla.png"

import jumbo_bb from '../Static/Asstes/Jumbo Cup/Butterscotch Bliss.png'
import jumbo_cb from '../Static/Asstes/Jumbo Cup/Chocolate Brownie.png'
import jumbo_fnnf from '../Static/Asstes/Jumbo Cup/Fruit N Nut Fantasy.png'
import jumbo_gp from '../Static/Asstes/Jumbo Cup/Golden Pearl.png'
import jumbo_h from '../Static/Asstes/Jumbo Cup/Haldi.png'
import jumbo_raj from '../Static/Asstes/Jumbo Cup/Rajbhoj.png'
import jumbo_ka from '../Static/Asstes/Jumbo Cup/King Alphonso.png'
import jumbo_pn from '../Static/Asstes/Jumbo Cup/Pan-Nawabi.png'
import jumbo_sh from '../Static/Asstes/Jumbo Cup/Shalimar.png'

import cone_bc from '../Static/Asstes/Tricone/Black Currant.png'
import cone_b from '../Static/Asstes/Tricone/Butterscotch.png'
import cone_cc from '../Static/Asstes/Tricone/Choco Crunch.png'
import cone_cv from '../Static/Asstes/Tricone/Choco Vanilla.png'
import cone_ccd from '../Static/Asstes/Tricone/Cookie Crunch Delight.png'
import cone_pd from '../Static/Asstes/Tricone/Pista Badam.png'
import cone_tio from '../Static/Asstes/Tricone/Two in One.png'

import tub_cc from '../Static/Asstes/Tub/Choco Chips.png'
import tub_cb from '../Static/Asstes/Tub/Chocolate Brownie.png'
import tub_fnnt from '../Static/Asstes/Tub/Fruit N Nut Fantasy.png'
import tub_ka from '../Static/Asstes/Tub/King Alphonso.png'
import tub_mdf from '../Static/Asstes/Tub/Moroccan Dry Fruit.png'
import tub_raj from '../Static/Asstes/Tub/Rajbhog.png'
import tub_ra from '../Static/Asstes/Tub/Roasted Almond.png'

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
    case 10:
      source = cup_straw
      break
    case 11:
      source = combo_adf
      break
    case 12:
      source = combo_bc
      break
    case 13:
      source = combo_bs
      break
    case 14:
      source = combo_ca
      break
    case 15:
      source = combo_cc
      break
    case 16:
      source = combo_kpr
      break
    case 17:
      source = combo_mango
      break
    case 18:
      source = combo_raj
      break
    case 19:
      source = combo_sscb
      break
    case 20:
      source = combo_straw
      break
    case 21:
      source = combo_tf
      break
    case 22:
      source = combo_van
      break
    case 23:
      source = jumbo_bb
      break
    case 24:
      source = jumbo_cb
      break
    case 25:
      source = jumbo_fnnf
      break
    case 26:
      source = jumbo_gp
      break
    case 27:
      source = jumbo_h
      break
    case 28:
      source = jumbo_ka
      break
    case 29:
      source = jumbo_pn
      break
    case 30:
      source = jumbo_raj
      break
    case 31:
      source = jumbo_sh
      break
    case 32:
      source = cone_b
      break
    case 33:
      source = cone_bc
      break
    case 34:
      source = cone_cc
      break
    case 35:
      source = cone_ccd
      break
    case 36:
      source = cone_cv
      break
    case 37:
      source = cone_pd
      break
    case 38:
      source = cone_tio
      break
    case 39:
      source = tub_cb
      break
    case 40:
      source = tub_cc
      break
    case 41:
      source = tub_fnnt
      break
    case 42:
      source = tub_ka
      break
    case 43:
      source = tub_mdf
      break
    case 44:
      source = tub_ra
      break
    case 45:
      source = tub_raj
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
