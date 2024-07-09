const SongCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.img}></img>
      </div>
      <div className="card-footer">
        <br />
        <p className="song-details">{props.length}</p>
        <p className="song-details">{props.title}</p>
      </div>
    </div>
  );
};

export default SongCard;
