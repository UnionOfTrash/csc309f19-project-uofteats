import React from 'react'
import { Modal, Button } from 'antd';


class HistoryButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const historyComponent = this.props.history.map((item) => {
            return (<p>{item.date}: {item.order}</p>)
        });
        return (
            <div id='history-button'>
                <Button onClick={this.showModal} size='small'>
                    Show History
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {historyComponent}
                </Modal>
            </div>
        )
    }
}

export default HistoryButton