// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    userdetails: this.props,
  }

  Search = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, userdetails} = this.state
    const searchResults = userdetails.destinationsList.filter(eachuser =>
      eachuser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="topcard">
        <div>
          <h1> Destination Search </h1>
          <input
            type="search"
            placeholder="Search"
            onChange={this.Search}
            value={searchInput}
          />
          <button type="button">
            <img
              className="icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </button>
        </div>

        <div className="bottomcont">
          <ul className="bottmClass">
            {searchResults.map(arrr => (
              <DestinationItem userdetail2={arrr} key={arrr.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
