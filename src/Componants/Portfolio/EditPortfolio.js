import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPortfolio = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({ category: "", name: "", discription: "" });
  const { category, name, discription } = data;
  const [error, setError] = useState("");
  const [cat, setCat] = useState();

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const responce = await axios.get("http://localhost:3003/category");
    setCat(responce.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const responce = await axios.get(`http://localhost:3003/portfolio/${id}`);
    console.log(responce.data);
    setData(responce.data);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !name) {
      setError("Please Insert Details!!!");
    } else {
      axios.put(`http://localhost:3003/portfolio/${id}`, data);
      console.log(data);
      navigate("/allprt");
      setError("");
      window.location.reload(true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="card o-hiddePortfolio-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-5">
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          aria-describedby="emailHelp"
                          onChange={handleInputChange}
                          name="name"
                          value={name || data.name}
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
                            value={category || data.category}
                          >
                            <option Value={0}>-- Select One --</option>
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
                          value={discription || data.discription}
                          placeholder="Enter Discription"
                        />
                        <hr className="sidebar-divider d-none d-md-block" />
                        <input
                          type="file"
                          className="form-control form-control-user"
                          aria-describedby="emailHelp"
                          onChange={handleInputChange}
                          name="image"
                        />
                      </div>
                      <hr className="sidebar-divider d-none d-md-block" />
                      <button className="addbtn" onClick={handleSubmit}>
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPortfolio;
