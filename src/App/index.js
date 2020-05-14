import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';

function App() {
  const [login,setLogin] = useState('');
  const [pass,setPass] = useState('');
  const [validate,setValidade] = useState(false);
 
  const handleLogin = (e) => {
    setLogin(e.target.value);
    
  }
  
  const handlePass = (e) => {
    setPass(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!login && !pass) {
      console.log('Login Precisa ser preenchido');
      console.log('Senha Precisa ser preenchido');
    }
  }

  return (
    <div>
        <Form className="container">
          <br/>
          <Form.Control onChange= {handleLogin} type="text" placeholder =" Login" value = { login }/>
          <br/>
          <Form.Control onChange= {handlePass} type="text" placeholder =" Senha" value = { pass }/>
          <br/>
          <Button variant="primary" onClick={handleSubmit}>Enviar!</Button>
        </Form>
        
        {/* <>
          <span>Login Precisa ser preenchido</span>
          <br/>
          <span>Senha Precisa ser preenchido</span>
        </> */}

    </div>
    
  );
}

export default App;
