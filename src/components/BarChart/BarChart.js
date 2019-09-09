import React, { Component } from 'react';
import './BarChart.css';
import BarChartBar from '../../components/BarChartBar/BarChartBar.js';

class BarChart extends Component {


 render() {
 	
    return (
			<div className="BarChart">
			<h2>{this.props.title}</h2>
			                  
		            {this.props.chartArray.map( (item, id) => (
						<BarChartBar
	                         rowId={ 
	                            item.visible === true ? 
	                              item.abrev + "Row" 
	                              : item.abrev + "Row-hidden"
	                            	} 
	                          barId={item.abrev + "Bar"}
	                          name={"1 " + item.name + " (" + item.abrev.toUpperCase() + ")"}
	                          price={item.price}
	                          barStyle={{width: `calc(${item.price} / ${this.props.maxprice} * 100%)`}}
	                          />
      
					))}
		    
			</div>

    );
  }
}
export default BarChart;





