import  {FaUser, FaLock } from "react-icons/fa"

import { useState } from "react";

import "./Login.css";

  const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();

    };
    
    return (
      <div className="container">
          <form onSubmit={handleSubmit}>
              <h1>Acesse o sistema</h1>
              <div>
                  <input 
                  type="E-mail" 
                  placeholder="E-mail" 
                  onChange={(e) => setUsername(e.target.value)}
                  />
                  <FaUser className="icon" />
              </div>
              
              <div>
                  <input 
                  type="password" 
                  placeholder="Digite sua senha" 
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <FaLock className="icon" />
              </div>
  
              <div className="recall-forget">
                  <label>
                    <input type="checkbox" />
                      Lembre de mim
                  </label>
  
                  <a href="#">Esqueceu sua senha?</a>
              </div>
  
              <button>Acessar</button>
  
              <div className="signup-link">
                <p>
                  Não tem uma conta? <a href="#">Registre-se</a>
                </p>
              </div>
          </form>
      </div>
    );
  }


export default Login;