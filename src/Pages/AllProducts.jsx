import useAxiosCommon from "../Hooks/useAxiosCommon";
import ProductCart from "../Components/ProductCart";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const axiosCommon = useAxiosCommon();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosCommon(`/all-products?search=${searchText}`);;
      setProducts(data);
    };

    getData();
  }, [searchText,axiosCommon]);



  return (
    <div>
      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-1/5">
            <input
              name="search"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className="input w-full input-bordered"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="w-full md:w-1/5">
            <select className="p-3 border rounded w-full">
              <option value="all">All Brands</option>
              <option value="Arong">Arong</option>
              <option value="Cascade">Cascade</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Nike">Nike</option>
            </select>
          </div>

          <div className="w-full md:w-1/5">
            <select className="p-3 border rounded w-full">
              <option value="all">All Category</option>
              <option value="Painting">Painting</option>
              <option value="Scenario">Scenario</option>
              <option value="Mobile">Scenario</option>
              <option value="Shoe">Shoe</option>
            </select>
          </div>

          <div className="w-full md:w-1/5">
            <select className="p-3 border rounded w-full">
              <option value="all">All Price</option>
              <option value="low">Low (0 - 500)</option>
              <option value="mid">Mid (500 - 1000)</option>
              <option value="high">High (1000+)</option>
            </select>
          </div>

          <div className="w-full md:w-1/5">
            <select className="p-3 border rounded w-full">
              <option value="all">Sort by</option>
              <option value="lowToHigh">Low to High Price</option>
              <option value="highToLow">High To Low Price</option>
              <option value="newestDate">Newest Date</option>
            </select>
          </div>
        </div>
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
