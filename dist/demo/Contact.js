import app, { Component } from '/dist/_modules/apprun.js';
export default class ContactComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = 'Contact';
        this.view = state => (app.createElement("div", null,
            app.createElement("h1", null, state)));
    }
}
//# sourceMappingURL=Contact.js.map