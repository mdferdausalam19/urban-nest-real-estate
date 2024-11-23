import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState({});
  useEffect(() => {
    fetch("/data/estates.json")
      .then((res) => res.json())
      .then((data) => {
        const foundEstate = data.find((estate) => estate.id === parseInt(id));
        if (foundEstate) {
          setEstate(foundEstate);
        }
      });
  }, []);
  const {
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
    <div className="mt-10">
      <div className="card bg-base-100 shadow-xl md:flex-row p-5 gap-4">
        <div className="md:w-1/2">
          <figure className="p-1">
            <img src={image} className="rounded-xl" />
          </figure>
        </div>
        <div className="">
          <h2 className="card-title">{estate_title}</h2>
          <p>Price: {price}</p>
          <p>Location: {location}</p>
          <p>Status: {status}</p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
