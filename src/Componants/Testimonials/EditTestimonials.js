import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTestimonials = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    const [data, setData] = useState({ client: "", image: "", feedback: "" });
    const { client, image, feedback } = data;
    const [error, setError] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const responce = await axios.get(`http://localhost:3003/testimonials/${id}`);
        console.log(responce.data);
        setData(responce.data);
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!client || !feedback) {
            setError("Please Insert Details!!!")
        } else {
            axios.put(`http://localhost:3003/testimonials/${id}`, data);
            console.log(data);
            navigate("/allt");
            setError("");
            window.location.reload(true);
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
                                                    value={client || data.client}
                                                    placeholder="Enter Client Name" />
                                                <hr className="sidebar-divider d-none d-md-block" />
                                                <input type="file" className="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    onChange={handleInputChange}
                                                    name='image'
                                                    value={image || image} />
                                                    <hr className="sidebar-divider d-none d-md-block" />
                                                <input type="text" className="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    onChange={handleInputChange}
                                                    name='feedback'
                                                    value={feedback || data.feedback}
                                                    placeholder="Enter Feedback" />
                                            </div>
                                            <hr className="sidebar-divider d-none d-md-block" />
                                            <button className='addbtn' onClick={handleSubmit}>
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
    )
}

export default EditTestimonials