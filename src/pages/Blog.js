import React from "react"
import { WrapperSection } from './Styled'
import PageMap from './../molecules/PageMap/'
import Layout from '../templates/layouts'

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
            to: '/blog',
            label: 'Blog'
          }
        ]}}
      />
    </WrapperSection>
  </Layout>
)