import Badge from '../../img/badge.png'
import './Skill.css'
const Skill = ({text}) => {
    return (
        <div className="skill">
            <div className="skill-badge">
                <img src={Badge} alt="badge icon" />
            </div>
            <div className="skill-name">{text}</div>
        </div>
    )
}

export default Skill
