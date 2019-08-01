import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import router from 'umi/router';
import './style.css';

@inject('store')
@observer
class TabBarModule extends Component {
  selectTabBar = key => {
    this.props.store.toggleKey(`/${key}`);
    router.push(`/${key}`);
  };

  render() {
    const { hidden, getPathTwo, cartNum } = this.props.store;
    return (
      <TabBar
        unselectedTintColor="#949494"
        prerenderingSiblingsNumber={0}
        tintColor="#33A3F4"
        barTintColor="white"
        noRenderContent={true}
        hidden={hidden}
      >
        <TabBar.Item
          title="首页"
          key="Home"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={getPathTwo === 'home'}
          badge={1}
          onPress={() => this.selectTabBar('home')}
          data-seed="logId"
        ></TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          title="分类"
          key="classify"
          badge={'new'}
          selected={getPathTwo === 'classify'}
          onPress={() => this.selectTabBar('classify')}
          data-seed="logId1"
        ></TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          title="分销中心"
          key="distributor"
          dot
          selected={getPathTwo === 'distributor'}
          onPress={() => this.selectTabBar('distributor')}
        ></TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{
            uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
          }}
          title="购物车"
          key="shopping_cart"
          selected={getPathTwo === 'shopping_cart'}
          onPress={() => this.selectTabBar('shopping_cart')}
          badge={cartNum}
        ></TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{
            uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
          }}
          title="个人中心"
          key="personal_center"
          selected={getPathTwo === 'personal_center'}
          onPress={() => this.selectTabBar('personal_center')}
        ></TabBar.Item>
      </TabBar>
    );
  }
}

export default TabBarModule;
