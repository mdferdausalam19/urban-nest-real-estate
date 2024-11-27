import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
  const { loading } = useAuth();
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
    status,
  } = estate;
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-292px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-10">
      <Helmet>
        <title>UrbanNest | Estate Details</title>
      </Helmet>
      <div className="card border bg-base-100 shadow-xl md:flex-row p-5 gap-4">
        <div className="md:w-1/2">
          <figure className="p-1">
            <img src={image} className="rounded-xl object-cover" />
          </figure>
        </div>
        <div className="md:w-1/2">
          <h2 className="card-title">{estate_title}</h2>

          <p>
            <span className="font-semibold">Area:</span> {area}
          </p>
          <ul>
            <span className="font-semibold">Facilities: </span>
            {facilities?.map((facility, index) => (
              <li className="list-disc ml-10" key={index}>
                {facility}
              </li>
            ))}
          </ul>
          <p>
            <span className="font-semibold">Price:</span> {price}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
