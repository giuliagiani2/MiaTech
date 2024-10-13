import React from "react";
import Card from "./Card";

const App = () => {

  return (
    <div>
      <h1>Esercizio</h1>
      <Card>
        <h3>Titolo della card</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Card>
      <Card>
        <h3>Un'altra card</h3>
        <p>Sequi tempore ea obcaecati! Dicta, qui recusandae enim neque sapiente eum possimus est cumque explicabo.</p>
      </Card>
    </div>
  );
}

export default App;
