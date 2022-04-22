import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: var(--blue-up4);
  border-radius: 10px;
  border: 1px solid var(--gray-5);
  padding: 1rem;
  width: 450px;
  margin-top: 75px;
  height: 400px;
  display: flex;

  @media only screen and (max-width: 1024px) {
    height: 400px;
    padding: 1rem;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 5px;
    width: 350px;
    height: 440px;
    gap: 0rem;
  }
  
  label {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    position: relative;
    
    @media only screen and (max-width: 1024px) {
      width: 100%;
    }

    @media only screen and (max-width: 1024px) {
      width: 100%;
    }
  
    input {
      box-shadow: inset 1px 0px 2px 2px var(--black-op8);
      -webkit-box-shadow: inset 1px 0px 2px 2px var(--black-op8);
      color: var(--black-op8);
      width: 100%;
      border-radius: 5px;
      border: none;
      padding: 10px;
      color: var(--black-op);
      font-size: 19px;

      &:focus {
        box-shadow: inset 1px 0px 2px 2px var(--blue-up3);
        -webkit-box-shadow: inset 1px 0px 2px 2px var(--blue-up3);
      }

      @media only screen and (max-width: 1024px) {
        font-size: 18px;
      }

      @media only screen and (max-width: 768px) {
        height: 45px;
        font-size: 21px;
      }
    }
    
    textarea {
      box-shadow: inset 1px 0px 2px 2px var(--black-op8);
      -webkit-box-shadow: inset 1px 0px 2px 2px var(--black-op8);
      width: 100%;
      color: var(--black-op);
      resize: none;
      border-radius: 5px;
      font-size: 1.8rem;
      padding: 5px;

      &:focus {
        box-shadow: inset 1px 0px 2px 2px var(--blue-up3);
        -webkit-box-shadow: inset 1px 0px 2px 2px var(--blue-up3);
      }

      @media only screen and (max-width: 1024px) {
        font-size: 21px;
      }
    }
  }

  button {
    display: flex;
    color: var(--black-op8);
    cursor: pointer;
    border-radius: 4px;
    padding: 1rem;
    text-align: center;
    border: 1px solid var(--blue-up2);
    font-weight: bold;
    font-size: 1.8rem;
    .icon {
      fill: var(--black-op8);
    }
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  right: 10px;
  div {
    svg {
      width: 25px;
      fill: var(--red-op);
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      svg {
        width: 21px;
      }
    }
    top: 3.5px;
  }
`;
