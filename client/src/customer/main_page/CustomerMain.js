import React from "react";
import HeaderBar from "../../commons/HeaderBar";
import "./CustomerMain.css";
import SearchTruck from "./SearchTruck";
import TruckInfo from "./TruckInfo";
import "antd/dist/antd.css";

class CustomerMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrucks: [],
      shown: []
    };
    this.searchTruck = this.searchTruck.bind(this);
  }

  searchTruck(inputStr) {
    const truckData = this.state.allTrucks;
    if (inputStr === "") {
      this.setState({ shown: truckData });
      return;
    }
    let matchedTrucks = [];
    const searchStr = inputStr.replace(" ", "");
    let truckName;
    for (let i = 0; i < truckData.length; i++) {
      truckName = truckData[i].name.replace(" ", "");
      if (truckName.includes(searchStr)) {
        matchedTrucks.push(truckData[i]);
      }
    }
    this.setState({ shown: matchedTrucks });
  }

  componentDidMount() {
    const url = "/api/trucks";
    fetch(url)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert("could not load food trucks");
        }
      })
      .then(json => {
        this.setState({ allTrucks: json.trucks, shown: json.trucks });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const trackComponents = this.state.shown.map(truck => (
      <TruckInfo
        key={truck._id}
        id={truck._id}
        name={truck.name}
        location={truck.location}
        type={truck.type}
        image={truck.profileImg}
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
