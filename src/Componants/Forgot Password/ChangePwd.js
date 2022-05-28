import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChangePwd = () => {

    const navigate = useNavigate();

    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="p-5">
                                        <form class="user">
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Your Old Paasword..." />
                                                <hr className="sidebar-divider d-none d-md-block" />
                                                <input type="password" class="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter New Paasword..." />
                                                <br />
                                                <input type="password" class="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Confirm New Paasword..." />
                                            </div>
                                            <hr className="sidebar-divider d-none d-md-block" />
                                            <button className={"btn-primary btn-user btn-block"} onClick={() => navigate('/')}>
                                                Change Password
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

export default ChangePwd