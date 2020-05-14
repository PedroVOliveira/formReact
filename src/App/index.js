import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

function App() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [validate, setValidade] = useState(false);

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidade(true);
  };

  return (
    <div>
      <Form className="container">
        <br />
        <Form.Control
          onChange={handleLogin}
          type="text"
          placeholder=" Login"
          value={login}
        />
        <br />
        <Form.Control
          onChange={handlePass}
          type="text"
          placeholder=" Senha"
          value={pass}
        />
        <br />
        <Button variant="primary" onClick={handleSubmit}>
          Enviar!
        </Button>
      </Form>

      {!validate ? null : (
        <>
          {!login && (
            <Alert className="container mt-5" variant="danger">
              Preencha o Login
            </Alert>
          )}
          {!pass && (
            <Alert className="container" variant="danger">
              Preencha a Senha
            </Alert>
          )}
        </>
      )}
    </div>
  );
}

export default App;
