/**
 * Created by li158 on 2018/12/7.
 */
import {connect} from 'react-redux';
import Personal from '../components/personal';
import {resetUserInfo, resetUserList} from '../redux/actions';

export default connect (
  state => ({user : state.user}),
  {resetUserInfo, resetUserList}
)(Personal);