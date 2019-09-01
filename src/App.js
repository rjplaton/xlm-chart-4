import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChartBar from './components/ChartBar/ChartBar.js';

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

  }

  onCurrencyToggle = (id) => {
    if(this.state.currencies[id].visible === true) {
      // eslint-disable-next-line
        this.state.currencies[id].visible = false;
        this.setState({
            currencies: this.state.currencies,
        });
        } else {
      // eslint-disable-next-line
        this.state.currencies[id].visible = true;
        this.setState({
            currencies: this.state.currencies,
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
    //this.fetchData()
  }


  render() {
      console.log("state rendered with this data:", this.state.currencies);
      return (
        <div className="App">

          <nav className="nav">
            <img src={logo} className="App-logo" alt="logo" />
            <a href="https://rjplaton.github.io/stellar-pairings/">XLM Chart</a>
          </nav>

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
<div className="BarChart">
<h2>How many XLM per...</h2>

          {
            this.state.currencies.map( (currency, id) => (
              <ChartBar 
                  currency={currency}
                  visible={currency.visible} 
                  abrev={currency.abrev}
                  name={currency.name}
                  price={currency.price}
                  maxprice={this.state.currencies[0].price}
                   />
            ))}

</div>
  </div>
  


  <div className="footer">
    <a href="https://github.com/rjplaton/stellar-pairings">Github Repo</a>
    <p>
    <a href="http://rjplaton.com">Reuben Platon</a>
  </p>
    </div>
</div>


        </div>
      );
    }
  }

export default App;
