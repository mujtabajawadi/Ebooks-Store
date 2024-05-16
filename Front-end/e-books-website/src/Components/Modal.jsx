// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Modal.css";
// import axios from "axios";

// // const Modal = ({ closeModal }) => {

// //   return (
// //     <div
// //       className="modal-container"
// //       onClick={(e) => {
// //         if (e.target.className === "modal-container") closeModal();
// //       }}
// //     >
// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     price: "",
//     rating: "",
//     stock: "",
//     thumbnail: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const navigate =useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8080/products/createProduct", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to Insert Product");
//       }

//       const responseData = await response.json();
//       alert("Product Added successfully:", responseData);
//       navigate('/admin');
//       // Optionally, redirect the user to a different page after successful signup
//     } catch (error) {
//       console.error("Error Adding Product:", error.message);
//     }
//   };

//   return (
//     <div className="modal-container">
//       <div className="form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input name="title" onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <input name="price" onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="category">Category</label>
//             <input name="category" onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="rating">rating</label>
//             <input name="rating" onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="stock">stock</label>
//             <input name="stock" onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="thumbnail">Thumbnail</label>
//             <input name="thumbnail" onChange={handleChange} />
//           </div>

//           <button type="submit" className="btn">
//             Submit
//           </button>
//           <Link className="back" to="/admin">
//             <button type="button" className="btn">
//               Go Back
//             </button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

//Code Part -2

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Modal.css";
// import axios from "axios";

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     price: "",
//     category: "",
//     rating: "",
//     stock: "",
//     thumbnail: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/products/createProduct",
//         formData
//       );

//       alert("Product Added successfully");
//       navigate("/admin");
//     } catch (error) {
//       console.error("Error Adding Product:", error.message);
//     }
//   };

//   return (
//     <div className="modal-container">
//       <div className="form">
//         <h2>Add Product</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="category">Category</label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="rating">Rating</label>
//             <input
//               type="text"
//               name="rating"
//               value={formData.rating}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="stock">Stock</label>
//             <input
//               type="text"
//               name="stock"
//               value={formData.stock}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="thumbnail">Thumbnail</label>
//             <input
//               type="text"
//               name="thumbnail"
//               value={formData.thumbnail}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="buttons">
//             <button type="submit" className="btn">
//               Submit
//             </button>
//             <Link className="back" to="/admin">
//               <button type="button" className="btn">
//                 Go Back
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

//Code Part-3

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
    stock: "",
    thumbnail: null, // Initialize thumbnail as null
  });

  const handleChange = (e) => {
    if (e.target.name === "thumbnail") {
      // If the target is thumbnail, set the file value
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
      console.log(e);
    } else {
      // Otherwise, set the value normally
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData(); // Create FormData object
      // Append form data to send to the server
      formDataToSend.append("title", formData.title);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("rating", formData.rating);
      formDataToSend.append("stock", formData.stock);
      formDataToSend.append("thumbnail", formData.thumbnail);

      const response = await axios.post(
        "http://localhost:8080/products/createProduct",
        formDataToSend, // Send the FormData object
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type as multipart/form-data
          },
        }
      );

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
            <label htmlFor="stock">Stock</label>
            <input
              type="text"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*" // Specify accepted file types
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
