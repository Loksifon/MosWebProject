import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 1rem auto;
`;

export const StyledInput = styled.input<{ hasError: boolean }>`
  border: 2px solid ${(props) => (props.hasError ? "red" : "black")};
  border-radius: 5px;
  background-color: ${(props) => (props.hasError ? "pink" : "white")};
  padding: 10px;
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
