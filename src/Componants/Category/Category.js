import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState({ categoryname: "" });
  const { categoryname } = category;
  console.log("category",categoryname);
  const [data, setData] = useState();
  const [show, setShow] = useState();
  const [editShow, setEditShow] = useState();
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("Clicked");
    setShow(true);
  };

  // Add Category

  // useEffect(() => {
  //   getAllData();
  // }, []);

  // const getAllData = async () => {
  //   const responce = await axios.get("http://localhost:5000/api/category");
  //   setData(responce.data);
  // };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setCategory({ ...category, [name]: value });
    // console.log("Category", category);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryname) {
      setError("Please Insert Details!!!");
    } else {
      await axios.post("http://localhost:5000/api/category", category);
      console.log(category);
      setError("");
      handleClose();
      window.location.reload(true);
    }
  };

  // const getData = async (id) => {
  //   const responce = await axios.get(
  //     `http://localhost:5000/api/category/${id}`
  //   );
  //   setCate(responce.data);
  // };

  // Update Category

  // const handleInputUpdate = (e) => {
  //   let { name, value } = e.target;
  //   setC({ ...c, [name]: value });
  // };

  // const handleUpdate = async () => {
  //   let id = cate.id;
  //   console.log(cate?.categoryname, "details");
  //   if (!cate?.categoryname) {
  //     setError("Please Insert Details!!!");
  //   } else {
  //     console.log("executed");
  //     await axios.put(`http://localhost:5000/api/category/${id}`, c);
  //     setError("");
  //     console.log(c);
  //     handleClose();
  //   }
  // };

  // Edit Category

  const handleClick = (id) => {
    // getData(id);
    handleShow(id);
  };

  // Single Delete

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      axios.delete(`http://localhost:5000/api/category/delete/${id}`);
      console.log("User Deleted");
      // window.location.reload(true);
    }
  };

  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Category</h1>
          <a data-toggle="modal"
            data-target="#addModal"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            Add Category
          </a>
          {/* <button onClick={handleSubmit}>AddCategory</button> */}
        </div>

        {/* <!-- Content Row --> */}
        <div>
          {/* <!-- DataTales Example --> */}
          <div className="card shadow ">
            <div className="card-header ">
              <h6 className="m-0 font-weight-bold text-primary">
                DataTables Example
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="dataTables_length" id="dataTable_length">
                      <label>
                        Show
                        <select
                          name="dataTable_length"
                          aria-controls="dataTable"
                          className="custom-select custom-select-sm form-control form-control-sm"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>{" "}
                        entries
                      </label>
                      <label style={{ marginLeft: "65%" }}>
                        Search:
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                          aria-controls="dataTable"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className={"table table-bordered dataTable"}
                      id="dataTable"
                      cellSpacing="0"
                      role="grid"
                      aria-describedby="dataTable_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className={"sorting sorting_asc"}
                            tabIndex="1"
                            aria-controls="dataTable"
                            rowSpan="1"
                            colSpan="1"
                            aria-sort="ascending"
                            aria-label="ID: activate to sort column descending"
                          >
                            ID
                          </th>
                          <th
                            className={"sorting"}
                            tabIndex="2"
                            aria-controls="dataTable"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Category: activate to sort column ascending"
                          >
                            Category
                          </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th rowSpan="1" colSpan="1">
                            ID
                          </th>
                          <th rowSpan="1" colSpan="1">
                            Category
                          </th>
                          <th rowSpan="1" colSpan="1">
                            Action
                          </th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {console.log("data",data)}
                        {
                          data?.map(cate => (
                            <tr>
                              <td></td>
                              <td>{cate.id}</td>
                              <td>{cate.categoryname}</td>
                              <td>
                                <button
                                  className={
                                    "btn-primary btn-user d-none d-sm-inline-block btn-sm btn-primary shadow-sm"
                                  }
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(cate.id)}
                                  className={"btn-danger btn-user"}
                                  style={{ marginLeft: 10 }}
                                >
                                  delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="dataTable_info"
                          role="status"
                          aria-live="polite">
                          Showing 1 to 10 of 57 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="dataTable_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous"
                              id="dataTable_previous"
                            >
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="0"
                                tabIndex="0"
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="1"
                                tabIndex="0"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="dataTable_next"
                            >
                              <a
                                href="#"
                                aria-controls="dataTable"
                                data-dt-idx="7"
                                tabIndex="0"
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Add Modal--> */}
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Category
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control form-control-user"
                aria-describedby="emailHelp"
                onChange={handleInputChange}
                placeholder="Enter Category"
                name="categoryname"
                value={categoryname}
              />
              <hr className="sidebar-divider d-none d-md-block" />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
