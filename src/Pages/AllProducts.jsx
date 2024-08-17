import useAxiosCommon from "../Hooks/useAxiosCommon";
import ProductCart from "../Components/ProductCart";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllProducts = () => {
  const axiosCommon = useAxiosCommon();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [brandItem, setBrandItem] = useState("all");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);


  useEffect(() => {
    const getData = async () => {
      const {data} = await axiosCommon(
        `/all-products?search=${searchText}&brand=${brandItem}&category=${category}&price=${priceRange}&sort=${sort}&page=${currentPage}`
      );
      setProducts(data.result);
      setTotalProducts(data.count)
    };

    getData();
  }, [searchText, brandItem, category, priceRange, sort, currentPage,axiosCommon]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(0);
  };

  const handleBrand = (e) => {
    setBrandItem(e.target.value);
    setCurrentPage(0);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setCurrentPage(0);
  };

  const handlePrice = (e) => {
    setPriceRange(e.target.value);
    setCurrentPage(0);
  };

  const handleSorting = (e) => {
    setSort(e.target.value);
    setCurrentPage(0);
  };

  const numberOfPages = Math.ceil(totalProducts / 6);
  const pages=[...Array(numberOfPages).keys()]
  console.log(numberOfPages,totalProducts)

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>

      <Helmet>
        <title>FilterFusion | All Products</title>
      </Helmet>

      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-1/5">
            <input
              name="search"
              onChange={handleSearch}
              value={searchText}
              className="input w-full input-bordered"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="w-full md:w-1/5">
            <select
              value={brandItem}
              onChange={handleBrand}
              className="p-3 border rounded w-full"
            >
              <option value="all">All Brands</option>
              <option value="Arong">Arong</option>
              <option value="Cascade">Cascade</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Nike">Nike</option>
            </select>
          </div>

          <div className="w-full md:w-1/5">
            <select
              value={category}
              onChange={handleCategory}
              className="p-3 border rounded w-full"
            >
              <option value="all">All Category</option>
              <option value="Painting">Painting</option>
              <option value="Scenario">Scenario</option>
              <option value="Mobile">Mobile</option>
              <option value="Shoe">Shoe</option>
            </select>
          </div>

          <div className="w-full md:w-1/5">
            <select
              value={priceRange}
              onChange={handlePrice}
              className="p-3 border rounded w-full"
            >
              <option value="all">All Price</option>
              <option value="low">Price range (0 - 500)</option>
              <option value="mid">Price range (500 - 1000)</option>
              <option value="high">Price range (1000+)</option>
            </select>
          </div>

          <div className="w-full md:w-1/5">
            <select
              value={sort}
              onChange={handleSorting}
              className="p-3 border rounded w-full"
            >
              <option value="all">Sort by</option>
              <option value="lowToHigh">Low to High Price</option>
              <option value="highToLow">High To Low Price</option>
              <option value="newestDate">Newest Date</option>
              <option value="lowestDate">Lowest Date</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>

      <div className="my-10 flex justify-center">
        <div className="flex gap-3">
          <button className="py-2 text-sm px-3 rounded-lg text-white bg-purple-600" onClick={handlePrevPage}>Prev</button>
          {pages.map((page) => (
            <button
              className={currentPage === page ? "py-2 text-sm px-4 rounded-md text-white bg-purple-600" : undefined}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page+1}
            </button>
          ))}
          <button className="py-2 text-sm px-3 rounded-lg text-white bg-purple-600" onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
