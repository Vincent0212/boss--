/**
 * Created by li158 on 2018/12/5.
 */
import React, {Component} from 'react';
import {NavBar, InputItem,TextareaItem,TextareaItem} from 'antd-mobile';
import ProTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import HeaderSelector from '../header-selector';
class DashenInfo extends Component {
  static propTypes = {
    user : ProTypes.object.isRequired,
    update : ProTypes.func.isRequired
  }
  state = {
    header : '',
    post : '',
    info : '',
    type : 'dashen'
  }
  //在父组件定义更新方法
  setHeader = header =>{
    this.setState({
      header
    })
  }
  handleChange = (type, val)=>{
    this.setState ({
      [type] : val
    })
  }
  updateUserInfo = () =>{
    //手记用户天蝎的数据
    this.props.update(this.state);
  }sw
  render () {
    const {errMsg, redirectTo} = this.props.user;
    if (redirectTo === '/dashen'){
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <p className="err-msg">{errMsg}</p>
        <InputItem onClick={val=>{this.handleChange('post',val)}}>求职岗位 :</InputItem>
        <TextareaItem title="个人简介" rows ={3} onClick={this.handleChange}/>4
        <Botton> </Botton>
      </div>
    )
  }
}

export default DashenInfo;