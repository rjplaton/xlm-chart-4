import React, { Component } from 'react';
import './ChartBar.css';

class ChartBar extends Component {
 render() {
    return (
            <div className="BarChart-row" id={ 
                  this.props.currency.visible === true ? 
                    this.props.currency.abrev + "Row" 
                  : this.props.currency.abrev + "Row-hidden"}>
                <div className="BarChart-rowdesc">1 {this.props.currency.name} ({this.props.currency.abrev.toUpperCase()})</div>  
                <div className="BarChart-bar BarChart-number" id={this.props.currency.abrev + "Bar"} 
                style={{width: `calc(${this.props.currency.price} / ${this.props.maxprice} * 100%)`}}
                ><p><span>{this.props.currency.price || "?"}</span></p></div>
            </div>
    );
  }
}
export default ChartBar;





