import Vue from 'vue'
import App from './App2.vue'

vueApp = new Vue({
  el: '#app',
  render: h => h(App)
})

store = {
  debug: true,
  state: {
    vcard_id: '',
    code: '',
    request_id: ''
  },
  setState (name, value) {
    if (this.debug) console.log('setState ', name, 'value', value);
    this.state[name] = value;
  },
  clearState (name) {
    if (this.debug) console.log('clearState ', name);
    this.state[name] = '';
  }
}