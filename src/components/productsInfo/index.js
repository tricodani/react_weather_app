import React, { Component } from 'react';
import './index.css';
import TableItem from '../tableItem';

class ProductsInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-12">
        <h1>Product Section</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Add Item Button</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products[0] &&
                this.props.products.map(item =>
                  <TableItem key={item.id} item={item} task={this.props.addItem} term={"Add to"} btn_class={"btn btn-success"}/>
                )
            }
          </tbody>
        </table>
        </div> {/* ends col 12 */}
      </div> // ends row
    );
  }
}

export default ProductsInfo;
