import React from "react";
import { useState } from "react";
import "./Styles/ControlPanel.css";
import Display from '../assets/Display.svg'


function ControlPanel({grouping,setGrouping,sorting,setSorting}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          <span style={{marginRight:"10px"}}><img src={Display}/></span> Display ▼
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <span>Grouping</span>
              <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                <option value="Status">Status</option>
                <option value="Priority"> Priority</option>
                <option value="Users">Users</option>
              </select>
            </div>
            <div className="dropdown-item">
              <span>Ordering</span>
              <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ControlPanel;