import React, { useContext } from 'react'
import Title from './../../atoms/Title/'
import SubTitle from './../../atoms/SubTitle/'
import TechnologyItem from './../../atoms/TechnologyItem/'
import SocialLink from './../SocialIcon/'
import ThemeContext from './../../context/ThemeContext'
import { ProjectContainer, ColorBar } from './Styled'

export default function ProjectItem(props) {
  const { theme, Themes } = useContext(ThemeContext);

  function TechColor(tech) {
    switch(tech){
      case 'Javascript':
        return '#FFE600'
      case 'Node':
        return '#00FF19'
      case 'React':
        return '#0066FF'
      case 'Express':
        return '#FF4D00'
      default:
        return ''
    }
  }

  return (
    <ProjectContainer>
      <ColorBar />
      <Title 
        font={'Arial'}
        size={'1.6rem'}
        text={props.title}
        darkMode={theme.darkMode} 
        theme={Themes}
      />
      <SocialLink 
        url={'https://github.com/HMhugomeireles/hugomeireles.com'} 
        iconName={'GitHub'}
        styleType={{width: '24px', height: '24px'}}
      />
      <SubTitle 
        font={'Arial'}
        size={'0.8rem'}
        text={props.date}
        darkMode={theme.darkMode} 
        theme={Themes}
      />
      <span>
        {
          props.techs.map((tech, index) => 
            <TechnologyItem
              key={tech + '_' + index}
              font={'Arial'}
              size={'1.1rem'}
              text={tech}
              color={TechColor(tech)}
            />)
        }
      </span>
    </ProjectContainer>
  )
}
