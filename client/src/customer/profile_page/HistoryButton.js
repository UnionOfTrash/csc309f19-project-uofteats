import React from 'react'
import { Modal, Button } from 'antd';


class HistoryButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [],
            visible: false,
        };
        this.loadData = this.loadData.bind(this);
    }

    showModal = () => {
        this.loadData();
    };

    handleOk = e => {
        const history = this.state.history;
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        const history = this.state.history;
        this.setState({
            visible: false,
        });
    };

    async loadData() {
        const visible = true;
        const { customerId } = this.props;
        const data = await fetch(`/api/orders/${customerId}`);
        let history;
        if (!data) {
            history = [];
            this.setState({ history, visible });
            return;
        }
        history = await data.json();
        this.setState({ history, visible });
    }

    render() {
        console.log(this.state.history[0]);
        const historyComponent = this.state.history.map((item) => {
            return (
                <p key={item._id}>
                    {`Time: ${item.pickDate} ${item.pickTime}\n
                      Food: ${item.food}`}
                </p>
            )
        });
        return (
            <div id='history-button'>
                <Button onClick={this.showModal} size='small'>
                    Show History
                </Button>
                <Modal
                    title="Order History"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {historyComponent}
                </Modal>
            </div>
        );
    }
}

export default HistoryButton