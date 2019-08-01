/**
 * tabber: true
 */
import React, { Component } from 'react';
import { CheckLoginTab } from '@/utils/utils';
import styles from './index.css';

@CheckLoginTab
class Classify extends Component {
  render() {
    return <div className={styles.normal}>分类</div>;
  }
}

export default Classify;
