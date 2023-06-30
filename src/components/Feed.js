import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftMenu from "./LeftMenu";

const Feed = () => {
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftMenu />
    </div>
  )
}

export default Feed