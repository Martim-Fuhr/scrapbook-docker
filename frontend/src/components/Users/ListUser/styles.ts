import styled from 'styled-components'
import theme from '@/app/theme'

export const Wrapper = styled.nav`
  max-width: 1120px;
  margin: 20px auto;
  width: 100%;

  ul {
    flex-direction: column;
    display: flex;
    gap: 15px;
  }

  li {
    display: flex;
    min-height: 60px;
    padding: 6px;
    box-shadow: 0px 0px 5px ${theme.colors.border};
    border-radius: 5px;
    background-color: ${theme.colors.border};

    p {
      text-align: end;
      font-size: 14px;
    }

    .write-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }

    .name {
      text-transform: capitalize;
      padding: 0 4px;
      font-weight: 500;
    }
  }
`
