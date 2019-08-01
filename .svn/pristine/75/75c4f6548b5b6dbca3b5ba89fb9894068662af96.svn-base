import { observable, action, computed } from 'mobx';
class appState {
  @observable selectedKey = '';
  @observable hidden = true;
  @observable isLogin = false;
  @observable cartNum = 0;
  @action toggleKey = key => (this.selectedKey = key);
  @action login = () => (this.isLogin = true);
  @action logout = () => (this.isLogin = false);
  @action showTab = () => (this.hidden = true);
  @action hiddenTab = () => (this.hidden = false);
  @action addNum = () => (this.cartNum = this.cartNum + 1);
  @computed get getPathTwo() {
    return this.selectedKey.split('/')[1];
  }
  // @computed get getPathThree () { return this.selectedKey.split('/')[3] }
}

export default new appState();
