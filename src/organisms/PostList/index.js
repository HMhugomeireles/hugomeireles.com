import React from 'react'
import PostItem from './../../molecules/PostItem/'

import { PostListSection } from './Styled'

export default function PostList() {
  

  return (
    <PostListSection>

      <PostItem 
        title={'Gatsby hello-world starter 1'}
        date={'August 24, 2019'}
        author={'Hugo Meireles'}
        readTime={'5min reading'}
        category={'Javascript'}
      />
      <PostItem 
        title={'Gatsby hello-world starter 2'}
        date={'August 22, 2019'}
        author={'Hugo Meireles'}
        readTime={'5min reading'}
        category={'Javascript'}
      />
      <PostItem 
        title={'Gatsby hello-world starter 3'}
        date={'August 20, 2019'}
        author={'Hugo Meireles'}
        readTime={'5min reading'}
        category={'Javascript'}
      />
    </PostListSection>
  )
}
