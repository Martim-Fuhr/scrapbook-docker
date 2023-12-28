import styled from 'styled-components'
import theme from '@/app/theme'

const SOCIAL_MEDIA_COLORS = {
  FACILITA_SYSTEM:
    'https://facilitasystem.com.br/wp-content/uploads/elementor/thumbs/logo-png-branco-q3jyrzahkspxzjdzwkqdhpw70sm3dltp7kun7p8yo0.png',
}

export const HeaderSection = styled.header`
  align-items: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 20px 3px ${theme.colors.black};
  display: flex;
  flex-direction: row;
  height: 80px;
  max-width: 1920px;
  width: 100%;
  position: fixed;
  z-index: 2;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
  }
`
