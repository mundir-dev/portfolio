import styled from 'styled-components'
import Badge from '../../img/badge.png'
const SkillItem = styled.div`
    display: flex;
    align-items: center;
    background-color: #2C323D;
    border: 2px solid #64FFDA;
    border-radius: 15px;
    padding: 20px;
    width: 100%;
    max-width: 255px;
    margin: 20px;
`

const BadgeCover = styled.div``

const BadgeImage     = styled.img`
    max-width: 30px;
    margin-right: 10px;
`

const SkillName = styled.div`
    color: #64FFDA;
    font-size: 20px;
    font-weight: 400;
` 
const Skill = ({text}) => {
    return (
        <SkillItem>
            <BadgeCover>
                <BadgeImage src={Badge} alt="badge icon" />
            </BadgeCover>
            <SkillName>{text}</SkillName>
        </SkillItem>
    )
}

export default Skill
