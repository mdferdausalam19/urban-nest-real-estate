import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const { id, estate_title, image, location, price, status } = estate;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border h-[500px]">
        <figure className="px-5 pt-5 h-[300px]">
          <img src={image} className="rounded-xl object-cover w-full h-full" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex-grow">
            <h2 className="card-title">{estate_title}</h2>
            <div className="mt-5 mb-5">
              <p>
                <span className="font-semibold">Price:</span> {price}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {status}
              </p>
            </div>
          </div>

          <div className="card-actions">
            <Link to={`/estate/${id}`} className="btn">
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
EstateCard.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default EstateCard;
