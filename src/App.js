import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Button from "./components/button/button";
import Gamearea from "./components/gamearea/gamearea";
import Header from "./components/header/header";
import Modal from "./components/modal/modal";
import ResultArea from "./components/result/resultarea";

function App(props) {
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  const selectHandler = (str) => {
    props.history.push({
      pathname: "/result",
      selected: str,
    });
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Modal show={showModal} hideModalHandler={hideModalHandler} />
      <Header score={score} />
      <Switch>
        <Route path="/result" exact>
          <ResultArea scoreHandler={(n) => setScore((p) => p + n)} />
        </Route>
        <Route path="/">
          <Gamearea selectHandler={selectHandler} />
        </Route>
      </Switch>
      <Button click={showModalHandler}>Rules</Button>
    </div>
  );
}

export default withRouter(App);
