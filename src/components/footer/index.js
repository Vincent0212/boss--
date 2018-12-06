
import React, {Component} from 'react';
import {TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './index.less';
const Item = TabBar.Item;

class Footer extends Component {
  static propTypes = {
    navList :PropTypes.array.isRequired
  }
  redirectTo = path =>{
    this.props.history.pash(path)
  }
  render () {
    //通过redux获取boss
 const type = 'laoban';
 const filter = type === 'laoban' ? 'dashen' : 'laoban';
const currNavList = this.props.navList.filter(item=>filter === item.path ?false:true)

    return (
      <TabBar>
        {
          currNavList.map((item,index)=>{
            key= {index}
            title= {item.text}
            icon= {<img className="foot-item" src={require(`./images/${item.icon}.png`)} alt={item.text}/>}
              onPress= {this.redirectTo.bind(null,item.path)}
            onPress= {this.props.loction.pathname === item.path}
            selectedIcon={<img className="foot-item" src={require(`./images/${item.icon}.png`)} alt={item.text}/>}

          })
        }
      </TabBar>
    )
  }
}

export default ;