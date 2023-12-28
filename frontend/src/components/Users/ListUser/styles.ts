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

    .icon-name {
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 10px 0 4px;

      .icon-user {
        width: 50px;
        height: auto;
      }
    }

    .write-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .name {
      text-transform: capitalize;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 200px;
      font-weight: 500;
    }
  }
`
