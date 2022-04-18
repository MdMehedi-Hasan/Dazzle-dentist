import React from "react";
import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5 wrapper g-2">
        <div className="col-12 border border-2 rounded bg-gradient p-4">
          <h2>
            Q-1) What are the diffferences between authorization &amp;
            authentication?
          </h2>
          <p>
            Authentication is the process of validating the user whom they claim
            to be. This is the primary steps in security process. Authentication
            could be done by OTP Pin,Password,Email-verification etc.
            Authorization is the process of giving access to a specific resource
            or function. This term is used for admin/client privilege or to
            access special functionalities. To be authorized user first need be
            authenticate him/themself. But to authenticate user/client doesn't
            need to do authorization.
          </p>
        </div>
        <div className="col-12 border border-2 rounded bg-gradient p-4">
          <h2>
            Q-2) Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            Firebase is a Google-based application development software. Google
            firebase offers many features such as: Analytics, Hosting, Cloud
            storage, Dynamic linking &amp; many more. The main reason to use the
            service is, in firebase it is easy to authenticate users &amp; the
            features of this service pitch to backend tools which reduce
            workload and time. Firebase is faster then any backend web services,
            Quick display data in the application &amp; you can provide any
            social networking login with very few lines code .{" "}
            <b>
              There are bunch of alternatives like : Flutter, MongoDb, Kuzzle
              etc.
            </b>{" "}
          </p>
        </div>
        <div className="col-12 border border-2 rounded bg-gradient p-4">
          <h2>
            Q-3) What other services does firebase provide other than
            authentication?
          </h2>
          <p>Besides authentication firebase provides :</p>
          <ul>
            <li>Cloud messaging</li>
            <li>Remote config</li>
            <li>Realtime database</li>
            <li>Analytics</li>
            <li>Hosting</li>
            <li>Cloud functions</li>
            <li>Predictions</li>
            <li>Test lab</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
