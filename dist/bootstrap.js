import app from '/dist/_modules/apprun.js';
const mergeClassName = (name, props) => {
    props = props || {};
    if (props.className) {
        name = `${name} ${props.className}`;
        delete props.className;
    }
    return name;
};
export const Row = (props, children) => app.createElement("div", { className: mergeClassName('row', props) }, children || '');
export const Column = (props, children) => app.createElement("div", { className: mergeClassName('col', props) }, children || '');
export const Card = (props, children) => {
    props = props || {};
    return app.createElement("div", { className: mergeClassName('card', props) },
        props.header ? app.createElement("div", { className: "card-header" }, props.header) : '',
        children || '',
        props.body ? app.createElement("div", { className: "card-body" }, props.body) : '',
        props.footer ? app.createElement("div", { className: "card-footer" }, props.footer) : '');
};
export const Alert = (props, children) => app.createElement("div", { className: mergeClassName('alert', props), role: "alert" }, children || '');
export const Menus = ({ menus }) => app.createElement("ul", { className: "flex-lg-column flex-row navbar-nav w-100 justify-content-between" }, menus.map(menu => menu.menus ?
    app.createElement("li", { className: "nav-item dropdown" },
        app.createElement("a", { className: "nav-link pl-0 pr-0 dropdown-toggle", "data-toggle": "dropdown", href: menu.href, role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
            app.createElement("i", { className: `fa fa-${menu.icon} fa-fw` }),
            app.createElement("span", { className: "d-none d-lg-inline" }, menu.text)),
        app.createElement("div", { className: "dropdown-menu border-0" },
            app.createElement(Menus, { menus: menu.menus }))) :
    app.createElement("li", { className: "nav-item" },
        app.createElement("a", { className: "nav-link pl-0 text-nowrap", href: menu.href },
            app.createElement("i", { className: `fa fa-${menu.icon} fa-fw` }),
            app.createElement("span", { className: "d-none d-lg-inline" }, menu.text)))));
export const Sidebar = (props, children) => app.createElement("aside", { className: "col-lg-2 p-0" },
    app.createElement("nav", { className: "navbar navbar-expand align-items-start navbar-light" },
        app.createElement("div", { className: "collapse navbar-collapse" }, props.menus ? app.createElement(Menus, { menus: props.menus }) : '')));
//# sourceMappingURL=bootstrap.js.map