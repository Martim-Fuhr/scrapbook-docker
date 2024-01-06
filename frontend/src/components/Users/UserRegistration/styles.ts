import styled from 'styled-components'
import theme from '@/app/theme'

export const HeadForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 15px;
  width: 100%;

  h2 {
    width: 100%;
    color: ${theme.colors.goldColor};
    justify-content: left;
    align-items: center;
    font-size: 30px;
    letter-spacing: 1px;

    @media screen and (max-width: 600px) {
      font-size: 22px;
    }
  }
`

export const ButtonForm = styled.button`
  align-items: center;
  border: 1px solid;
  border-radius: 25px;
  color: ${theme.colors.goldColor};
  font-size: 14px;
  height: 40px;
  display: flex;
  justify-content: center;
  width: 200px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
  width: 100%;
`

export const FormContainer = styled.form`
  align-items: flex-end;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 10px;
  width: 100%;

  @media screen and (max-width: 600px) {
    align-items: unset;
    flex-direction: column;
  }

  input {
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    width: 100%;
  }

  input.input-comment {
    height: 80px;
  }
`

export const Button = styled.button`
  background-color: ${theme.colors.goldColor};
  justify-content: end;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  height: 42px;
  margin-top: 10px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
