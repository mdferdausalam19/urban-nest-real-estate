import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    id,
    area,
    description,
    estate_title,
    facilities,
    image,
    location,
    price,
    segment,
    status,
  } = estate;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border">
        <figure className="px-5 pt-10">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{estate_title}</h2>
          <p>Price: {price}</p>
          <p>Location: {location}</p>
          <p>Status: {status}</p>
          <div className="card-actions">
            <Link to={`/estate/${id}`} className="btn ">
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
