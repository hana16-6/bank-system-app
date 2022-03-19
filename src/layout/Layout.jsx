import React from "react";

import { Button, HeaderCols, HomeHeader } from "../styles/Styles.style";
import Lottie from "react-lottie";
import bankImg from "../images/mobile-banking.json";

function Layout() {
  return (
    <>
      <HomeHeader className="container">
        <HeaderCols>
          <h1>Bank System</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptates iste amet sint porro corporis quos saepe quia, quisquam
            culpa quis asperiores delectus. Nisi laboriosam obcaecati accusamus
            exercitationem itaque odio.
          </p>
          <Button>Customers</Button>
          <Button>Balance</Button>
        </HeaderCols>
        <HeaderCols>
          <Lottie
            options={{
              animationData: bankImg,
            }}
          />
        </HeaderCols>
      </HomeHeader>
    </>
  );
}

export default Layout;
