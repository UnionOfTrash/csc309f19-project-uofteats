import React from 'react'


class ProfileImage extends React.Component {

    render() {
        return (
            <img src={this.props.image} alt={this.props.alt}/>
        )
    }
}

export default ProfileImage;