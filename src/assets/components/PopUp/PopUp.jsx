import { useEffect } from "react";

const PopUp = ({ contact, resetPopUp }) => {
  const { firstName, lastName, email } = contact || {};

  const handlePopUp = () => {
    setTimeout(() => {
      resetPopUp();
    }, 3000);
  };


useEffect(()=>{
    handlePopUp()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [contact])

  return (
    <div>
      <div>
        <h3>Message Sent!</h3>
        <p>
          Thanks {firstName} {lastName} for completing the form. We'll be in
          touch soon via {email}!
        </p>
      </div>
    </div>
  );
};

export default PopUp;
