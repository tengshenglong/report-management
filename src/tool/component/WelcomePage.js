import React, { Component } from "react";
// import  MUtil from '../common/util/mm';
// const _mm=new MUtil();

class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // _mm.BrowerHeadTitle();
    // //判断登陆状态
    // if(_mm.loginStatus()==false){
    //   return;
    // }
  }

  render() {
    return (
      <div>
        <img src={require("../../asset/welcome.png")} alt="" />
      </div>
    );
  }
}
export default WelcomePage;
