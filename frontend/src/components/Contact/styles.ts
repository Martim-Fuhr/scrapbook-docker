import styled from 'styled-components'

const SOCIAL_MEDIA_COLORS = {
  LINKEDIN: '#0E76A8',
  SITE_SYSTEM: '#c5c5c5',
  WPP: '#0ac308',
}

export const SocialMedias = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
  padding: 15px 0;
  width: 100%;

  a {
    svg {
      color: #fcfffc;
      transition: transform 0.2s;
    }

    &:hover {
      svg {
        transform: scale(1.25);
      }

      &.linkedin {
        svg {
          path:last-child {
            animation: 0.5s linear;
            fill: ${SOCIAL_MEDIA_COLORS.LINKEDIN};
          }
        }
      }

      &.wpp {
        background-color: #fcfffc;
        border-radius: 50%;
        svg {
          path:last-child {
            fill: ${SOCIAL_MEDIA_COLORS.WPP};
          }
        }
      }

      &.site-system {
        svg {
          path:last-child {
            fill: ${SOCIAL_MEDIA_COLORS.SITE_SYSTEM};
          }
        }
      }
    }
  }
`
