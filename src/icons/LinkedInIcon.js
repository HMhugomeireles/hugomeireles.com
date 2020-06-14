import React from "react"
import metaData from "../../configs/metadata"
import { LinkIcon, IconWrapper } from "./sharedStyle"

export function LinkedInIcon() {
  return (
    <LinkIcon
      href={metaData.socialLinks.linkedIn}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWrapper
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.87">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7933 10.8082C12.7933 11.9524 11.9612 12.8679 10.6253 12.8679H10.6008C9.31448 12.8679 8.48291 11.9524 8.48291 10.8082C8.48291 9.63988 9.33981 8.75 10.6505 8.75C11.9612 8.75 12.7684 9.63988 12.7933 10.8082ZM12.5409 14.4943V26.4101H8.70948V14.4943H12.5409ZM26.3584 26.4101L26.3586 19.5779C26.3586 15.9179 24.4684 14.2145 21.9471 14.2145C19.9129 14.2145 19.0021 15.371 18.4936 16.1824V14.4946H14.6617C14.7122 15.6127 14.6617 26.4104 14.6617 26.4104H18.4936V19.7556C18.4936 19.3995 18.5185 19.0442 18.6198 18.7893C18.8967 18.0778 19.5272 17.3412 20.5857 17.3412C21.9727 17.3412 22.5271 18.4339 22.5271 20.0351V26.4101H26.3584Z"
            fill="white"
          />
        </g>
      </IconWrapper>
    </LinkIcon>
  )
}
