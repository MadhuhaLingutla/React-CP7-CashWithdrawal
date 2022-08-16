// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawamount = amount => {
    this.setState(currentstate => ({balance: currentstate.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card">
          <div className="name-container">
            <p className="profile-image">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-display-container">
            <p className="balance-statement">Your Balance</p>
            <div className="balance-container">
              <p className="balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-statement">Withdraw</p>
          <p className="instruction">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list-container">
            {denominationsList.map(each => (
              <DenominationItem
                item={each}
                withdrawamount={this.withdrawamount}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
