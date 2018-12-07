import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';
import {NavBar, Icon} from 'antd-mobile';
import PropTypes from 'prop-types';

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from '../../containers/laoban';
import Dashen from '../../containers/dashen';
import Message from '../message';
import Personal from '../personal';
import Footer from '../footer';

import './index.less';
class Main extends Component {
  state = {
    user : PropTypes.object.isRequired,
    getUserInfo: PropTypes.func.isRequired
  }
  navList = [
    {path: '/laoban', title: '大神列表', icon: 'laoban', text: '大神'},
    {path: '/dashen', title: '老板列表', icon: 'dashen', text: '老板'},
    {path: '/message', title: '消息列表', icon: 'message', text: '消息'},
    {path: '/personal', title: '个人中心', icon: 'personal', text: '个人'},
  ]
  
  render () {
    //判断本地是否有cookie 有过没有直接返回登陆页面
      const userid = Cookies.get('userid');
      if (!userid){
        return <Redirect to="login"/>
      }
      //如果有cookie redux中没有状态  将数据请求回来
    if (!this.props.user._id){
        this.props.updateUserInfo();
        //如果状态未更新 不返回数据
      return <Icon className="loading" type="loding" size="lg"/>
    }
    //获取当前路径部分数据
    const {pathname} = this.props.location;
    //如果用户登陆/ 返回老板大神页面
    if (pathname === '/'){
      return <Redirect to={this.props.user.redirectTo}/>
    }
    //找到与当前路径所匹配的对象
    const currNav = this.navList.find(item=> item.path === pathname)
    return (
      <div>
        {currNav ? <NavBar className="nav-bar">{currNav.title}</NavBar> : null}
        <div className="main-content">
          <Route path="/laobaninfo" component={LaobanInfo}/>
          <Route path="/dasheninfo" component={DashenInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
        </div>
        {currNav ? <Footer navList={this.navList} type= {this.props.user.type}/> : null}
      </div>
    )
  }
}

export default Main;