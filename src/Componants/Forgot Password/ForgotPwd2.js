import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPwd = () => {

    const navigate = useNavigate();

    return (
        <div class="container">

            {/* <!-- Outer Row --> */}
            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-2">Reset Your Password</h1>
                                        </div>
                                        <form class="user">
                                            <div class="form-group">
                                                <input type="number" class="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter OTP....." />
                                            </div>
                                        <hr />
                                            <button class="btn-primary btn-user btn-block" onClick={() => navigate('/forgotpwd')}>
                                                Verify
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

export default ForgotPwd