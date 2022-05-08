import React, {Component, useEffect} from 'react';
import Modal from 'react-modal';
import { PropTypes } from 'prop-types';
import './_styles.scss'
import apiController from '../../../Controller/api'
import { Delete } from '@material-ui/icons';
import { toast } from 'react-toastify';

const arr = [];

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: "400px"
    },
  };

class ShoppingCartCollection extends Component{

  constructor() {
    super();
    this.state = {
      itemClickedId: null,
    };
  }

    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onRequestClose: PropTypes.func,
        itemClickedId: PropTypes.number.isRequired,
    }

    static defaultProps = {
        onRequestClose: () => {}
    }

    // Fetch single product by id to add that in cart 
   fetchItem = async ({id}) => {
      const item = await apiController.getItem({id}).then(res=>res.json())
      .then(json=>json);
      arr.push(item)
   }

    componentDidUpdate(prevProps) {
      if (prevProps.itemClickedId !== this.props.itemClickedId) {
        this.fetchItem({id: this.props.itemClickedId});
      } else {
        
      }
    }

    render(){
        return (
        <div>
            {this.props.isOpen?
            // Using Modal to show the cart collection
             <Modal
             isOpen={this.props.isOpen}
             style={customStyles}
             contentLabel="Example Modal"
           >
             <div className='cart-header'>
               <h3>Your Cart</h3>
               {/* showing toast for information */}
               <div className='trash-icon'><Delete onClick={() => toast("Functionality not implemenetd for now")}/></div>
             </div>
              <div className='cart-collection'>
                <p>Product detail</p>
                {arr.length>0 ?
                  arr.map(pro => {
                    return(
                      <div className='product-wrapper'>
                        <div className='flex-view'>
                          <div className='cart-image'>
                            <img
                            src={pro.image}
                            width={100}
                            height={100}
                            ></img>
                          </div>
                        </div>
                        <div className='description-wrapper'>
                          <div className='cart-category'>{pro.category}</div>
                          <div className='cart-price'>${pro.price}</div>
                        </div>
                      </div>
                  )}) : <div className='empty-cart'>Cart is Empty</div>
                }
              </div>
             <button className='close-btn' onClick={this.props.onRequestClose} >Close</button>

           </Modal> : null
        }
        </div>
      );
    }
}
    
export default ShoppingCartCollection;