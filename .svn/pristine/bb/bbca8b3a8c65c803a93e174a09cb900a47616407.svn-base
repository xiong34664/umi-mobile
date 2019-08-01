/**
 * tabber: false
 */
import React, { Component } from 'react';
import { NavBar, Icon, Stepper } from 'antd-mobile';
import { CheckLoginTab } from '@/utils/utils';

import styles from './details.css';
import router from 'umi/router';

@CheckLoginTab
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
    };
  }

  onChange = val => {
    this.setState({ val });
    this.props.store.addNum();
  };

  render() {
    return (
      <div className={styles.normal}>
        <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}>
          NavBar
        </NavBar>
        <Stepper
          style={{ width: '100%', minWidth: '100px' }}
          showNumber
          max={10}
          min={1}
          value={this.state.val}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Details;
