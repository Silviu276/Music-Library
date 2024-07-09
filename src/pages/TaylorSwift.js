import "../index.css";
import data from "../data.json";
import SongCard from "../components/SongCard";

const TaylorSwift = (props) => {
  return (
    <div className="content-body">
      <p>{data[3].albums[props.albumIndex].description}</p>
      {data[3].albums[props.albumIndex].songs.map((song) => (
        <SongCard img={`/taylorswift${props.albumIndex}.jpg`} length={song.length} title={song.title} />
      ))}
    </div>
  );
};

export default TaylorSwift;
