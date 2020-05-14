import React, { useState } from "react";
import { Button, Form, Alert, Jumbotron, Container } from "react-bootstrap";

function App() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [validate, setValidade] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidade(true);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Jumbotron className="col-md-4 mt-5">
        <Form className="d-flex flex-column">
          <div className=" d-flex justify-content-center">
            <img
              src={require("../img/react.svg")}
              width="150"
              alt="Logo React"
            />
          </div>
          <Form.Control
            className="mt-4 mb-4"
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Login"
            value={login}
          />

          <Form.Control
            className="mb-4"
            onChange={(e) => setPass(e.target.value)}
            type="text"
            placeholder="Senha"
            value={pass}
          />
          {!validate ? null : (
            <>
              {!login && <Alert variant="danger">Preencha o Login</Alert>}
              {!pass && <Alert variant="danger">Preencha a Senha</Alert>}
            </>
          )}

          <Button variant="primary" onClick={handleSubmit}>
            Enviar
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
}

export default App;
