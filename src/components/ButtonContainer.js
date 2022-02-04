import './ButtonContainer.css';


const ButtonContainer = (props)=>{
  return (
    <div className="button-container">
      <button className="btn-select">
        <h2>Select</h2>
      </button>
      <button className="btn-menu">
        <i className="fas fa-bars"></i>
      </button>
      <button className="btn-left">
        <i className="fas fa-backward"></i>
      </button>
      <button className="btn-right">
        <i className="fas fa-forward"></i>
      </button>
      <button className="btn-play-pause">
        <i className="fas fa-play"></i><i className="fas fa-pause"></i>
      </button>
    </div>
  );
}

export default ButtonContainer;