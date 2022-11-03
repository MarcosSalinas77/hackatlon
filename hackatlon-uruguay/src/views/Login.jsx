import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import HeaderLogin from "../components/HeaderLogin/HeaderLogin";
import { useRef } from "react";
import {ToastContainer, toast} from 'react-toastify'
import { Navigate, useHref, useNavigate } from "react-router-dom";
import { getUser } from "../utils/apiConfig";


const Login = () => {
  const loginEmailTxt = useRef("");
const loginPassTxt = useRef();
const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = loginEmailTxt.current.value;
    const pass = loginPassTxt.current.value;

    if(email ==="" || pass ===""){
        toast("No puede haber campos vacíos");
    }else{
      //   localStorage.setItem('user', email)
      //  navigate("/")
      const resp = await getUser(email,pass);
      if(resp.success){
        localStorage.setItem("user", JSON.stringify(resp.user));
        navigate("/");
      }
      console.log(resp)
    }
  };


  return (
    <>
      <HeaderLogin/>
    <div className="login-container">
      
        <Form>
          <Form.Group className="mb-3" controlId="loginMail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Nombre" placeholder="Ingrese su nombre" ref={loginEmailTxt}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerPass">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={loginPassTxt}/>
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>
            Registrarme
          </Button>
        </Form>

        <ToastContainer
          position='bottom-left'
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover={false}
        />
    </div>
      </>
  );
};

export default Login;
