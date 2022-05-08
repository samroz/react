import React, {Component, useState} from 'react';
import './UI/_styles.scss'
import { ShoppingCart } from "@material-ui/icons";
import ShoppingCartCollection from './UI/ShoppingCart/ShoppingCartCollection';
import { toast } from 'react-toastify';

export default function Header () {
  const [isOpen, setIsOpen] = useState(false);

  function modalOpen() {
    setIsOpen(true);
  }

  function modalClose() {
    setIsOpen(false);
  }

  const notify = () => {toast("Functionality not implemented for now")}

        return (
        <div className='header-buttons'>
            <button onClick={notify}>
            Home
            </button>
            <button onClick={notify}>
            Collection
            </button>
            <button onClick={notify}>
            Blog
            </button>
            <button onClick={notify}>
            About Us
            </button>
            <button onClick={notify}>
            Contact
            </button>

            <ShoppingCart className='shopping_cart' onClick={() => modalOpen()}>
            </ShoppingCart>

            <ShoppingCartCollection isOpen={isOpen} onRequestClose={modalClose} />

        </div>
      );
    }