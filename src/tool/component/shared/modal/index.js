import React, { Component } from "react";
import { Modal } from 'antd';

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  handleCancel = () =>{
    this.forceUpdate();
  };
  render() {
    const flag = this.props.flag;
    return (
      <Modal
        title={this.props.title}
        visible={flag}
        // onCancel={this.handleCancel}
        destroyOnClose={true}
        footer={null}
        centered={true}
        closable={false}
      >
        {this.props.handleContent}
      </Modal>
    );
  }
}

export default CustomModal;