import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper"
import Section from "../../../components/Section/Section"
import DarkButton from '../../../components/Button/Button'
import styled from "styled-components"

const IntroductionText = styled.h1`
    font-weight: 700;
    font-size: 65px;
    color: #CCD6F6;
    line-height: 55px;
    margin: 0;
    padding-bottom: 25px;

    @media only screen and (max-width: 840px) {
        font-size: 50px;
    };

    @media only screen and (max-width: 767px) {
        font-size: 40px;
    };

    @media only screen and (max-width: 550px) {
        font-size: 30px;
        line-height: 45px;
    }
`

const Intro = styled.span`
    font-size: 20px;
    font-weight: 400;
    color: #64FFDA;

    @media only screen and (max-width: 840px) {
        font-size: 17px;
    }

    @media only screen and (max-width: 550px) {
        font-size: 14px;
    }
`

const Role = styled.span`
    font-size: 25px;
    color: #8892B0;

    @media only screen and (max-width: 840px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 550px) {
        font-size: 18px;
    }
`

const WelcomeSection = () => {
    const handleDownload = () => {
        window.open('/assets/muhammed-mundir.pdf');
    }
    return (
        <Section id='welcome' bg="#2C323D" paddingTop="70px">
                <ContentWrapper>
                    <IntroductionText><Intro>Hi, my name is</Intro><br/>Muhammed Mundir.<br/><Role>I’m A Full Stack Web Developer</Role></IntroductionText>
                    <DarkButton text="Download my resume" action={handleDownload}/>
                </ContentWrapper>
        </Section>
    )
}

export default WelcomeSection
