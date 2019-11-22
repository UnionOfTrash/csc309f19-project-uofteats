import React from 'react'
import { Avatar } from 'antd';

class ProfileImage extends React.Component {

    render() {
        return (
            <div id="image-container">
                <Avatar
                    shape="circle"
                    size={200} icon="user"
                    src={this.props.imgUrl}
                    alt={this.props.alt}
                    style={{border: '3px solid darkblue'}}/>
            </div>
        )
    }
}

export default ProfileImage;