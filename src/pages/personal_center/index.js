/**
 * tabber: true
 */
import React, { Component } from 'react';
import { CheckLoginTab } from '@/utils/utils';
import styles from './personal_center.css';

@CheckLoginTab
class PersonalCenter extends Component {
  render() {
    return <div className={styles.normal}>个人中心</div>;
  }
}

export default PersonalCenter;
