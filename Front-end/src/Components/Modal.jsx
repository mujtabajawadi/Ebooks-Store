import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Modal.css";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    rating: "",
    author: "",
    thumbnail: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "thumbnail") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("rating", formData.rating);
      formDataToSend.append("author", formData.author);
      if (formData.thumbnail) {
        formDataToSend.append("thumbnail", formData.thumbnail);
      }

      console.log(formData);

      // https://ebooks-store.onrender.com

      const response = await axios.post(
        "https://ebooks-store-fileupload-feature-test.onrender.com/products/createProduct",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response)

      alert("Product Added successfully");
      navigate("/admin");
    } catch (error) {
      console.error("Error Adding Product:", error.message);
    }
  };

  return (
    <div className="modal-container">
      <div className="form">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <div className="buttons">
            <button type="submit" className="btn">
              Submit
            </button>
            <Link className="back" to="/admin">
              <button type="button" className="btn">
                Go Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
