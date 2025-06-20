import styled from "@emotion/styled";

export const ContactFormStyled = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #ffffff;

  border-radius: 16px;

  & span {
    color: #0c7d69;
  }

  @media (min-width: 768px){
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;


export const NameConStyled = styled.div`
@media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 24px;
}
`

export const TitleContactStyled = styled.h1`
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;

  color: #2a4144;

`;

export const InputConStyled = styled.div`
  position: relative;

  margin-bottom: 24px;

  @media (min-width: 768px){
    margin-bottom: 0;

   &:first-of-type{
    margin-right: 32px;
   }

   &#email, &#query{
    margin-bottom: 24px;
   }
}
`;

export const TextInputStyled = styled.input`
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;

  font-size: 18px;
  line-height: 1.5;

  color: #2a4144;

  border: 1px solid #86a2a5;
  border-radius: 8px;
`;

export const LabelStyled = styled.label`
display: inline-block;

  margin-bottom: 8px;

  font-size: 16px;
  line-height: 1.5;

  color: #2a4144;

@media (min-width: 768px){

    &#query{
        margin-bottom: 16px;
    }
}
`;

export const RadioConStyled = styled.div`

@media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
`

export const RadioLableStyled = styled.label`
  display: block;

  margin-top: 8px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;

  color: #2a4144;

  border: 1px solid #86a2a5;
  border-radius: 8px;

  & > input {
    margin-right: 12px;

  color: #2a4144;

  }

  &:not(:last-of-type) {
    margin-bottom: 16px;

    @media (min-width: 768px){
        margin-bottom: 0;
    }
  }

  @media (min-width: 768px){
width: calc(50% - 8px);
  }
`;

export const TextAreaConStyled = styled.div`
  position: relative;

  margin-bottom: 40px;
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;

  font-size: 18px;
  line-height: 1.5;

  color: #2a4144;

  border: 1px solid #86a2a5;
  border-radius: 8px;
`;

export const CheckConStyled = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 40px;

  padding-right: 36px;

  & > input {
    margin-right: 16px;
  }
`;

export const ConsentLabel = styled.label`
  font-size: 16px;
  line-height: 1.5;

  color: #2a4144;

`;

export const SubmitButtonStyled = styled.button`
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;

  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;

  background-color: #0c7d69;
  color: #fff;

  border-radius: 8px;

  &:disabled {
    background-color: #a9a9a9;
    color: #fff;
  }
`;

export const ErrorConStyled = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;

  transform: translate(0, 24px);

  font-weight: 700;
  font-style: italic;

  color: #ff0000;
`;
