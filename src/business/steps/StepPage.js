import React, { Component } from "react";
import { Steps, Popover, Button, Form } from "antd";
import styles from "./style.module.less";
import StepFirst from "./StepFirst";

const FirstForm = Form.create()(StepFirst);
const Step = Steps.Step;

class StepPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  };

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  };

  back = () => {
    const current = 0;
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    // const customDot = (dot, { status, index }) => (
    //     <Popover content={<span>step {index} status: {status}</span>}>
    //         {dot}
    //     </Popover>
    // );

    return (
      <div className={styles.bg}>
        <div className={styles.steps}>
          <Steps current={current}>
            <Step title="填写信息" />
            <Step title="确认信息" />
            <Step title="完成" />
          </Steps>
        </div>
        {/*<div>*/}
        {/*<Steps current={1} progressDot={customDot}>*/}
        {/*<Step title="Finished" description="You can hover on the dot." />*/}
        {/*<Step title="In Progress" description="You can hover on the dot." />*/}
        {/*<Step title="Waiting" description="You can hover on the dot." />*/}
        {/*<Step title="Waiting" description="You can hover on the dot." />*/}
        {/*</Steps>*/}
        {/*</div>*/}
        <div>
          {current === 0 && <FirstForm />}
          {current === 1 && <FirstForm />}
          {current === 2 && <FirstForm />}
        </div>
        <div className={styles.actions}>
          {current === 0 && (
            <Button type="primary" onClick={this.next}>
              下一步
            </Button>
          )}
          {current === 1 && (
            <Button onClick={this.prev} className={styles.prev}>
              上一步
            </Button>
          )}
          {current === 1 && (
            <Button type="primary" onClick={this.next}>
              提交
            </Button>
          )}
          {current === 2 && (
            <Button type="primary" onClick={this.back}>
              完成
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default StepPage;
