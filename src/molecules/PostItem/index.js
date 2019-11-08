import React, { useContext } from 'react'
import Title from './../../atoms/Title/'
import SubTitle from './../../atoms/SubTitle/'
import TechnologyItem from './../../atoms/TechnologyItem/'
import HiFive from './../../atoms/HiFive/'
import PostDescription from './../../atoms/PostDescription/'
import ThemeContext from './../../context/ThemeContext'
import { PostContainer, ColorBar, PostFooter } from './Styled'
import { TechColor } from './../../utils/CommonFunc'

export default function PostItem(props) {
  const { theme, Themes } = useContext(ThemeContext);

  return (
    <PostContainer>
      <Title 
        font={'Arial'}
        size={'1.6rem'}
        text={props.title}
        darkMode={theme.darkMode} 
        theme={Themes}
      />
      <SubTitle 
        font={'Arial'}
        size={'0.7rem'}
        text={props.date + ' - ' + props.author + ' - ' + props.readTime}
        darkMode={theme.darkMode} 
        theme={Themes}
      />
      <ColorBar />
      <PostDescription 
        font={'Arial'}
        size={'1rem'}
        description={'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.'}
        darkMode={theme.darkMode} 
        theme={Themes}
      />
      <PostFooter>
        <TechnologyItem
          font={'Arial'}
          size={'1.1rem'}
          text={props.category}
          color={TechColor(props.category)}
        />
        <HiFive 
          hiFiveNumber={'123'}
        />
      </PostFooter>
      <hr/>
    </PostContainer>
  )
}
