import React, { useState, Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { loadComponent } from "./utils/loadComponent";

const System = (props) => {
  const {
    system,
    system: { remote, url, module },
  } = props;

  if (!system || !remote || !url || !module) {
    return <h2>No system specified</h2>;
  }

  const Loader = window[remote] ? (
    ""
  ) : (
    <ClipLoader color={"#353535"} loading={true} size={50} />
  );
  const Component = React.lazy(loadComponent(remote, "default", module, url));

  return (
    <Suspense fallback={Loader}>
      <Component />
    </Suspense>
  );
};

export default System;
