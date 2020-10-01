import React from 'react';
import './App.css';
import StockEventsTable from './components/StockEventsTable';
import axios from 'axios';

const fetchedProducts = [
  {id:1, name: 'Super Mario'},
  {id:2, name: 'Super Smash Bros'},
  {id:3, name: 'Super Mario Striker'}
]

const fetchedStockEvents = [
  {id: 1 , type: 'add' , qty: 100 , product: fetchedProducts[0]} ,
  {id: 2 , type: 'remove' , qty: -20 , product: fetchedProducts[0]},
  {id: 3 , type: 'remove' , qty: -10 , product: fetchedProducts[0]},
  {id: 4 , type: 'add' , qty: 120 , product: fetchedProducts[1]},
  {id: 5 , type: 'remove' , qty: 45 , product: fetchedProducts[1]}
]

class App extends React.Component {

  state = {
    fetchedProducts,
    fetchedStockEvents,
  }

  componentDidMount = async () => {
    const productsRest = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    });

    const stockEventsRest = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    });

    const fetchedProducts = productsRest.data;
    const fetchedStockEvents = stockEventsRest.data;

    this.setState({fetchedProducts, fetchedStockEvents});

  }

  render(){
    const {fetchedStockEvents,fetchedProducts} = this.state;
    return(
      <div className="App">
          <h1>The stock app</h1>


          <StockEventsTable
            products={fetchedProducts}
            stockEvents= {fetchedStockEvents}
          />
      </div>
    )
  }
}

export default App;
