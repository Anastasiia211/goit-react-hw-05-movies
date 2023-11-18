import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const ErrMessage = styled(ErrorMessage)`
  bottom: -1.5em;
  color: red;
  font-size: 14px;
  `;

export const SearchForm = styled.div`
display:flex;
  align-items: center;
  width: 100%;
  padding-bottom:20px;
   overflow: hidden;
   border-radius: 5px;


   .search-item {
    text-align: center;
    width: 100%;
    display: flex;
    gap: 10px;
  }
input {
    width: 100%;
    max-width: 400px;

    &:focus {
      border: 1px solid ${p => p.theme.colors.greens};
      outline: none;
    }
  }

   button {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${p => p.theme.colors.greens};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.grays};
    padding: 5px 10px;
    border-radius: 5px;
    transition: color ${p => p.theme.cubicTransition},
      background-color ${p => p.theme.cubicTransition};

    &:hover {
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.greens};
    }
  }

`;