import styled from "@emotion/styled";

export const ContactFormStyled = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #ffffff;
`;

export const TitleContactStyled = styled.h1`
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;
`;

export const InputConStyled = styled.div`
  margin-bottom: 24px;
`;

export const TextInputStyled = styled.input`
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;

  font-size: 18px;
  line-height: 1.5;
`;

export const LabelStyled = styled.label`
  margin-bottom: 8px;

  font-size: 16px;
  line-height: 1.5;
`;

export const TextAreaConStyled = styled.div`
margin-bottom: 40px;

`

export const TextAreaStyled = styled.textarea`
width: 100%;
`

export const CheckConStyled = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-bottom: 40px;

padding-right: 36px;

& > input{
    margin-right: 16px;
}
`

export const ConsentLabel = styled.label`

font-size: 16px;
line-height: 1.5;
`

export const SubmitButtonStyled = styled.button`
width: 100%;

padding-top: 16px;
padding-bottom: 16px;

background-color: #0C7D69;
color: #fff;

border-radius: 8px;
`