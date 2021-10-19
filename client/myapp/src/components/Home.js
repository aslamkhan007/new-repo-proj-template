import React from "react";
import { SideBar } from "./sidebar/Sidebar";
import { Navigation } from "./Navigation";
import { User } from "./pages/User";

export function Home() {
  return (
    <>
      <Navigation />
      <div className="d-flex">
      <SideBar />
      

      <div className="content" style ={{marginLeft:"-3px",padding:"1px"}}>
        <div className="animated fadeIn">
          <div className="row" >
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="progress-box progress-1">
                    <h4 className="por-title">Visits</h4>

                    <div className="por-txt">96,930 Users (40%)</div>
                    <div className="progress mb-2" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-flat-color-1"
                        role="progressbar"
                        style={{ width: " 40%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-box progress-2">
                    <h4 className="por-title">Bounce Rate</h4>
                    <div className="por-txt">3,220 Users (24%)</div>
                    <div className="progress mb-2" style={{ height: "5px;" }}>
                      <div
                        className="progress-bar bg-flat-color-2"
                        role="progressbar"
                        style={{ width: "24%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress-box progress-2">
                    <h4 className="por-title">Unique Visitors</h4>
                    <div className="por-txt">29,658 Users (60%)</div>
                    <div className="progress mb-2" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-flat-color-3"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-box progress-2">
                    <h4 className="por-title">Targeted Visitors</h4>
                    <div className="por-txt">99,658 Users (90%)</div>
                    <div className="progress mb-2" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-flat-color-4"
                        role="progressbar"
                        style={{ width: "90%;" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Heights</h4>
                </div>
                <div className="card-body">
                  <p className="muted">
                    To create a height progress bar, add a{" "}
                    <code>.progress-bar</code> className to a{" "}
                    <code>&lt;div&gt;</code> element:
                  </p>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                    </div>
                  </div>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "50%;" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Basic Progress Bar</h4>
                </div>
                <div className="card-body">
                  <p className="muted">
                    To create a default progress bar, add a{" "}
                    <code>.progress</code> className to a{" "}
                    <code>&lt;div&gt;</code> element:
                  </p>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Labels</h4>
                </div>
                <div className="card-body">
                  <p className="muted">
                    To create a default progress bar, add a{" "}
                    <code>.progress</code> className to a{" "}
                    <code>&lt;div&gt;</code> element:
                  </p>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Striped</h4>
                </div>
                <div className="card-body">
                  <p className="muted">
                    To create a default progress bar, add a{" "}
                    <code>.progress-bar-striped</code> className to a{" "}
                    <code>&lt;div&gt;</code> element:
                  </p>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar progress-bar-striped bg-success"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar progress-bar-striped bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar progress-bar-striped bg-danger"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Animated Progress Bar</h4>
                </div>
                <div className="card-body">
                  <p className="muted">
                    To create a default progress bar, add a{" "}
                    <code>
                      .progress-bar-striped and .progress-bar-animated
                    </code>{" "}
                    className to a <code>&lt;div&gt;</code> element:
                  </p>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Animated Labels</h4>
                </div>
                <div className="card-body">
                  <p className="muted">
                    To create a default progress bar, add a{" "}
                    <code>
                      .progress-bar-striped and .progress-bar-animated
                    </code>{" "}
                    className to a <code>&lt;div&gt;</code> element:
                  </p>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>  
    </>
  );
}
