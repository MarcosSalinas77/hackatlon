import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'

const Loading = () => {
  return (
    <div className='spinner-container'>
        <Spinner animation="border" role="status">
    </Spinner>
      <p>Cargando...</p>
    </div>
  )
}

export default Loading