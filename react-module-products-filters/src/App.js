import React, { Component } from "react";
import PropTypes from "prop-types";

import { DEFAULT_IMAGE_SRC, VIEW_BY, PAGE_INDEX } from "./Constants";

import "./react-products-filters.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    const { products } = props;
    this.state = {
      productsDB: products,
      productsResult: products,
      viewBy: VIEW_BY,
      pageIndex: 1,
      productsCurrentPage: products.length
        ? products.slice(PAGE_INDEX - 1, VIEW_BY)
        : [],
    };
  }

  // getDerivedStateFromProps

  getProductsCurrentPage = (pageIndex = 1) => {
    const minPage = PAGE_INDEX,
      maxPage = Math.ceil(this.state.productsResult.length / this.state.viewBy);
    let index = parseInt(pageIndex, 10);
    if (typeof index === "number") {
      index = Math.ceil(index);
      if (index < minPage) index = minPage;
      if (index > maxPage) index = maxPage;
      if (index >= minPage && index <= maxPage) {
        console.log(minPage, maxPage, index, pageIndex);
        setTimeout(() => {
          this.setState({
            pageIndex: index,
            productsCurrentPage: this.state.productsResult.slice(
              (index - 1) * this.state.viewBy,
              index * this.state.viewBy
            ),
          });
        }, 100);
      }
    }
  };

  getImageProduct = (p) => {
    if (p.featured_image) return p.featured_image;
    if (p.image) return p.image.src || DEFAULT_IMAGE_SRC;
    if (p.images.length) return p.images[0].src || DEFAULT_IMAGE_SRC;
  };

  render() {
    if (!this.state.productsDB.length)
      return <div className="waiting-text">Waiting for products ..</div>;

    return (
      <div className="react-products-filters container">
        <div className="frame-wrapper flex">
          <div className="filters-left">filters left</div>
          <div className="flex flex-column">
            <div className="filters-top">
              <span>View {this.props.viewBy}</span>
            </div>
            <div className="products-result">
              <div className="products-wrapper flex flex-wrap justify-center">
                {this.state.productsCurrentPage.map((product) => {
                  return (
                    <div key={product.id} className="product-item">
                      <div className="image-wrapper">
                        <img
                          alt={product.title}
                          src={this.getImageProduct(product)}
                        />
                      </div>
                      <span>{product.title}</span>
                    </div>
                  );
                })}
              </div>
              {this.state.productsCurrentPage.length && (
                <div className="react-pagination w-100 flex justify-center">
                  <div className="react-pagination-wrapper flex">
                    <div className="react-pagination-item react-pagination-previous">
                      Previous
                    </div>
                    <input
                      className="pagination-index"
                      type="number"
                      value={this.state.pageIndex}
                      onChange={(e) =>
                        this.getProductsCurrentPage(e.target.value)
                      }
                    />
                    <div className="react-pagination-item react-pagination-next">
                      Next
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  products: PropTypes.array,
};

App.defaultProps = {
  products: [],
};
