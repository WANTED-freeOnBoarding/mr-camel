import React, { Component } from "react";
import Header from "./Header";
import Product from "./Product";
import products from "./products.json";

class Hello extends Component {
  render() {
    console.log(products[0].title);
    return (
      <>
        <Header />
        <Product product={products[0]} />
      </>
    );
  }
}

export default Hello;
