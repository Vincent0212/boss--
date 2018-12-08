/**
 * Created by li158 on 2018/12/7.
 */
import {connect} from 'react-redux';

import Message from '../components/message';
import {} from '../redux/actions';

export default connect (
  state => ({chatMessages : state.chatMessages}),
  {}
)(Message);