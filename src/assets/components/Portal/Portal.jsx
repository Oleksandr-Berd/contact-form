import ReactDOM from 'react-dom';

function Portal({ children}) {

  return ReactDOM.createPortal(
    <div>
      <div >
        {children}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}

export default Portal;
