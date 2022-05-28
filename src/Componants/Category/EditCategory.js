import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EditCategory = (id) => {
  const [user, setUser] = useState({ id });
  const { category, name } = user;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log("Clicked");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    console.log("ID", id.id);
    const result = await axios.get(`http://localhost:3003/category/${id.id}`);
    setUser(result.data);
    console.log(result.data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/category/${id.id}`, user);
    console.log(id);
    window.location.reload(false);
  };

  return (
    // <div>
    //   <Button onClick={handleShow}>Edit</Button>
    //   <Modal show={show} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Edit Category</Modal.Title>
    //     </Modal.Header>

    //     <Modal.Body>
    //       <form align="center">
    //         <div>
    //           <label>Category Name :</label>
    //           <input
    //             name="category"
    //             value={category || id.category}
    //             onChange={handleChange}
    //           ></input>
    //           <br />
    //           <label> Name of Person:</label>
    //           <input
    //             name="name"
    //             value={name || id.name}
    //             onChange={handleChange}
    //           ></input>
    //         </div>
    //       </form>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button onClick={handleSubmit}>Edit</Button>
    //       <Button variant="secondary" onClick={handleClose}>
    //         Close
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
    <>
      <button onClick={handleShow}>Edit</button>
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        show={show}
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
                onChange={handleChange}
                placeholder="Enter Category"
                name="category"
                value={category}
              />
              <hr className="sidebar-divider d-none d-md-block" />
              <input
                type="text"
                className="form-control form-control-user"
                aria-describedby="emailHelp"
                onChange={handleChange}
                name="name"
                value={name}
                placeholder="Enter Name of Head"
              />
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

export default EditCategory;
