import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserEnqury = () => {

    const navigate = useNavigate();
    const [data, setData] = useState();

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async () => {
        const responce = await axios.get("http://localhost:3003/customer");
        setData(responce.data);
    };

    return (
        <>
            <div id="wrapper">

                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    {/* <!-- Sidebar - Brand --> */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Sperious</div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/* <!-- Nav Item - Pages Collapse Menu --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" onClick={() => navigate('/allcat')}>
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Category</span>
                        </a>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" onClick={() => navigate('/allprt')}>
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Portfolio</span>
                        </a>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo" onClick={() => navigate('/allt')}>
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Testimonials</span>
                        </a>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog" onClick={() => navigate('/user')}></i>
                            <span>User Data</span>
                        </a>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider d-none d-md-block" />

                </ul>
                {/* <!-- End of Sidebar --> */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content -->    */}
                    <div id="content">

                        {/* <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* <!-- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            {/* <!-- Topbar Navbar --> */}
                            <ul className="navbar-nav ml-auto">

                                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    {/* <!-- Dropdown - Messages --> */}
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                {/* <!-- Nav Item - Alerts --> */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bell fa-fw"></i>
                                        {/* <!-- Counter - Alerts --> */}
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    {/* <!-- Dropdown - Alerts --> */}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-primary">
                                                    <i className="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 12, 2019</div>
                                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-success">
                                                    <i className="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-warning">
                                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </li>

                                {/* <!-- Nav Item - Messages --> */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-envelope fa-fw"></i>
                                        {/* <!-- Counter - Messages --> */}
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                    {/* <!-- Dropdown - Messages --> */}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 className="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="..." />
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div className="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                    alt="..." />
                                                <div className="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                    </div>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>

                                {/* <!-- Nav Item - User Information --> */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img className="img-profile rounded-circle"
                                            src="../../public/assets/img/undraw_profile.svg" />
                                    </a>
                                    {/* <!-- Dropdown - User Information --> */}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" onClick={() => navigate('profile')}>
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a className="dropdown-item"  onClick={() => navigate('/changepwd')}>
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Change Password
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item"  data-toggle="modal" data-target="#logoutModal" onClick={() => navigate('/login')}>
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>

                        </nav>
                        {/* <!-- End of Topbar --> */}

                        {/* <!-- Begin Page Content --> */}

                        <div className="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">User Enquiry</h1>
                            </div>

                            {/* <!-- Content Row --> */}
                            <div>
                                {/* <!-- DataTales Example --> */}
                                <div className="card shadow ">
                                    <div className="card-header ">
                                        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12">
                                                    <div className="dataTables_length" id="dataTable_length">
                                                        <label>Show
                                                            <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm">
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                            </select> entries
                                                        </label>
                                                        <label style={{ marginLeft: "65%" }}>Search:
                                                            <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table className={"table table-bordered dataTable"} id="dataTable" cellSpacing="0" role="grid" aria-describedby="dataTable_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th className={"sorting sorting_asc"} tabIndex="1" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="ID: activate to sort column descending" style={{ width: 57 }}>ID</th>
                                                                <th className={"sorting"} tabIndex="2" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Category: activate to sort column ascending" style={{ width: 61 }}>Customer</th>
                                                                <th className={"sorting"} tabIndex="3" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Person: activate to sort column ascending">E-Mail</th>
                                                                <th className={"sorting"} tabIndex="3" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label="Person: activate to sort column ascending">Phone</th>
                                                                <th style={{ width: 31 }}>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tfoot>
                                                            <tr>
                                                                <th rowSpan="1" colSpan="1">ID</th>
                                                                <th rowSpan="1" colSpan="1">Customer</th>
                                                                <th rowSpan="1" colSpan="1">E-mail</th>
                                                                <th rowSpan="1" colSpan="1">Phone</th>
                                                                <th rowSpan="1" colSpan="1">Status</th>
                                                            </tr>
                                                        </tfoot>
                                                        <tbody>
                                                            {data?.map((d) => (
                                                                <tr>
                                                                    <th scope="row">{d.id}</th>
                                                                    <td>{d.customer}</td>
                                                                    <td>{d.email}</td>
                                                                    <td>{d.phone}</td>
                                                                    <td>Status</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    < div class="row" >
                                                        <div class="col-sm-12 col-md-5">
                                                            <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
                                                                Showing 1 to 10 of 57 entries
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-md-7">
                                                            <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                                                <ul class="pagination">
                                                                    <li class="paginate_button page-item previous" id="dataTable_previous">
                                                                        <a href="#" aria-controls="dataTable" data-dt-idx="0" tabIndex="0" class="page-link">Previous</a>
                                                                    </li>
                                                                    <li class="paginate_button page-item active">
                                                                        <a href="#" aria-controls="dataTable" data-dt-idx="1" tabIndex="0" class="page-link">1</a>
                                                                    </li>
                                                                    <li class="paginate_button page-item next" id="dataTable_next">
                                                                        <a href="#" aria-controls="dataTable" data-dt-idx="7" tabIndex="0" class="page-link">Next</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.container-fluid --> */}
                    </div>
                    {/* <!-- End of Main Content --> */}
                    {/* <!-- Footer --> */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
        </>
    )
}

export default UserEnqury;
