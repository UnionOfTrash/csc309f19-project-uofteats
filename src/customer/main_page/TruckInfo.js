import React from "react";

/* The Header Component */
class TruckInfo extends React.Component {
    render() {
        const { name, location, type, rate, image, alternative, link} = this.props;
        return (
            <div className="truck-info">
                <div className="truck-img">
                    <a href={link}>
                        <img src={image} alt={alternative}/>
                    </a>
                </div>
                <div className="truck-description">
                    <p>{name}</p>
                    <p>{location}</p>
                    <p>{type}</p>
                    <p>{rate}</p>
                </div>
            </div>
        );
    }
}

export default TruckInfo;