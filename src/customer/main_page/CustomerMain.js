import React from 'react';
import './CustomerMain.css'
import Header from "../Header/Header";
import SearchTruck from "./SearchTruck";
import TruckInfo from "./TruckInfo"


import TruckImg from "../images/truck1.png"

class CustomerMain extends React.Component {
    render() {
        return (
            <div>
                <Header title="UofT Eats" username="David Liu" />
                <SearchTruck placeholder="truck name"/>
                <TruckInfo name="truck 1" location="10 st George street" type="Asian" rate="4.0" image={TruckImg} alternative="truck 1"/>
                <TruckInfo name="truck 1" location="10 st George street" type="Asian" rate="4.0" image={TruckImg} alternative="truck 1"/>
                <TruckInfo name="truck 1" location="10 st George street" type="Asian" rate="4.0" image={TruckImg} alternative="truck 1"/>
                <TruckInfo name="truck 1" location="10 st George street" type="Asian" rate="4.0" image={TruckImg} alternative="truck 1"/>
            </div>
        );
    }
}

export default CustomerMain