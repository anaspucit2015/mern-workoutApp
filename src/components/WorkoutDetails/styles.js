import styled from "styled-components";

export const Card = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background: #fff;
  height: fit-content;
  position: relative;
`
export const Title = styled.h2`
  text-align: center;
  color: #1aac83;
`
export const Tab = styled.div`
  display: flex;
  background: #f9f9f9;
  padding 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
`
export const Option = styled.div`
  flex: 0 0 50%;
  text-align: center;
  font-weight: bold;
`
export const Value = styled.div`
  flex: 0 0 50%;
  text-align: center;
  border-left: 1px solid #d2d2da;
`
export const Delete = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: #ff0000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`