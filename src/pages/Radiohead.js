import "../index.css";
import data from "../data.json";
import SongCard from "../components/SongCard";

const Radiohead = (props) => {
  return (
    <div className="content-body">
      <p>{data[0].albums[props.albumIndex].description}</p>
      {data[0].albums[props.albumIndex].songs.map((song) => (
        <SongCard img={`/radiohead${props.albumIndex}.jpg`} length={song.length} title={song.title} />
      ))}
    </div>
  );
};

export default Radiohead;
