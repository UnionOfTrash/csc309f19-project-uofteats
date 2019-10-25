import React from 'react';
import './CustomerMain.css'
import Header from "../Header/Header";
import SearchTruck from "./SearchTruck";
import TruckInfo from "./TruckInfo"

import TruckImg from "../images/truck1.png"

class Track {
    constructor(name, location, type, rate, image, alternative, link){
        this.name = name;
        this.location = location;
        this.type = type;
        this.rate = rate;
        this.image = image;
        this.alternative = alternative;
        this.link = link
    }
}
let track1 = new Track("track 1",
    "10 st George street",
    "Asian",
    4.0,
    TruckImg,
    "truck 1",
    "../food_page/FoodPage");

let track2 = new Track("track 1",
    "10 st George street",
    "Asian",
    4.0,
    TruckImg,
    "truck 1",
    "../food_page/FoodPage");

let testTracks = [track1, track2, track2, track2, track2, track1, track2, track2, track2, track2];


class CustomerMain extends React.Component {

    state = {
        tracks: testTracks
    };

    render() {
        return (
            <div>
                <Header title="UofT Eats" username="David Liu" />
                <SearchTruck placeholder="truck name"/>

                <div>
                    { this.state.tracks.map((track) => {
                        return (
                             <TruckInfo name = {track.name}
                                       location = {track.location}
                                       type = {track.type}
                                       rate = {track.rate}
                                       image = {track.image}
                                       alternative = {track.alternative}
                                       link = {track.link}
                            />
                        )
                    })  }
                </div>
            </div>
        );
    }
}

export default CustomerMain
export {testTracks}