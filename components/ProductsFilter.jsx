import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

export default class ProductsFilter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selectRef = React.createRef();
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Col md={6}>
          <select
            className="form-select"
            ref={this.selectRef}
            defaultValue="0"
            onChange={this.handleClick}
          >
            <option value="0">Sort By ...</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: high to Low</option>
            <option value="score_desc">Score: High to Low</option>
            <option value="score_asc">Score: Low to High</option>
          </select>
        </Col>
      </div>
    );
  }
  handleClick() {
    if (this.props.onSort) {
      this.props.onSort(this.selectRef.current.value);
    }
  }
}
