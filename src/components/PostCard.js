import React from "react"
import { Link } from "gatsby"
import { Icon } from "."
import {
  PostCardContainer,
  ArticleCardHeader,
  PostCardBody,
  PostCardFooter,
} from "../elements"

export function PostCard({ title, slug, date, excerpt, category, thumbnail }) {
  return (
    <PostCardContainer role="Post card of article" thumbnail={thumbnail}>
      <Link to={slug}>
        <ArticleCardHeader>
          <Icon category={category} size={["45px", "45px"]} />
          <h2>{title}</h2>
        </ArticleCardHeader>
        <PostCardBody>
          <p>{date}</p>
        </PostCardBody>
        <PostCardFooter>
          <p>{excerpt}</p>
        </PostCardFooter>
      </Link>
    </PostCardContainer>
  )
}
