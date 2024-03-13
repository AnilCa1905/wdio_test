import Common from './common.js';

class HomePage extends Common {
 constructor(){
    super();
   this.$buttons = (buttons) => $(`//a[contains(text(),'${buttons}')]`);
 }
}

export default new HomePage();
