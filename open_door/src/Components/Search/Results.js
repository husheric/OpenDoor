import React, { Component } from "react";
import { Link } from "react-router-dom";

class Display extends Component {
  render() {
    const { uniqueBuildingsArr } = this.props;
    return (
      <div>
        {uniqueBuildingsArr.map(building => (
            <div className="results_container">
            <Link to={`/building/${building.buildingid}`}>
              <div className="building">
                <span>{building.housenumber}</span> <span>{building.streetname}</span>{" "}
                <span>{building.boro}</span> <span>{building.zip}</span>{" "}
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Display;
