import React, { useState } from "react";
import Button from "./components/button/button";
import Gamearea from "./components/gamearea/gamearea";
import Header from "./components/header/header";
import Modal from "./components/modal/modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <Modal show={showModal} hideModalHandler={hideModalHandler} />
      <Header />
      <Gamearea />
      <Button click={showModalHandler}>Rules</Button>
    </div>
  );
}

export default App;
