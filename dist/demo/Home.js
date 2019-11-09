import app, { Component } from '/dist/_modules/apprun.js';
import { Row, Column, Card, Alert, Sidebar } from '../bootstrap.js';
import DataTable from './table.js';
import Chart from './chart.js';
import Calendar from './calendar.js';
import Map from './map.js';
const Dashboard = (_, children) => app.createElement("div", { className: "row h-100" }, children);
const Widgets = () => app.createElement("main", { className: "col" },
    app.createElement(CardList, null),
    app.createElement(Alerts, null),
    app.createElement(Row, null,
        app.createElement(Column, null,
            app.createElement(Chart, { id: "chart" })),
        app.createElement(Column, null,
            app.createElement(Map, { id: "map" }))),
    app.createElement(Row, { className: "my-4" }),
    app.createElement(DataTable, null),
    app.createElement(Row, { className: "my-4" }),
    app.createElement(Row, { className: "my-4" },
        app.createElement(Column, { className: "col-md-6" },
            app.createElement(Calendar, { id: "c1", name: "My Calendar" })),
        app.createElement(Column, { className: "col-md-6" },
            app.createElement(Calendar, { id: "c2", name: "Team Calendar" }))),
    app.createElement(Row, { className: "my-4" }),
    app.createElement(Row, { className: "my-4" }),
    app.createElement(Row, { className: "my-4" }),
    app.createElement(Row, { className: "my-4" }),
    app.createElement(Row, { className: "my-4" }));
const Alerts = () => app.createElement(Row, { className: "my-4" },
    app.createElement(Column, null,
        app.createElement(Alert, { className: "alert-primary" }, "Primary")),
    app.createElement(Column, null,
        app.createElement(Alert, { className: "alert-secondary" }, "Secondary")),
    app.createElement(Column, null,
        app.createElement(Alert, { className: "alert-success" }, "Success")),
    app.createElement(Column, null,
        app.createElement(Alert, { className: "alert-danger" }, "Danger")),
    app.createElement(Column, null,
        app.createElement(Alert, { className: "alert-warning" }, "Warning")),
    app.createElement(Column, null,
        app.createElement(Alert, { className: "alert-info" }, "Info")));
const CardList = () => app.createElement(Row, { className: "my-4" }, [1, 2, 3, 4, 5, 6].map(i => app.createElement("div", { className: "col-sm-4 col-lg-2" },
    app.createElement(Card, null,
        app.createElement("div", { className: "card-body text-center" },
            app.createElement("div", { className: "text-right text-green" },
                (Math.random() * 10).toFixed(1),
                " %"),
            app.createElement("div", { className: "h1 m-0" }, (Math.random() * 100).toFixed(0)),
            app.createElement("div", { className: "text-muted" },
                "KPI #",
                i))))));
const menus = [
    { icon: 'home', text: 'Home', href: '#' },
    { icon: 'star', text: 'Events', href: '#' },
    { icon: 'book', text: 'Teams', href: '#' },
    { icon: 'heart', text: 'Favorites', href: '#' },
    {
        icon: 'list', text: 'More', href: '#', menus: [
            { icon: 'check', text: 'Admin', href: '#' },
        ]
    }
];
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = 'Dashboard';
        this.view = (state) => app.createElement(Dashboard, null,
            app.createElement(Sidebar, { menus: menus }),
            app.createElement(Widgets, null));
        this.update = {
            '#Home': state => state,
        };
    }
}
//# sourceMappingURL=Home.js.map