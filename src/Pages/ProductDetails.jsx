import { useParams } from "react-router-dom";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import { Helmet } from "react-helmet-async";
import { IoStar } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["article", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/product/${id}`);
      return data;
    },
  });

  if (isLoading) return <div className="flex justify-center h-[50vh]"><span className="loading loading-bars loading-lg"></span></div>;

  return (
    <div className="lg:flex justify-center items-center gap-8 my-4 lg:my-10">
      <Helmet>
        <title>CraftVerse | CraftDetails</title>
      </Helmet>

      <div className="animate__animated animate__fadeInLeft flex justify-center items-center bg-gray-100 rounded-2xl lg:w-[50%]">
        <img
          className="rounded-2xl lg:h-[500px]"
          src={product.image_url}
          alt="product"
        />
      </div>
      <div className="space-y-4 lg:w-[50%] animate__animated animate__fadeInRight">
        <h1 className="text-2xl lg:text-4xl font-semibold">{product.name}</h1>
        <p className="text-xl">{product.category}</p>
        <p className="border-t-2 border-gray-300"></p>
        <p className="text-xl">Brand : {product.brand}</p>
        <p className="border-t-2 border-gray-300"></p>
        <p>
          <span className="font-semibold">Description : </span>
          {product.description}
        </p>
        <p className="border-t-2 border-gray-300"></p>
        <div className="space-y-2">
          <p className="flex items-center">
            <span className="w-[30%]">Price: </span>
            <span className="font-semibold">{product.price}</span>
          </p>
          <p className="flex items-center">
            <span className="w-[30%]">Created Date: </span>
            <span className="font-semibold">{product.created_date}</span>
          </p>
          <p className="flex items-center">
            <span className="w-[30%]">rating: </span>
            <span className="font-semibold flex gap-1 items-center">
              {product.rating} <IoStar />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
