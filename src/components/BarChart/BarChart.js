import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {
 render() {
    return (
			<div className="BarChart">
			<h2>{this.props.title}</h2>
			{this.props.children}
			</div>

    );
  }
}
export default BarChart;





