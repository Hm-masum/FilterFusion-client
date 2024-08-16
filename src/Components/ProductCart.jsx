import { Link } from "react-router-dom";

const ProductCart = ({product}) => {
    const  {
        name,
        category,
        brand,
        price,
        rating,
        created_date,
        description,
        image_url,
      } = product;

  return (
    <div className="p-4 rounded-xl hover:scale-105 hover:border-purple-500 border-opacity-3 border-2 border-gray-100 space-y-3">
      <div className="flex justify-center items-center rounded-2xl">
        <img
          src={image_url}
          className={`w-full rounded-lg h-[200px]`}
          alt=""
        />
      </div>
      <div className="space-y-3">
        <div className="flex gap-2" title={description}>
          {description.substring(0, 40)}.....
        </div>
        <h2 className="text-xl lg:text-2xl font-semibold">{name}</h2>
        <div className="flex justify-between">
          <p className="flex gap-1 items-center">Category : {category}</p>
          <p className="flex gap-1 items-center">Brand : {brand}</p>
        </div>
        <p className="border-t border border-gray-300"></p>
        <div className="flex justify-between">
          <p className="flex gap-1 items-center">Price: {price}</p>
          <p className="flex gap-1 items-center">Date: {created_date}</p>
          <p className="flex gap-1 items-center">Rating: {rating}</p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            className="btn w-full text-white btn-outline bg-purple-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
