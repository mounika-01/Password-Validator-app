// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #24263c;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
`
export const CardContainer = styled.div`
  background-color: #475569;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28%;
  height: 300px;
  padding: 30px;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #f8fafc;
  margin-top: 0px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
`

export const InputEl = styled.input`
  border: 1px solid #f8fafc;
  background-color: #f8fafc;
  outline: none;
  padding: 8px;
  width: 80%;
`

export const SpanEl = styled.p`
  color: #ef4444;
  font-size: 12px;
  margin-top: 5px;
`