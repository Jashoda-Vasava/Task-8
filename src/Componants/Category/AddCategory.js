import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const AddCategory = () => {
  const [user, setUser] = useState({
    category: "",
  });

  const { category } = user;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/category", user);
    setShow(false);
    window.location.reload();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Category
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form align="center">
            <div>
              <label>Category Name :</label>
              <input
                name="category"
                onChange={handleChange}
                value={category}
              ></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Add</Button>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCategory;
