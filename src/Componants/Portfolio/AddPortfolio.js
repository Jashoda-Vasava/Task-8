import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPortfolio = () => {
  const navigate = useNavigate();

  const [cat, setCat] = useState();

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const responce = await axios.get("http://localhost:3003/category");
    // console.log(responce.data);
    setCat(responce.data);
  };

  const [data, setdata] = useState({
    category: "",
    name: "",
    discription: "",
    images: "",
  });
  const { category, name, discription, images } = data;
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !name) {
      setError("Please Insert Details!!!");
    } else {
      axios.post("http://localhost:3003/portfolio", data);
      console.log(data);
      navigate("/allprt");
      setError("");
      //   window.location.reload(true);
    }
  };

  console.log("Data", data);
  return (
    <form className="user">
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-user"
          aria-describedby="emailHelp"
          onChange={handleInputChange}
          name="name"
          value={name}
          placeholder="Enter Name of Project"
        />
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Category</label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={handleInputChange}
            name="category"
            value={category}
          >
            <option defaultValue={0}>-- Select One --</option>
            {cat?.map((c) => (
              <option value={c.category}>{c.category}</option>
            ))}
          </select>
        </div>
        <hr className="sidebar-divider d-none d-md-block" />
        <input
          type="text"
          className="form-control form-control-user"
          aria-describedby="emailHelp"
          onChange={handleInputChange}
          name="discription"
          value={discription}
          placeholder="Enter Discription"
        />
        <hr className="sidebar-divider d-none d-md-block" />
        <input
          type="file"
          className="form-control form-control-user"
          aria-describedby="emailHelp"
          onChange={handleInputChange}
          name="images"
          value={images}
        />
      </div>
      <hr className="sidebar-divider d-none d-md-block" />
    </form>
  );
};

export default AddPortfolio;
