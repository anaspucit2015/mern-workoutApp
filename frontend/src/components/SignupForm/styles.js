import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #fff;
  height: fit-content;
  margin: 0 auto;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  text-align: center;
  color: #1aac83;
`
export const Label = styled.label`
  flex: 0 0 100%;
`
export const Input = styled.input`
  flex: 0 0 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d2d2da;
  margin-bottom: 1rem;
`
export const AddButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: #1aac83;
  border-color: #1aac83;
  color: #fff;
  border: 0;
`