// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cricketTeam} = props
  const {name, id, teamImageUrl} = cricketTeam

  return (
    <Link className="link-container" to={`/ipl/${id}`}>
      <li className="lists">
        <div className="list-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="team-heading">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
