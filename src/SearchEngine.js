import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <input type="text" placeholder="Enter city" />
        <input type="submit" value="Search" />
      </form>
      <button> current </button>
    </div>
  );
}
