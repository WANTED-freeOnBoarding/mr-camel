import React, { Component } from "react";
import Header from "./Header";
import styled from "styled-components";
import { product } from "prelude-ls";

class Product extends Component {
  productInfo() {
    return (
      <div>
        <p>
          <span>title</span>
          {this.props.product.title}
        </p>
        <p>
          <span>brand</span>
          {this.props.product.brand}
        </p>
        <p>
          <span>price</span>
          {this.props.product.price}원
        </p>
      </div>
    );
  }
  render() {
    return (
      <Body>
        <Items>
          <ImageBox />
          {this.productInfo()}
        </Items>
        <Buttons>
          <button>new item</button>
          <button>no thanks</button>
        </Buttons>
      </Body>
    );
  }
}

const Body = styled.div``;
const Items = styled.div``;
const Buttons = styled.div``;
const ImageBox = styled.div``;

export default Product;
