const PopUp = ({ contact }) => {
  const { firstName, lastName, email } = contact || {};

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
