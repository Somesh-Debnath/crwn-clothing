import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  useNavigate } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
//import {withRouter} from 'react-router-dom'
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems,dispatch}) => {
  
   
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/checkout'; 
      navigate(path)
      
        }
  
    return(
                <div className='cart-dropdown'>
                  <div className='cart-items'>
                   {cartItems.length ?(
                    cartItems.map(cartItem => (
                      <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    ) :(
                      <span className='empty-message'>Your Cart is empty</span>
                    )
                    }
                  </div >
                    {/* <Link className='btn' to='/checkout' onClick={toggleCartHidden}>
                      GO TO CHECKOUT
                    </Link>                   */}
                 
                    <CustomButton onClick={()=>{
                      routeChange()
                      dispatch(toggleCartHidden())
                    }}  >GO TO CHECKOUT</CustomButton>
                </div>
)
    }
  
const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems
  
});

export default connect(mapStateToProps)(CartDropdown);