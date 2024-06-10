// import React, { useState, useEffect } from "react";
// import "./updateProduct.css";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const UpdateProduct = () => {
//   const { id } = useParams(); // Accessing id parameter from URL
//   const [book, setBook] = useState({
//     title: "",
//     price: "",
//     category: "",
//     rating: "",
//     stock: "",
//     thumbnail: "",
//   });

//   useEffect(() => {
//     axios
//       .get('http://localhost:8080/products/getProduct/'+id)
//       .then((result) => {console.log(result)
//         setTitle(result.data.title)
//         setPrice(result.data.price)
//         setCategory(result.data.category)
//         setRating(result.data.rating)
//         setStock(result.data.stock)
//         setThumbnail(result.data.thumbnail)

//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBook((prevBook) => ({ ...prevBook, [name]: value }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "title":
//         setTitle(value);
//         break;
//       case "price":
//         setPrice(value);
//         break;
//       case "category":
//         setCategory(value);
//         break;
//       case "rating":
//         setRating(value);
//         break;
//       case "stock":
//         setStock(value);
//         break;
//       case "thumbnail":
//         setThumbnail(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send updated data to server
//     axios
//       .patch(`http://localhost:8080/products/updateProduct/${id}`, updatedData)
//       .then((response) => {
//         console.log(response);
//         // Redirect or show success message as needed
//       })
//       .catch((err) => console.log(err));
//   };

//   //const { title, price, category, rating, stock, thumbnail } = formData;

//   return (
//     <div className="modal-container">
//       <div className="form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input id="title" value={book.title} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <input id="price" value={book.price} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="category">Category</label>
//             <input id="category" value={book.category} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="rating">Rating</label>
//             <input id="rating" value={book.rating} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="stock">Stock</label>
//             <input id="stock" value={book.stock} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="thumbnail">Thumbnail</label>
//             <input id="thumbnail" value={book.thumbnail} onChange={handleInputChange} />
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

// export default UpdateProduct;

// import React, { useState, useEffect } from "react";
// import "./updateProduct.css";
// import { Link, useParams ,useNavigate} from "react-router-dom";
// import axios from "axios";

// const UpdateProduct = () => {
//   const { id } = useParams(); // Accessing id parameter from URL
//   const [book, setBook] = useState({
//     title: "",
//     price: "",
//     category: "",
//     rating: "",
//     stock: "",
//     thumbnail: "",
//   });

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/products/getProduct/${id}`)
//       .then((result) => {
//         setBook(result.data);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBook((prevBook) => ({
//       ...prevBook,
//       [name]: value
//     }));
//   };

//   const navigate =useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .patch(`http://localhost:8080/products/updateProduct/${id}`, book)
//       .then((response) => {
//         console.log(response);
//         alert("Product Updated Successfully!");
//         navigate('/admin');
//         // Redirect or show success message as needed
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="modal-container">
//       <div className="form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input name="title" value={book.title} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <input name="price" value={book.price} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="category">Category</label>
//             <input name="category" value={book.category} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="rating">Rating</label>
//             <input name="rating" value={book.rating} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="stock">Stock</label>
//             <input name="stock" value={book.stock} onChange={handleInputChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="thumbnail">Thumbnail</label>
//             <input name="thumbnail" value={book.thumbnail} onChange={handleInputChange} />
//           </div>

//           <button type="submit" className="updateButton">
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

// export default UpdateProduct;


//Running Code Right Now

// import React, { useState, useEffect } from "react";
// import "./updateProduct.css";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const UpdateProduct = () => {
//   const { id } = useParams(); // Accessing id parameter from URL
//   const [book, setBook] = useState({
//     title: "",
//     price: "",
//     category: "",
//     rating: "",
//     stock: "",
//     thumbnail: "",
//   });

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/products/getProduct/${id}`)
//       .then((result) => {
//         setBook(result.data);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBook((prevBook) => ({ ...prevBook, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setBook((prevBook) => ({ ...prevBook, thumbnail: file }));
//   };
  

//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("title", book.title);
//       formData.append("price", book.price);
//       formData.append("category", book.category);
//       formData.append("stock", book.stock);
//       formData.append("thumbnail", book.thumbnail);

//       const response = await fetch(
//         `http://localhost:8080/product/updateProduct/${id}`,
//         {
//           method: "PATCH",
//           body: formData,
//         }
//       );
//       const data = await response.json();
//       console.log('Image Path:', book.thumbnail);
//       if (response.ok) {
//         console.log("Book updated successfully:", data.message);
//         // Redirect to the Admin panel or any other desired page
//         navigate("/admin");
//       } else {
//         console.error("Failed to update book:", data.message);
//       }
//     } catch (error) {
//       console.error("Error updating book:", error);
//     }
//   };
//   return (
//     <div className="modal-container">
//       <div className="form">
//         <h2>Update Product</h2>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={book.title}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <input
//               type="text"
//               name="price"
//               value={book.price}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="category">Category</label>
//             <input
//               type="text"
//               name="category"
//               value={book.category}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="rating">Rating</label>
//             <input
//               type="text"
//               name="rating"
//               value={book.rating}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="stock">Stock</label>
//             <input
//               type="text"
//               name="stock"
//               value={book.stock}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="thumbnail">Thumbnail</label>
//             <input
//               type="file"
//               name="thumbnail"      
//               onChange={handleImageChange}
//             />
//           </div>

//           <div className="buttons">
//             <button type="submit" className="btn updateButton">
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

// export default UpdateProduct;
import React, { useState, useEffect } from "react";
import "./updateProduct.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams(); // Accessing id parameter from URL
  const [book, setBook] = useState({
    title: "",
    price: "",
    category: "",
    rating: "",
    stock: "",
    thumbnail: null, // Changed initial value to null
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
    e.preventDefault(); // Prevent default form submission behavior

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
          method: "PATCH", // Use PATCH method for updating
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
              name="stock"
              value={book.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleImageChange}
            />
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
