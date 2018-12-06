/**
 * Created by li158 on 2018/12/5.
 */
import {connet} from 'react-redux';
import Dashen from '../components/dashen-info';
import {update} from '../redux/actions';

export default connet(
  state => ({user : state.user}),
  {update}
)(DashenInfo);