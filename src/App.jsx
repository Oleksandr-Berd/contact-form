import { useState } from "react";
import * as SC from "./AppStyled";

import ContactForm from "./assets/components/ContactForm/ContactForm";
import Portal from "./assets/components/Portal/Portal";
import PopUp from "./assets/components/PopUp/PopUp";
function App() {

const [contact, setContact] = useState(null)

const handleContact = (data) => {
setContact(data)
}

  return <SC.AppStyled>
    <ContactForm handleContact={handleContact}/>
    <Portal>
      <PopUp contact={contact}/>
    </Portal>
  </SC.AppStyled>;
}

export default App;
