import Footer from "./footer";
import Menu from "./menu";
export default function Assistants() {
  return (
    <>
      <div className="vh-100 overflow-scroll">
        <div className="page-box">
          <div className="app-container">
            
            <Menu />

            <main className="main-content">
              <div className="app-loader">
                <i className="icofont-spinner-alt-4 rotate" />
              </div>
              <div className="main-content-wrap">
                <header className="page-header">
                  <h1 className="page-title">Assistants</h1>
                </header>
                <div className="page-content">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr className="bg-primary text-white">
                              <th scope="col">Photo</th>
                              <th scope="col">Name</th>
                              <th scope="col">ID</th>
                              <th scope="col">Age</th>
                              <th scope="col">Address</th>
                              <th scope="col">Number</th>
                              <th scope="col">Last visit</th>
                              <th scope="col">Status</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-1.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>Liam</strong>
                              </td>
                              <td>
                                <div className="text-muted">10021</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">42</div>
                              </td>
                              <td>
                                <div className="address-col">
                                  71 Pilgrim Avenue Chevy Chase, MD 20815
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  18 Dec 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-2.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>Emma</strong>
                              </td>
                              <td>
                                <div className="text-muted">10022</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">21</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  5 Dec 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-3.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>Olivia</strong>
                              </td>
                              <td>
                                <div className="text-muted">10023</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">43</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  13 Oct 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-4.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>Ava</strong>
                              </td>
                              <td>
                                <div className="text-muted">10024</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">21</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  26 Dec 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-5.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>Noah</strong>
                              </td>
                              <td>
                                <div className="text-muted">10025</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">22</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  15 Jun 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-6.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>Isabella</strong>
                              </td>
                              <td>
                                <div className="text-muted">10026</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">35</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  2 Jul 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-7.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>Sophia</strong>
                              </td>
                              <td>
                                <div className="text-muted">10027</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">54</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  9 Oct 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-8.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>Mia</strong>
                              </td>
                              <td>
                                <div className="text-muted">10028</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">24</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  17 Mar 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-9.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>William</strong>
                              </td>
                              <td>
                                <div className="text-muted">10029</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">31</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  18 Apl 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-info">New</span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/content/user-40-10.jpg"
                                  alt
                                  width={40}
                                  height={40}
                                  className="rounded-500"
                                />
                              </td>
                              <td>
                                <strong>James</strong>
                              </td>
                              <td>
                                <div className="text-muted">10030</div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">39</div>
                              </td>
                              <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                              <td>
                                <div className="d-flex align-items-center nowrap text-primary">
                                  <span className="icofont-ui-cell-phone p-0 me-2" />
                                  0126595743
                                </div>
                              </td>
                              <td>
                                <div className="text-muted text-nowrap">
                                  6 Apl 2019
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <div className="actions">
                                  <a
                                    href="patient.html"
                                    className="btn btn-dark btn-sm btn-square rounded-pill"
                                  >
                                    <span className="btn-icon icofont-external-link" />{" "}
                                  </a>
                                  <button className="btn btn-info btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-edit" />
                                  </button>
                                  <button className="btn btn-error btn-sm btn-square rounded-pill">
                                    <span className="btn-icon icofont-ui-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <nav className="mt-4">
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                              tabIndex={-1}
                              aria-disabled="true"
                            >
                              <span className="icofont-simple-left" />
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span className="icofont-simple-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="add-action-box">
                    <button
                      className="btn btn-primary btn-lg btn-square rounded-pill"
                      data-bs-toggle="modal"
                      data-bs-target="#add-patient"
                    >
                      <span className="btn-icon icofont-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </main>

            <Footer />
            <div className="content-overlay" />
          </div>
        </div>
        {/* Add patients modals */}
        <div
          className="modal fade"
          id="add-patient"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add new patient</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group avatar-box d-flex">
                    <img
                      src="../assets/content/anonymous-400.jpg"
                      width={40}
                      height={40}
                      alt
                      className="rounded-500 me-4"
                    />
                    <button className="btn btn-outline-primary" type="button">
                      Select image
                      <span className="btn-icon icofont-ui-user ms-2" />
                    </button>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Number"
                    />
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Age"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <select className="selectpicker" title="Gender">
                          <option className="d-none">Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <textarea
                      className="form-control"
                      placeholder="Address"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer d-block">
                <div className="actions justify-content-between">
                  <button
                    type="button"
                    className="btn btn-error"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-info">
                    Add patient
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Add patients modals */}
        {/* Add patients modals */}
        <div className="modal fade" id="settings" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Application's settings</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Layout</label>
                    <select className="selectpicker" title="Layout" id="layout">
                      <option value="horizontal-layout">Horizontal</option>
                      <option value="vertical-layout">Vertical</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Light/dark topbar</label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="topbar"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Light/dark sidebar</label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="sidebar"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <label>Boxed/fullwidth mode</label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="boxed"
                        defaultChecked="checked"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer d-block">
                <div className="actions justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    id="reset-to-default"
                    type="button"
                    className="btn btn-error"
                  >
                    Reset to default
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Add patients modals */}
        {/* Add appointment modals */}
        <div
          className="modal fade"
          id="add-appointment"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add new appointment</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group avatar-box d-flex">
                    <img
                      src="../assets/content/anonymous-400.jpg"
                      width={40}
                      height={40}
                      alt
                      className="rounded-500 me-4"
                    />
                    <button className="btn btn-outline-primary" type="button">
                      Select image
                      <span className="btn-icon icofont-ui-user ms-2" />
                    </button>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Doctor"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Date"
                    />
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Time from"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Time to"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Number"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Injure"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer d-block">
                <div className="actions justify-content-between">
                  <button
                    type="button"
                    className="btn btn-error"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-info">
                    Add appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
