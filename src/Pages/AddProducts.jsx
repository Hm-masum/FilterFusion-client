import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { imageUpload } from "../utils/ImgBB_api";

const AddProducts = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosCommon = useAxiosCommon();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const brand=form.brand.value;
    let price = form.price.value;
    price=parseFloat(price)
    const rating = form.rating.value;
    const description = form.description.value;
    const created_date = startDate.toLocaleDateString();
    const image = form.image.files[0];

    try {
      const image_url = await imageUpload(image);

      const productsData = {
        name,
        category,
        brand,
        price,
        rating,
        created_date,
        description,
        image_url,
      };


      await axiosCommon.post(`/products`,productsData);
      Swal.fire({
        title: "Success!",
        text: "Add Food Successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="border-2 rounded-xl p-4 md:p-10">
      <Helmet>
        <title>FilterFusion | Add Products</title>
      </Helmet>

      <h2 className="text-3xl mb-4 text-center font-semibold">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="category"
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              name="brand"
              required
              placeholder="Brand Name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              required
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              name="rating"
              required
              placeholder="Ratings"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row  gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="block text-sm">Expired Date</label>
            <DatePicker
              className="border p-3 mt-1 w-full rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div className="form-control md:w-1/2">
            <label className="block text-sm">Select Your Photo</label>
            <div className="mt-1 relative">
              <input
                type="file"
                id="image"
                name="image"
                className="file-input file-input-bordered w-full"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Add Product"
          className="btn text-white btn-block bg-purple-700"
        />
      </form>
    </div>
  );
};

export default AddProducts;
