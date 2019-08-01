import { Component } from 'react';
import axios from 'axios';
import AppState from '@/Mobx/AppState';
import { inject, observer } from 'mobx-react';
import router from 'umi/router';

let baseURL = 'http://localhost:8000';
// let baseURL = 'http://192.168.0.187:808';
// if (window.config) {
//   baseURL = window.config.baseURL;
// }
axios.defaults.baseURL = baseURL;

// axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
  if (localStorage.userInfo) {
    // if (config.method === 'get') {
    //
    // } else {
    //   if(config.data) {
    //     const data = eval(config.data);
    //     data.token = token;
    //     config.data = JSON.stringify(data);
    //   }
    // }
  }
  return config;
});

axios.interceptors.response.use(res => {
  if (res.data.data === '您还未登录，请先登录！') {
    localStorage.removeItem('userInfo');
    AppState.logout();
    return router.push('/login');
  } else {
    return res;
  }
});
function stringifyURL(params, postFlag) {
  var paramUrl = '';
  for (var key in params) {
    if (!postFlag && paramUrl === '') {
      paramUrl += '?' + key + '=' + encodeURIComponent(params[key]);
    } else {
      paramUrl += '&' + key + '=' + encodeURIComponent(params[key]);
    }
  }
  //console.log(paramUrl);
  return paramUrl;
}

export function post(url, data, isJson = false) {
  return new Promise((resolve, reject) => {
    data = isJson ? data : stringifyURL(data, true);
    let header = isJson
      ? { 'Content-type': 'application/json' }
      : { 'Content-Type': 'application/x-www-form-urlencoded' };
    axios
      .post(url, data, {
        headers: header,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function get(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: data }, {})
      .then(res => {
        if (res !== undefined) {
          resolve(res.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function toThousands(num) {
  let arr = (num || 0).toString().split('.');
  let result = '';
  let prefix = '';
  if (arr[0].indexOf('-') === 0) {
    arr[0] = arr[0].slice(1);
    prefix = '-';
  }
  while (arr[0].length > 3) {
    result = ',' + arr[0].slice(-3) + result;
    arr[0] = arr[0].slice(0, arr[0].length - 3);
  }
  if (arr[0]) {
    result = arr[0] + result;
  }
  return prefix + (arr.length === 1 ? result : [result, arr[1]].join('.'));
}
export let log = console.log.bind(console);

export const getUserInfo = () => {
  if (localStorage.userInfo) {
    return JSON.parse(localStorage.userInfo);
  } else {
    AppState.logout();
    return router.push('/login');
  }
};

export function CheckLoginTab(Cmp) {
  @inject('store')
  @observer
  class HOC extends Component {
    constructor(props) {
      super(props);
      if (JSON.parse(localStorage.getItem('userInfo')) && localStorage.getItem('role')) {
        this.props.store.login();
      }
      // if (!this.props.store.isLogin) {
      //   return router.replace('/login');
      // }
      if (props.route.tabber) {
        props.store.hiddenTab();
      } else {
        props.store.showTab();
      }
    }
    render() {
      return <Cmp {...this.props} />;
    }
  }
  return HOC;
}
