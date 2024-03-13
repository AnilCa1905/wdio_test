
export default class Common {
    constructor(){
        this.$header = (header) => $(`//p[contains(text(),'${header}')]`);
    }
 
    async openUrl () {
        await browser.url(`https://webdriver.io/`);
        await browser.maximizeWindow();
    }
}
