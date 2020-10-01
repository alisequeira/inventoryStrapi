import React from 'react'
/*
function StockDetail (props) {
const {name, total , stockEvents} = props
    return (
        <div className="StockDetail">
             <h2>Products: {name} | Total: {total} </h2> 
                {stockEvents.map(event => (
                    <div className="stockEventTable__card" key={event.id}>
                        <p>Id: {event.id}</p>
                        <p>Type: {event.type}</p>
                        <p>Quantity: {event.qty}</p>
                        <p>Product Name: {event.product.name} </p>
                    </div>
                ))}
        </div>
    )
}*/

class StockDetail extends React.Component {
   state = {
       show: false
   }
    render(){
        const {name, total , stockEvents} = this.props;
        const {show} = this.state;
        return (
            <div className="StockDetail" onClick={() => this.setState({show: !show})}>
                <h2>Products: {name} | Total: {total} </h2> 
                {show && 
                    <>
                        {stockEvents.map(event => (
                            <div className="stockEventTable__card" key={event.id}>
                                <p>Id: {event.id}</p>
                                <p>Type: {event.type}</p>
                                <p>Quantity: {event.qty}</p>
                                <p>Product Name: {event.product.name} </p>
                            </div>
                        ))}
                    </>
                }
            </div>
        )
    }
}

export default StockDetail;