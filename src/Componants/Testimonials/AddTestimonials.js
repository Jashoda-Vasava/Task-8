import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTestimonials = () => {

    const navigate = useNavigate();

    const [data, setdata] = useState({ client: "", images: "", feedback: "" });
    const { client, images, feedback } = data;
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setdata({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!client || !feedback) {
            setError("Please Insert Details!!!")
        } else {
            axios.post("http://localhost:3003/testimonials", data);
            console.log(data);
            navigate("/allt");
            setError("");
            //   window.location.reload(true);
        }
    }

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
                                                <input type="text" className="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    onChange={handleInputChange}
                                                    name='client'
                                                    value={client}
                                                    placeholder="Enter Client Name" />
                                                <hr className="sidebar-divider d-none d-md-block" />
                                                <input type="file" className="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    onChange={handleInputChange}
                                                    name='image' />
                                                    <hr className="sidebar-divider d-none d-md-block" />
                                                <input type="text" className="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    onChange={handleInputChange}
                                                    name='feedback'
                                                    value={feedback}
                                                    placeholder="Enter Feedback" />
                                            </div>
                                            <hr className="sidebar-divider d-none d-md-block" />
                                            <button className='addbtn' onClick={handleSubmit}>
                                                Add Testimonials
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
    )
}

export default AddTestimonials