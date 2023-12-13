import Toast from 'react-bootstrap/Toast';

function toast(props) {
  return (
        <div classname="toast" className="bg-dark position-relative">
        <Toast bg='secondary'>
        <Toast.Header>
            <strong className="me-auto">{props.title}</strong>
            <small>{props.date}</small>
        </Toast.Header>
        <Toast.Body >{props.text}.</Toast.Body>
        </Toast>
    </div>
  );
}

export default toast;