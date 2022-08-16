// Write your code here

import './index.css'

const DenominationItem = props => {
  const {item, withdrawamount} = props
  const {value} = item

  const sendwithdrawrequest = () => {
    withdrawamount(value)
  }
  return (
    <li className="item-container">
      <button className="button" type="button" onClick={sendwithdrawrequest}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
