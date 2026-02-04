import React, { useState } from "react";
import "./Sidepanel.css";
import { Search } from "lucide-react";
import { Camera } from "lucide-react";

const SidePanel: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`side-panel ${collapsed ? "collapsed" : ""}`}>
      <div className="panel-header">
        {!collapsed && <span className="title">BRAVE WATCH</span>}
        <button
          className="close-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle panel"
        >
          {collapsed ? "›" : "‹"}
        </button>
      </div>

      <div className="panel-content">
        <div className="menu-item">
          <Search size={20} className="icon" />
          {!collapsed && <span>Entry Logs</span>}
        </div>

        <div className="menu-item">
            <Camera size={20} className="icon"/>
          {!collapsed && <span>Cameras</span>}
        </div>
      </div>
    </aside>
  );
};

export default SidePanel;
