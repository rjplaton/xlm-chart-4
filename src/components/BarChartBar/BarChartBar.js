import React, { Component } from 'react';
import './BarChartBar.css';

class BarChartBar extends Component {
 render() {
    return (
            <div className="BarChart-row" id={this.props.rowId}>
                <div className="BarChart-rowdesc">{this.props.name}</div>  
                <div className="BarChart-bar BarChart-number" id={this.props.barId} 
                style={this.props.barStyle}
                ><p><span>{this.props.price || "?"}</span></p></div>
            </div>
    );
  }
}
export default BarChartBar;





