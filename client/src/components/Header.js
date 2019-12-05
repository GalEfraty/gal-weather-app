import React, { useContext } from "react";
import HeaderHasUser from "./HeaderHasUser";
import HeaderNoUser from "./HeaderNoUser";

import userContext from "../context/userContext";

const Header = () => {
  const { loggedInUser } = useContext(userContext);
  // useEffect(() => {
  //   if (loggedInUser) {
  //     console.log(loggedInUser);
  //   }
  // });

  return loggedInUser ? <HeaderHasUser /> : <HeaderNoUser />;
};

export default Header;
