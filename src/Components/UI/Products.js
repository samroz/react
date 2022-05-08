import React, {useState, useEffect} from 'react';
import apiController from '../../Controller/api'
import '../../App.css'
import Rating from "@material-ui/lab/Rating";
import { ShoppingCart } from "@material-ui/icons";
import ShoppingCartCollection from './ShoppingCart/ShoppingCartCollection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products() {

     const [products, setProducts] = useState([]);
     const [itemClickedId, setItemClickedId] = useState();

    // Fetch all the products from fakeApi to display them on home page
     const fetchProducts = async() => {
        const items = await apiController.getItems;
        await items().then(res=>res.json()).then(res => setProducts(res));   
    }

    useEffect(() => {
        fetchProducts();
    });

    const onCartClicked = ({id}) => {
        setItemClickedId(id)
    }

    return ( 
     <div className='product-conatiner'>
     {products.map(item => {
        return (
            <div className='product'> 
            {/* displaying product picture, title, rating, price and cart button */}
            <div className='product-picture'>
                <img
                    src={item.image}
                    width={150}
                    height={150}
                ></img>
            </div>
            <div className='product-description'>
                <div className='product-title'>{item.title}</div>
                <div>
                    {/* using this library to show rating in star visualization */}
                    <Rating value={item.rating.rate} />
                </div>
                <div className='product-price'>${item.price}</div>
                <button className='product-cart' onClick={() => onCartClicked({id: item.id})} >
                {/* use this library to use images from material ui */}
                <ShoppingCart />&nbsp;&nbsp;Add to cart
            </button>
            </div>
       </div>
        )
     })}
     {/* using toast library to show information to user about the copmonents inetraction */}
        <ToastContainer />
        <ShoppingCartCollection itemClickedId={itemClickedId} />
     </div>
  );
    
}