import Footer from "./footer";
import Menu from "./menu";
export default function EditAccount() {
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
                  <h1 className="page-title">Edit account</h1>
                </header>
                <div className="page-content">
                  <div className="row justify-content-center">
                    <div className="col col-12 col-xl-8">
                      <form className="mb-4">
                        <label>Photo</label>
                        <div className="form-group avatar-box d-flex align-items-center">
                          <img
                            src="../assets/content/user-400-1.jpg"
                            width={100}
                            height={100}
                            alt
                            className="rounded-500 me-4"
                          />
                          <button
                            className="btn btn-outline-primary"
                            type="button"
                          >
                            Change photo
                            <span className="btn-icon icofont-ui-user ms-2" />
                          </button>
                        </div>
                        <div className="form-group">
                          <label>First name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="First name"
                            defaultValue="Liam"
                          />
                        </div>
                        <div className="form-group">
                          <label>Last name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Last name"
                            defaultValue="Jouns"
                          />
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label>Age</label>
                              <input
                                className="form-control"
                                type="number"
                                placeholder="Age"
                                defaultValue={25}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label>Gender</label>
                              <select className="selectpicker" title="Gender">
                                <option selected="selected">Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Phone number</label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Age"
                          />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea
                            className="form-control"
                            placeholder="Address"
                            rows={3}
                            defaultValue={
                              "71 Pilgrim Avenue Chevy Chase, MD 20815"
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label>Last visit</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Last visit"
                            defaultValue="18 Dec 2019"
                            readOnly="readonly"
                          />
                        </div>
                        <div className="form-group">
                          <label>Status</label>
                          <select className="selectpicker" title="Status">
                            <option selected="selected">Approved</option>
                            <option>Pending</option>
                          </select>
                        </div>
                        <div className="row">
                          <div className="col">
                            <button type="button" className="btn btn-success">
                              Save changes
                            </button>
                          </div>
                          <div className="col text-end">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              <span className="d-none d-sm-block">
                                Delete account
                              </span>
                              <span className="d-sm-none">Delete</span>
                            </button>
                          </div>
                        </div>
                      </form>
                      <hr />
                      <h4>Change password</h4>
                      <form>
                        <div className="row">
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label>Current password</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Current password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label>New password</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="New password"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label>Confirm new password</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Confirm new password"
                              />
                            </div>
                          </div>
                        </div>
                        <button type="button" className="btn btn-outline-dark">
                          Change password
                        </button>
                      </form>
                    </div>
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
