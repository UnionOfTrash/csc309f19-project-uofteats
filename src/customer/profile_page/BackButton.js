import React from 'react'
import { Button } from 'antd';

class BackButton extends React.Component {

    render() {
        return (
            <div id='back-button'>
                <Button
                    href='/customer/main_page/customerMain'
                    size='small'
                >Back</Button>
            </div>
        )
    }
}

export default BackButton