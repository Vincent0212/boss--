/**
 * Created by li158 on 2018/12/7.
 */
//对话聊天路由
import React, {Component} from 'react';
import {NavBar, List, InputItem, Icon} from 'antd-mobile';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import './index.less';
const Item = List.Item;

export default class Chat extends Component {
    static propTypes = {
      sendMessage : PropTypes.func.isRequired
    }
    state = {
      message : ''
    }
  goBack = () =>{
      this.props.history.goBack();
  }
  sendMessage = () =>{
      //获取发送用户id
    const from = Cookies.get('userid')
    //获取接收用户id url地址
    const to = this.props.match.params.id;
    //获取接收内容
    const {message} = this.state;
    //发送消息
    this.props.sendMessage({message, from, to})
  }
  handleChange = val =>{
      this.setState ({message : val})
  }
  render () {
    return (
      <div id='chat-page'>
        <NavBar  icon={<Icon type="left" onClick={this.goBack}/>}>aa</NavBar>
        <List>
          <Item
            thumb={require('../../assets/images/头像1.png')}
          >
            你好
          </Item>
          <Item
            thumb={require('../../assets/images/头像1.png')}
          >
            你好2
          </Item>
          <Item
            className='chat-me'
            extra='我'
          >
            很好
          </Item>
          <Item
            className='chat-me'
            extra='我'
          >
            很好2
          </Item>
        </List>

        <div className='am-tab-bar'>
          <InputItem
            placeholder="请输入"
            onChange={this.handleChange}
            extra={
              <span onClick={this.sendMessage}>发送</span>
            }
          />
        </div>
      </div>
    )
  }
}

