import "../index.css";
import data from "../data.json";
import SongCard from "../components/SongCard";

const Rammstein = (props) => {
  return (
    <div className="content-body">
      <p>{data[2].albums[props.albumIndex].description}</p>
      {data[2].albums[props.albumIndex].songs.map((song) => (
        <SongCard img={`/rammstein${props.albumIndex}.jpg`} length={song.length} title={song.title} />
      ))}
    </div>
  );
};

export default Rammstein;
