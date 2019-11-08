import React from 'react'
import ProjectItem from './../../molecules/ProjectItem/'

import { ProjectListSection } from './Styled'

export default function ProjectList() {
  

  return (
    <ProjectListSection>
      <ProjectItem 
        title={'Gatsby hello-world starter 1'}
        date={'August 24, 2019'}
        techs={['Javascript', 'Node', 'React']}
      />
      <ProjectItem 
        title={'Gatsby hello-world starter 2'}
        date={'August 22, 2019'}
        techs={['Javascript', 'Node', 'React']}
      />
      <ProjectItem 
        title={'Gatsby hello-world starter 3'}
        date={'August 20, 2019'}
        techs={['Javascript', 'Node', 'React']}
      />
    </ProjectListSection>
  )
}
