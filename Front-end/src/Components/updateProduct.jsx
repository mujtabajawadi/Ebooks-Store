import React, { useState, useEffect } from "react";
import "./updateProduct.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    price: "",
    category: "",
    rating: "",
    author: "",
    thumbnail: null,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/getProduct/${id}`)
      .then((result) => {
        setBook(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBook((prevBook) => ({ ...prevBook, thumbnail: file }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", book.title);
      formData.append("price", book.price);
      formData.append("category", book.category);
      formData.append("author", book.author);
      formData.append("thumbnail", book.thumbnail);

      const response = await fetch(
        `http://localhost:8080/products/updateProduct/${id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log("Product updated successfully:", data);
        navigate("/admin");
      } else {
        console.error("Failed to update product:", data.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="modal-container">
      <div className="form">
        <h2>Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={book.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              value={book.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              name="rating"
              value={book.rating}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Author</label>
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input type="file" name="thumbnail" onChange={handleImageChange} />
          </div>

          <div className="buttons">
            <button type="submit" className="btn updateButton">
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

export default UpdateProduct;
