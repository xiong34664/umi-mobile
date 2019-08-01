import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { getList } from '@/server';
import styles from './index.css';

@inject('store')
@observer
class App extends Component {
  componentDidMount() {
    getList()
      .then(result => {
        console.log(result);
      })
      .catch(err => {});
  }
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            To get started, edit <code>src/pages/index.js</code> and save to reload.
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
