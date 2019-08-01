import 'lib-flexible';
import 'antd-mobile/dist/antd-mobile.less';
import AppState from '@/Mobx/AppState';
import { Provider } from 'mobx-react';

export default props => {
  // if (localStorage.userInfo) AppState.login();
  // if (!AppState.isLogin) {
  //   props.history.push('/login');
  //   return <div />;
  // } else {
  if (props.location.pathname === '/') {
    props.history.push('/home');
    return <div />;
  }
  // }
  return <Provider store={AppState}>{props.children}</Provider>;
};
