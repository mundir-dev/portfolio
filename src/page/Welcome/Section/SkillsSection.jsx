import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper"
import Section from "../../../components/Section/Section"
import Skill from '../../../components/Skill/Skill'
import { useState } from 'react'
import styled from "styled-components"

const SectionHeading = styled.h4`
    color: #CCD6F6;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
    margin: 0;
    padding-bottom: 20px;
`

const SectionRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-right: -20px;
`

const SkillsSection = () => {
    const [skills] = useState(["JavaScript", "PHP", "BootStrap", "React Js", "Codeigniter", "Sass", "Ajax", "Mysql"]);
    return (
        <Section id='mySkills' bg="#2C323D" paddingBottom="60px">
                <ContentWrapper>
                    <SectionHeading>Skills</SectionHeading>
                    <SectionRow>
                        {skills.map((item, index) => (
                             <Skill key={index} text={item} />
                         ))}
                    </SectionRow>
                </ContentWrapper>
        </Section>
    )
}

export default SkillsSection
