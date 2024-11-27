import { useLoaderData } from "react-router-dom";
import EstateCard from "../components/EstateCard";
import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const estates = useLoaderData();
  const { loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-292px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>UrbanNest | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-16 mb-10">
        <div className="mb-5 text-center max-w-3xl mx-auto">
          <h2 className=" text-2xl md:text-3xl font-bold ">
            Explore Our Estates
          </h2>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Discover the perfect property tailored to your lifestyle. From cozy
            apartments to luxurious townhouses, we have something for everyone.
            Explore our featured listings and find your dream home today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {estates.map((estate) => (
            <EstateCard key={estate.id} estate={estate}></EstateCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
