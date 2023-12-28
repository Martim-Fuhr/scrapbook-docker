import styled from 'styled-components'
import theme from '../../app/theme'

export const Profile = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 90px 0 25px 0;
  padding: 0 8%;
  min-height: 50vh;

  h2,
  h3 {
    text-align: left;
    letter-spacing: 1px;
  }

  h2 {
    color: ${theme.colors.text};
    font-size: 30px;

    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }

  h3 {
    padding: 10px 0 0;
    color: ${theme.colors.hoverGray};
    font-size: 20px;

    @media screen and (max-width: 768px) {
      padding: 20px 0 0;
      font-size: 20px;
    }
  }
`
