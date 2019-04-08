import React, { Component, Fragment } from "react";
import HomeMainImage from "./HomeMainImage";
import HomeCoreValue from "./HomeCoreValue";

// class HomePage extends Component {
//   render() {
//     return (
//       <HomeMainImage />
//     );
//   }
// }

const HomePage = () => {
  return (
    <Fragment>
      <HomeMainImage />
      <HomeCoreValue />
    </Fragment>
  );
};

export default HomePage;
