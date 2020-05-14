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
    <div className="container d-flex align-items-center justify-content-center ">
      <div className="col-md-5 mt-5">
        <div className="jumbotron ">
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
              placeholder=" Login"
              value={login}
            />

            <Form.Control
              className="mb-4"
              onChange={(e) => setPass(e.target.value)}
              type="text"
              placeholder=" Senha"
              value={pass}
            />
            {!validate ? null : (
              <>
                {!login && (
                  <div className="alert alert-danger ">Preencha o Login</div>
                )}
                {!pass && (
                  <div className="alert alert-danger ">Preencha a Senha</div>
                )}
              </>
            )}

            <Button variant="primary" onClick={handleSubmit}>
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
