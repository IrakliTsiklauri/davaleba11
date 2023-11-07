const Card = (props) => {
  const log = () => {
    console.log(props.name, props.characters);
  };
  return (
    <div className="card">
      <h1 className="card-title">{props.name}</h1>
      <p className="text">{props.description}</p>
      {props.characters.map((char) => (
        <div>{char}</div>
      ))}
      <div className="img-box">
        <img src={props.image} alt={props.name} />
      </div>
      <button onClick={log} className="btn">
        button
      </button>
    </div>
  );
};

export default Card;
