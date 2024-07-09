import "../index.css";
import data from "../data.json";
import SongCard from "../components/SongCard";

const Portishead = (props) => {
  return (
    <div className="content-body portishead">
      <p>{data[1].albums[props.albumIndex].description}</p>
      {data[1].albums[props.albumIndex].songs.map((song) => (
        <SongCard img={`/portishead${props.albumIndex}.jpg`} length={song.length} title={song.title} />
      ))}
    </div>
  );
};

export default Portishead;
