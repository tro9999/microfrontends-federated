import React, { useState } from "react";
import Aside from "./Aside";
import Main from "./Main";

//const distributionId = "https://d3estbbkosz3y8.cloudfront.net";
const distributionId =
  "https://cdn.jsdelivr.net/gh/tro9999/microfrontends-federated";

function Layout({ setApp2, setApp3 }) {
  const [rtl, setRtl] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const [system, setSystem] = React.useState({});
  //const remoteEntry2 = PRODUCTION ? `${distributionId}/mfe-app2/remoteEntry.js` : "http://localhost:3002/remoteEntry.js";
  //const remoteEntry3 = PRODUCTION ? `${distributionId}/mfe-app3/remoteEntry.js` : "http://localhost:3003/remoteEntry.js";

  const remoteEntry2 = `${distributionId}/mfe-app2/dist/remoteEntry.js`;

  const remoteEntry3 = `${distributionId}/mfe-app3/dist/remoteEntry.js`;

  function setApp2() {
    /*
    setSystem({
      remote: "app2",
      url: "https://cdn.jsdelivr.net/gh/tro9999/module-federation-examples/dynamic-system-host/app2/dist/remoteEntry.js",
      module: "./Widget",
    });
    */

    setSystem({
      url: remoteEntry2,
      remote: "mfeApp2",
      module: "./App",
    });
  }

  function setApp3() {
    setSystem({
      remote: "app3",
      url: "https://cdn.jsdelivr.net/gh/tro9999/module-federation-examples/dynamic-system-host/app3/dist/remoteEntry.js",
      module: "./Widget",
    });
    /*
    setSystem({
      url: remoteEntry3,
      remote: "mfeApp3",
      module: "./App",
    });
    */
  }

  return (
    <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
      <Aside image={image} handleApp2={setApp2} handleApp3={setApp3} />

      <Main image={image} system={system} />
    </div>
  );
}

export default Layout;
