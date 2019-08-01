import React from 'react';
import { Icon } from 'antd-mobile';

export default () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',  flexDirection: 'column'}}
    >
      <Icon type="loading" size="lg" color="#000"/>
    </div>
  );
};
