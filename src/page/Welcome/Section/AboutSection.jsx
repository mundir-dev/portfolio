import styled from "styled-components"
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper"
import Section from "../../../components/Section/Section"
import Me from '../../../img/mundir.png'

const SectionHeading = styled.h4`
    color: #000000;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
    margin: 0;
    padding-bottom: 20px;
`

const SectionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`

const AboutCover = styled.div`
    max-width: 660px;
    padding-right: 50px;
    
    @media only screen and (max-width: 767px) {
        order: 2;
        padding-top: 25px;
    }
`

const AboutParagraph = styled.div`
    color: #000000;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
    &:first-child{
        margin-bottom: 25px;
    }
`

const SendMail = styled.a`
    color: #0BDDAB;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

const ProfileImageWrapper = styled.div`
    max-width: 385px;
`

const ProfileImageCover = styled.div`
    margin-top: 25px;
    margin-left: 25px;
    position: relative;
    transition: all .7s ease-out;
    max-width: 300px;
    &:hover{
        margin-top: 0;
        margin-left: 0;
        margin-bottom: 25px;
        margin-right: 25px;
        &::before{
            right: -25px;
            bottom: -25px;
        }
    }

    &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #2C323D;
        right: 25px;
        bottom: 25px;
        border-radius: 15px;
        transition: all .7s ease-out;
    }
`

const ProfileImage = styled.img`
    position: relative;
    width: 300px;
    
    @media only screen and (max-width: 767px) {
        max-width: 100%;
    }
`

const AboutSection = () => {
    return (
        <Section id='aboutMe'>
                <ContentWrapper>
                    <SectionHeading>About Me</SectionHeading>
                    <SectionRow>
                        <AboutCover>
                            <AboutParagraph>Hi, my name is Muhammed Mundir. I'm a full stack web developer.
                            In 2017 I started my developer journey. During this period I completed
                            various projects.</AboutParagraph>
                            <AboutParagraph>I am always happy to work for you. If you need my service regarding your 
                            web ideas please <SendMail href="mailto:codewithmundir@gmail.com">contact me.</SendMail></AboutParagraph>
                        </AboutCover>
                        <ProfileImageWrapper>
                            <ProfileImageCover>
                                <ProfileImage src={Me} alt="mundir"/>
                            </ProfileImageCover>
                        </ProfileImageWrapper>
                    </SectionRow>
                </ContentWrapper>
        </Section>
    )
}

export default AboutSection
