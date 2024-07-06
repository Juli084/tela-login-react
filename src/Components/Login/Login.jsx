import  {FaUser, FaLock } from "react-icons/fa"

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

            <button>Acessar</button>
        </form>
    </div>
  );
}

export default Login;