/**
 * tabber: true
 */
import React, { Component } from 'react';
import { CheckLoginTab } from '@/utils/utils';
import styles from './home.css';
import router from 'umi/router';

@CheckLoginTab
class Home extends Component {
  render() {
    return (
      <div className={styles.normal}>
        <span onClick={() => router.push('/detail')}>详情</span>
      </div>
    );
  }
}

export default Home;
