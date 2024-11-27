import { useLoaderData } from "react-router-dom";
import EstateCard from "../components/EstateCard";
import Banner from "../components/Banner";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-16 mb-10">
        <div className="mb-5 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold ">Explore Our Estates</h2>
          <p>
            Discover the perfect property tailored to your lifestyle. From cozy
            apartments to luxurious townhouses, we have something for everyone.
            Explore our featured listings and find your dream home today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {estates.map((estate) => (
            <EstateCard key={estate.id} estate={estate}></EstateCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
