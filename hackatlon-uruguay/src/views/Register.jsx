import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import {ToastContainer, toast} from 'react-toastify'
import { useRef } from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin/HeaderLogin";


const Register = () => {

const nameTxt = useRef("")
const lastNameTxt = useRef("");
const emailTxt = useRef("");
const passTxt = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = nameTxt.current.value;
    const apellido = lastNameTxt.current.value;
    const email = emailTxt.current.value;
    const pass = passTxt.current.value;

    if(nombre === "" || apellido==="" || email ==="" || pass ===""){
        toast("No puede haber campos vacíos");
    }else{
        toast("Registro exitoso! Ya puedes iniciar sesión");
    }
  };



  return (
    <>
        
        <HeaderLogin/>
    <div className="register-container">
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="Nombre" placeholder="Ingrese su nombre" ref={nameTxt}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="Nombre" placeholder="Ingrese su nombre" ref={lastNameTxt}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Ingrese su email" ref={emailTxt}/>
          <Form.Text className="text-muted">
            Nunca compartiremos su email con otras empresas.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passTxt}/>
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>Registrarme</Button>
      </Form>

      <div className="link-container">
      <Link to="/login">Iniciar sesión</Link>
      </div>

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

export default Register;
