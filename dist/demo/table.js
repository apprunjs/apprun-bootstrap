import app, { Component } from '/dist/_modules/apprun.js';
import data from './table-data.js';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            data
        };
        this.view = ({ data }) => app.createElement("table", { id: "table-example", className: "table table-striped table-bordered" },
            app.createElement("thead", null,
                app.createElement("tr", null,
                    app.createElement("th", null, "Name"),
                    app.createElement("th", null, "Position"),
                    app.createElement("th", null, "Office"),
                    app.createElement("th", null, "Age"),
                    app.createElement("th", null, "Start date"),
                    app.createElement("th", null, "Salary"))),
            app.createElement("tbody", null, data.map(p => app.createElement("tr", null,
                app.createElement("td", null, p.name),
                app.createElement("td", null, p.position),
                app.createElement("td", null, p.office),
                app.createElement("td", null, p.age),
                app.createElement("td", null, p.date),
                app.createElement("td", null, p.salary)))));
        this.update = {};
        this.rendered = state => {
            $('#table-example').DataTable();
        };
    }
}
//# sourceMappingURL=table.js.map