import React from 'react';
import Sidebar from "react-sidebar";

const SideNavigation = function(){
  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={true}
      styles={{ sidebar: { background: "LightSeaGreen" } }}
    >
    <button>
        Open sidebar
      </button>
    </Sidebar>
  );
}

export default SideNavigation;
