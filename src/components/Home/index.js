// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {cricketTeams: [], isLoading: true}

  componentDidMount() {
    this.getCricketTeams()
  }

  getCricketTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({cricketTeams: updatedData, isLoading: false})
  }

  renderHomeCard = () => {
    const {cricketTeams} = this.state

    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="cricket-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="team-item-container">
          {cricketTeams.map(eachTeam => (
            <TeamCard key={eachTeam.id} cricketTeam={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderHomeCard()
        )}
      </div>
    )
  }
}

export default Home
