import React, {Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types';

class Laoban extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    getUserList: PropTypes.func.isRequired
  }

  componentDidMount () {
    //防止二次请求相同的数据
    if (!this.props.userList.length) {
      this.props.getUserList('dashen');
    }
  }

  render () {
    //过滤掉没有头像等数据的对象
    const userList = this.props.userList.filter(item => item.header);

    return (
      <WingBlank>
        <WhiteSpace size="lg" />
        {
          userList.map((item, index) => {
            return (
              <div key={index}>
                <Card >
                  <Card.Header
                    thumb={require(`../../assets/images/头像${+item.header + 1}.png`)}
                    extra={<span>{item.username}</span>}
                  />
                  <Card.Body>
                    <div>职位：{item.post}</div>
                    <div>描述：{item.info}</div>
                  </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
              </div>
            )
          })
        }
      </WingBlank>
    )
  }
}

export default Laoban;