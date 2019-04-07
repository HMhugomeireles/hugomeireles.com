import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => (
  <ListLinks>
    <li>
      <a
        href="https://github.com/HMhugomeireles"
        target="_blank"
      >
        <FaGithub />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/hm-hugomeireles/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/h3meireles"
        target="_blank"
      >
        <FaTwitter />
      </a>
    </li>
  </ListLinks>
)

export default SocialLinks;

const ListLinks = styled.ul`
  list-style: none;

  li {
    font-size: 1.3rem;
    padding: 3px;
  }

  a {
    color: ${({theme}) => theme.colors.colorPrimary};
    opacity: .5;

    &:hover {
      opacity: 1;
    }
  }

`;