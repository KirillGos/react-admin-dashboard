import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">coolAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj" className="topAvatar" alt="avatar"/>
        </div>
      </div>
    </div>
  );
}
