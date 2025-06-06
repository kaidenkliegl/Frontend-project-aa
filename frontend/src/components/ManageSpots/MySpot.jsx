
import { Link } from "react-router-dom";



function MySpot({ spot }) {
  return (
      <Link to={`/spots/${spot.id}`}>
        <img src={spot.previewImage} alt="" className="spotImage" />
        <h2 className="spotInfo spotCity">{spot.city + ", " + spot.state}</h2>
        <h4 className="spotPrice">${spot.price}/night</h4>
        <p className="spotInfo starRating">{spot.avgStarRating}</p>
      </Link>

  );
}

export default MySpot;
