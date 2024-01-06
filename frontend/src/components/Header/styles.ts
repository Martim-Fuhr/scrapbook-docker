import styled from 'styled-components'
import theme from '@/app/theme'

export const HeaderSection = styled.header`
  align-items: center;
  background-color: ${theme.colors.backgroundSecondary};
  box-shadow: 0 0 20px 3px ${theme.colors.goldColor};
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 80px;
  max-width: 1920px;
  width: 100%;
  position: fixed;
  z-index: 2;

  h1 {
    display: flex;
    align-items: center;
    font-weight: 500;
    line-height: 30px;
    color: ${theme.colors.goldColor};
    font-size: 58px;
    height: 100%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      font-size: 42px;
    }
  }

  span {
    color: ${theme.colors.goldColor};
    display: flex;
    justify-content: end;
    font-weight: 400;
  }
`
