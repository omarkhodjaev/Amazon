import React from 'react';
import "./Sidebar.css";
import { FiX } from 'react-icons/fi'

const Sidebar = ({isSidebarActive, setIsSidebarActive}) => {

  return (
    <div className={isSidebarActive === true ? "sidebar sidebaractive" : "sidebar"}>
      <FiX onClick={() => {
        setIsSidebarActive(false)
        }}/>
    </div>
  )
}

export default Sidebar