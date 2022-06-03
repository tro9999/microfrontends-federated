import React, { useState, Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const useDynamicScript = (args) => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  React.useEffect(() => {
    if (!args.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`);
      //document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    ready,
    failed,
  };
};

const System = (props) => {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
  });

  if (!props.system) {
    return <h2>Not micro-frontend loaded</h2>;
  }

  if (!ready) {
    return <ClipLoader color={"#353535"} loading={!ready} size={50} />;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(props.system.scope, props.system.module)
  );

  return (
    <Suspense
      fallback={<ClipLoader color={"#353535"} loading={!ready} size={50} />}
    >
      <Component />
    </Suspense>
  );
};

function loadComponent(remote, module) {
  console.log("REMOTE ", remote, module);
  return async () => {
    const shareScope = "default";
    /*
    unction loadComponent(scope, module) {
        return async () => {
          // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
          await __webpack_init_sharing__('default');
          const container = window[scope]; // or get the container somewhere else
          // Initialize the container, it may provide shared modules
          await container.init(__webpack_share_scopes__.default);
          const factory = await window[scope].get(module);
          const Module = factory();
          return Module;
        };
      }
      */
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    if (!window[remote].__initialized) {
      console.log("NOT INITIALIZED....");
      // if share scope doesnt exist (like in webpack 4) then expect shareScope to be a manual object
      console.log(
        "MANUAL SHARE SCOPE CHECK ....",
        typeof __webpack_share_scopes__
      );
      if (typeof __webpack_share_scopes__ === "undefined") {
        // use default share scope object passed in manually
        console.log("MANUAL SHARE SCOPE....");
        await window[remote].init(shareScope.default);
      } else {
        // otherwise, init share scope as usual
        await window[remote].init(__webpack_share_scopes__[shareScope]);
      }
      // mark remote as initialized
      window[remote].__initialized = true;
    }
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    //await __webpack_init_sharing__("default");
    const container = window[remote]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    //await container.init(__webpack_share_scopes__.default);
    console.log("CONTAINER ", container);
    const factory = await container.get(module);
    console.log("FACTORY ", factory);
    const Module = factory();
    return null;
    //return Module;
  };
}
export default System;
