import styled from 'styled-components'

export const FormContainer = styled.form`
  align-items: flex-end;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 35px 0 0;
  padding: 20px 14px;
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
  background-color: #075985;
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
