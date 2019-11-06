import React from "react"
import Layout from '../templates/layouts'
import PageMap from './../molecules/PageMap/'
import HighLightProject from './../organisms/highlightProject/'
import { WrapperSection } from './Styled'

export default () => (
  <Layout>
    <WrapperSection>
      <PageMap 
        siteLinksMap={{ siteMap : [
          {
            to: '/',
            label: 'Home'
          },
          {
            to: '/projects',
            label: 'Projects'
          }
        ]}}
      />
      <HighLightProject 
        
      />
    </WrapperSection>
  </Layout>
)