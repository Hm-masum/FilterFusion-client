import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import ProductCart from "../Components/ProductCart";
import { useState } from "react";

const AllProducts = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const { data: products = [], refetch } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/all-products?search=${search}`);
      return data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
    refetch();
  };

  return (
    <div>
      <div className="py-8">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-2/12">
            <input
              name="search"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className="input w-full input-bordered"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="w-full md:w-2/12">
            <select className="p-3 border rounded w-full">
              <option value="all">All Brands</option>
              <option value="Arong">Arong</option>
              <option value="Cascade">Cascade</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Nike">Nike</option>
            </select>
          </div>

          <div className="w-full md:w-2/12">
            <select className="p-3 border rounded w-full">
              <option value="all">All Category</option>
              <option value="Painting">Painting</option>
              <option value="Scenario">Scenario</option>
              <option value="Mobile">Scenario</option>
              <option value="Shoe">Shoe</option>
            </select>
          </div>

          <div className="w-full md:w-2/12">
            <select className="p-3 border rounded w-full">
              <option value="all">All Price</option>
              <option value="low">Low (0 - 500)</option>
              <option value="mid">Mid (500 - 1000)</option>
              <option value="high">High (1000+)</option>
            </select>
          </div>

          <div className="w-full md:w-2/12">
            <select className="p-3 border rounded w-full">
              <option value="all">Sort by</option>
              <option value="lowToHigh">Low to High Price</option>
              <option value="highToLow">High To Low Price</option>
              <option value="newestDate">Newest Date</option>
            </select>
          </div>

          <button className="btn bg-purple-600 text-white w-full md:w-2/12">Search</button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
