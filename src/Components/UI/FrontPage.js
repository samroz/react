import React, {Component} from 'react';
import api from '../../Controller/api'
import Header from '../Header';
import Products from './Products';
import '../../App.css'

export default function FrontPage() {

    return (
    <div>  
     <Header />
     <Products />
    </div>
  );
 
}

