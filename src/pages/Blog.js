import React from "react"
import { WrapperSection } from './Styled'
import PageMap from './../molecules/PageMap/'
import Layout from '../templates/layouts'
import PostList from './../organisms/PostList/'
import HighlightPost from './../organisms/highlightPost/'

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
      <HighlightPost />
      <PostList />
    </WrapperSection>
  </Layout>
)