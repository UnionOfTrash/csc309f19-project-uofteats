import React from "react";
import HeaderBar from "../../commons/HeaderBar";
import "./CustomerMain.css";
import SearchTruck from "./SearchTruck";
import TruckInfo from "./TruckInfo";
import trackData from "../../data/TrackData";

import "antd/dist/antd.css";

class CustomerMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: trackData
    };
    this.searchTruck = this.searchTruck.bind(this);
  }

  searchTruck(inputStr) {
    if (inputStr === "") {
      this.setState({ shown: trackData });
      return;
    }
    let matchedTrucks = [];
    const searchStr = inputStr.replace(" ", "");
    let trackName;
    for (let i = 0; i < trackData.length; i++) {
      trackName = trackData[i].name.replace(" ", "");
      if (trackName.includes(searchStr)) {
        matchedTrucks.push(trackData[i]);
      }
    }
    this.setState({ shown: matchedTrucks });
  }

  render() {
    const trackComponents = this.state.shown.map(truck => (
      <TruckInfo
        key={truck.id}
        name={truck.name}
        location={truck.location}
        type={truck.type}
        rate={truck.rate}
        image={truck.image}
        alternative={truck.alternative}
        foodPage={truck.foodPage}
      />
    ));

    return (
      <div>
        <HeaderBar title="UofT Eats" username="User name" />
        <div id="search-field">
          <SearchTruck
            placeholder="Input truck name"
            onSearch={this.searchTruck}
          />
        </div>
        <div>{trackComponents}</div>
      </div>
    );
  }
}

export default CustomerMain;
