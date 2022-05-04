import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <input type="text" placeholder="Enter city" autoFocus="on" />
        <input type="submit" value="Search" />
        <button> current </button>
      </form>
    </div>
  );
}
