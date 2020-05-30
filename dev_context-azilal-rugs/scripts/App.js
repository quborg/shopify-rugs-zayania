import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { DEFAULT_IMAGE_SRC } from "./Constants";

export default class App extends Component {
  constructor(props) {
    super(props);
    const { products } = props;
    this.state = {
      products: products,
      data: products.length ? products.slice(0, 12) : [],
    };
  }

  loadPage = () =>
    setTimeout(() => {
      this.setState({
        data: this.state.products.slice(0, this.state.data.length + 12),
      });
    }, 300);

  getImageProduct = (p) => {
    if (p.featured_image) return p.featured_image;
    if (p.image) return p.image.src || DEFAULT_IMAGE_SRC;
    if (p.images.length) return p.images[0].src || DEFAULT_IMAGE_SRC;
  };

  render() {
    return (
      <div className="react-products-filters">
        <InfiniteScroll
          dataLength={this.state.data.length} //This is important field to render the next data
          next={this.loadPage}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // // below props only if you need pull down functionality
          // refreshFunction={this.refresh}
          // pullDownToRefresh
          // pullDownToRefreshContent={
          //   <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
          // }
          // releaseToRefreshContent={
          //   <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
          // }
        >
          {this.state.data.map((product) => {
            console.log(product);
            return (
              <div key={product.id} className="products-item">
                <img
                  width="200"
                  height="200"
                  src={this.getImageProduct(product)}
                />
                <span>{product.title}</span>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    );
  }
}
