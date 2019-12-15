import React from 'react'

const CurrencyDisplay = (props) => {
    return (
    <p>US Dollar{' '}${props.amount.toFixed(2)}{' - '}{props.currencyData.name}{' '}{props.currencyData.symbol}{(props.currencyData.rate * props.amount).toFixed(2)}</p>
    )
}

export default CurrencyDisplay