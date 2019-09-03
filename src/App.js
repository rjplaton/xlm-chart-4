import React, { Component } from 'react';

import './App.css';

import Nav from './components/Nav/Nav.js';
import BarChart from './components/BarChart/BarChart.js';
import BarChartBar from './components/BarChartBar/BarChartBar.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {

  state = { 
    currencies: [
          {
          name:'Bitcoin',
          abrev: 'btc',
          price: 0,
          visible: false,
          },
            {
          name: 'Ethereum',
          abrev: 'eth',
          price: 0,
          visible: false,
          },
          {
          name: 'Litecoin',
          abrev: 'ltc',
          price: 0,
          visible: false,
          },
          {
          name: 'US Dollar',
          abrev: 'usd',
          price: 0,
          visible: false,
          }
        ],
    maxprice: [0],

  }

  onCurrencyToggle = (id) => {
    if(this.state.currencies[id].visible === true) {
      // eslint-disable-next-line
        this.state.currencies[id].visible = false;
        this.state.maxprice.splice(id, 1);
        this.setState({
            currencies: this.state.currencies,
            maxprice: this.state.maxprice.sort(function(a, b){return b-a}),
        });
        } else {
      // eslint-disable-next-line
        this.state.currencies[id].visible = true;
        this.state.maxprice.push(this.state.currencies[id].price);
        this.setState({
            currencies: this.state.currencies,
            maxprice: this.state.maxprice.sort(function(a, b){return b-a}),
        });
      }

  }

  fetchData = () => {
    // eslint-disable-next-line
    for (let currency of this.state.currencies) {
    fetch("https://min-api.cryptocompare.com/data/price?fsym="+currency.abrev.toUpperCase()+"&tsyms=XLM")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        currency.price = data.XLM;
      });
    };
  }


  componentDidMount() {
    this.fetchData()
  }


  render() {
      console.log("state rendered with this data:", this.state.currencies);
      return (
        <div className="App">

          <Nav />

<div className="wrapper">

  <div className="header"><h1>Stellar Lumens (XLM) Conversion</h1></div>

  <div className="sidebar box">
    <h3>
      <p>XLM Pairings</p>
    </h3>
    <p></p>
    <div className="currencylist">
    {
    this.state.currencies.map( (currency, id) => (
        <p><span className="checkbox">
          <input type="checkbox" id={currency.abrev} onClick={() => this.onCurrencyToggle(id)}/>{currency.abrev.toUpperCase()}
        </span></p>
      ))
    }
    </div>
  </div>


<div className="content">

        <BarChart title="How many XLM per...">
                  {
                    this.state.currencies.map( (currency, id) => (
                      <BarChartBar 
                          currency={currency}
                          rowId={ 
                            currency.visible === true ? 
                              currency.abrev + "Row" 
                              : currency.abrev + "Row-hidden"
                            } 
                          barId={currency.abrev + "Bar"}
                          name={"1 " + currency.name + " (" + currency.abrev.toUpperCase() + ")"}
                          price={currency.price}
                          barStyle={{width: `calc(${currency.price} / ${this.state.maxprice[0]} * 100%)`}}
                           />
                    ))}
        </BarChart>

       { //example usage of components
        // <BarChart title="Another Bar CHART!">
        //     <ChartBar
        //         name='bar 1'
        //         price='1000'
        //         barStyle={{width: `30%`}}
        //         />
        //     <ChartBar
        //         name='bar 2'
        //         price='2000'
        //         barStyle={{width: `50%`}}
        //         />
        // </BarChart>
        }
  </div>
  

  <Footer />


</div>


        </div>
      );
    }
  }

export default App;
