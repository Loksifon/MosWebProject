import styled from 'styled-components';
export const CardStyled = styled.div`
    height: max-content;
    border: 2px solid;
    border-radius: 10px;
`
export const CardTitle = styled.h1`
    font-size: 25px;
    height: 90px;
`
export const CardText = styled.h1`
    font-size: 15px;
`
export const PaginationContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
export const Pagination = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 15px;
`
export const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  margin: 15px 0;
`
export const LoadingInView = styled.div`
  height: 200px;
  border-radius: 10px;
  font-weight: bold;
`