import styled from "@emotion/styled";

export const PopUpStyled = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;

  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #2a4144;

  border-radius: 12px;

  & h3 {
    margin-bottom: 8px;

    font-size: 18px;
    line-height: 1.5;
    font-weight: 700;

    color: #fff;
  }

  & p {
    font-size: 16px;
    line-height: 1.5;

    color: #e0f1e8;
    opacity: 0.7;
  }
`;


export const ScaleStyled = styled.div`
width: 80%;
height: 8px;

margin-top: 16px;
margin-left: auto;
margin-right: auto;

background-color: #00fff7;

border-radius: 12px;

animation: fadeOut 3s ease-out forwards;

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scaleX(1);
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform: scaleX(0.5);
  }
}
`

