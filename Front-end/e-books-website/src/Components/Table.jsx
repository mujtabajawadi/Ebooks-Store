import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Table = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((result) => setProducts(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/products/deleteProduct/${id}`)
          .then((res) => {
            setProducts(products.filter(product => product._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="table-wrapper">
      <Link className="add" to="/Modal">
        <button className="add-btn" value="Add Product">
          Add Product
        </button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Thumbnail</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>
                <img
                  src={`http://localhost:8080/uploads/${product.thumbnail}`}
                  alt={product.title}
                  className="thumbnail"
                />
              </td>
              <td className="actions">
                <Link className="edit" to={`/updateProduct/${product._id}`}>
                  <BsFillPencilFill />
                </Link>
                <Link
                  className="delete"
                  onClick={() => handleDelete(product._id)}
                >
                  <BsFillTrashFill />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
