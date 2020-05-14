import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

function App() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [validate, setValidade] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidade(true);
  };

  return (
    <div>
      <Form className="container">
        <br />
        <Form.Control
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder=" Login"
          value={login}
        />
        <br />
        <Form.Control
          onChange={(e) => setPass(e.target.value)}
          type="text"
          placeholder=" Senha"
          value={pass}
        />
        <br />
        <Button variant="primary" onClick={handleSubmit}>
          Enviar
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
            <Alert className="container mt-3" variant="danger">
              Preencha a Senha
            </Alert>
          )}
        </>
      )}
    </div>
  );
}

export default App;
