/**
 * Routes:
 *   - ./src/routes/PrivateRoute.js
 */

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TabBar from '@/components/TabBar';
import styles from './index.css';

@inject('store')
@observer
class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.props.store.toggleKey(props.location.pathname);
  }
  componentWillUpdate(nextProps) {
    this.props.store.toggleKey(nextProps.location.pathname);
  }

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.children}>{this.props.children}</div>
        <div className={styles.tabbar}>
          <TabBar />
        </div>
      </div>
    );
  }
}

export default BasicLayout;
