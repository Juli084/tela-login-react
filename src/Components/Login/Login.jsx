import  {FaUser, FaLock } from "react-icons/fa"

import { useState } from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="container">
        <form >
            <h1>Acesse o sistema</h1>
            <div>
                <input type="e-mail" placeholder="E-mail"/>
                <FaUser className="icon" />
            </div>
            
            <div>
                <input type="password" placeholder="Digite sua senha" />
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