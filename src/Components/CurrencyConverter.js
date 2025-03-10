import React, { Component } from 'react'

class CurrencyConverter extends Component {
    constructor(){
        super()
        this.state = {
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount: 0

        }
    }
    handleAmountIncrease = () => {
        this.setState( (prevState) => {
            return {
                amount: prevState.amount + 1
            }
        }
        )
    }    
    handleAmountDecrease = () => {
        return(
            this.state.amount > 0 &&
        this.setState( (prevState) => {
            return {
                amount: prevState.amount - 1
            }
        }
        )
        )
    }
    handleOptionSelect = (e) => {
        const userValue = e.target.value 
        this.setState(() => {
            return {
                selectedCurrency: userValue,
                currencyChosen: userValue === 'Select Currency' ? false : true
            }
        })
    }
    render(){
        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]
        const mappedCurr = currencyData.map((el,i)=> 
            // console.log(i)
            <option key={el.id} value={i}>{el.name}</option>
        )
        return (
        <div>
             <select value={this.state.selectedCurrency} onChange={this.handleOptionSelect}>
                    <option value="'Select Currency" >Select Currency</option>
                    {mappedCurr}
                </select>
                <div>
                    <button className='add' onClick={this.handleAmountIncrease}>+</button>
                    <button className='minus' onClick={this.handleAmountDecrease}>-</button>
                </div>
                {this.state.currencyChosen ? this.props.render(
					currencyData[this.state.selectedCurrency],
					this.state.amount
				) : <p>Please Select Currency</p> }
                
        </div>
        )
    }
}

export default CurrencyConverter