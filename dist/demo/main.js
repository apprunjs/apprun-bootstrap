import app from '/dist/_modules/apprun.js';
app.on('//', route => {
    const menus = document.querySelectorAll('.navbar-nav li');
    for (let i = 0; i < menus.length; ++i)
        menus[i].classList.remove('active');
    const item = document.querySelector(`[href='${route}']`);
    item && item.parentElement.classList.add('active');
});
const App = state => (app.createElement("div", { className: "container" },
    app.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
        app.createElement("a", { className: "navbar-brand", href: "#" }, "Admin Dashboard"),
        app.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            app.createElement("span", { className: "navbar-toggler-icon" })),
        app.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
            app.createElement("ul", { className: "navbar-nav mr-auto" },
                app.createElement("li", { className: "nav-item active" },
                    app.createElement("a", { className: "nav-link", href: "#Home" },
                        "Home",
                        app.createElement("span", { className: "sr-only" }, "(current)"))),
                app.createElement("li", { className: "nav-item" },
                    app.createElement("a", { className: "nav-link", href: "#About" }, "About")),
                app.createElement("li", { className: "nav-item" },
                    app.createElement("a", { className: "nav-link", href: "#Contact" }, "Contact"))),
            app.createElement("form", { className: "form-inline mt-2 mt-md-0" },
                app.createElement("div", { className: "input-group input-group-sm mr-sm-2" },
                    app.createElement("div", { className: "input-group-prepend" },
                        app.createElement("i", { className: "input-group-text fa fa-search" })),
                    app.createElement("input", { type: "text", className: "form-control", placeholder: "Search", "aria-label": "Search", "aria-describedby": "inputGroup-sizing-sm" }))))),
    app.createElement("div", { className: "container", id: "my-app" })));
app.render(document.getElementById('main'), app.createElement(App, null));
const pages = [
    ['#', './Home.js'],
    ['#Home', './Home.js'],
    ['#About', './About.js'],
    ['#Contact', './Contact.js']
];
pages.forEach(def => {
    let [evt, imp] = def;
    app.on(evt, (...p) => {
        import(imp).then(module => {
            const component = new module.default().mount('my-app');
            component.run('.', ...p);
        });
    });
});
//# sourceMappingURL=main.js.map