import { useState } from "react";
import * as SC from "./AppStyled";

import ContactForm from "./assets/components/ContactForm/ContactForm";
function App() {

const [contact, setContact] = useState(null)

const handleContact = (data) => {
setContact(data)
}

  return <SC.AppStyled>
    <ContactForm handleContact={handleContact}/>
  </SC.AppStyled>;
}

export default App;
