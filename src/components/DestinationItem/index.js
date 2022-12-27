// Write your code here

import './index.css'

const DestinationItems = props => {
  const {userdetail2} = props
  const {name, imgUrl} = userdetail2

  return (
    <div className="user-card-container">
      <div>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  )
}

export default DestinationItems
