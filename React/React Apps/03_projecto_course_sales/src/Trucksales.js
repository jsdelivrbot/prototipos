import React from 'react';

class Trucksales extends React.Component {   
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
        this.sum_price = this.sum_price.bind(this);
    }
    sum_price(price) {
        this.setState({ total: this.state.total + price })
    }
    render() {
        console.log(this.props.items)
        var trucks = this.props.items.map((item, index) => {
            return <Truck name = { item.name } price = { item.price } key = { index } sum_price = { this.sum_price } active = { item.active }/>
        })
        return (
            <div>
                <h1>You can buy trucks here</h1>
                <div id='trucks'>
                        { trucks }
                        <p id='total'>Total <b>{ this.state.total }</b></p>
                </div>
            </div>
        );
    }
}

class Truck extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            active: false
        }
        this.clicker = this.clicker.bind(this)
    }

    clicker () {
        var active = !this.state.active;
        this.setState({ active: active })
        this.props.sum_price(active ? this.props.price : -this.props.price) // ? if true before colon else after colon
    }
    render () {
        return (
            <div>
                <p className = { this.state.active ? 'active': '' } onClick = { this.clicker }>{ this.props.name } <b>{ this.props.price }</b></p>    
            </div> 
        );
    }
}

export default Trucksales;