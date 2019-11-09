import app, { Component } from '/dist/_modules/apprun.js';
export default class AboutComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = 'About';
        this.view = state => (app.createElement("div", null,
            app.createElement("h1", null, state)));
    }
}
//# sourceMappingURL=About.js.map