import app from 'apprun';

const mergeClassName = (name, props) => {
  props = props || {};
  if (props.className) {
    name = `${name} ${props.className}`;
    delete props.className;
  }
  return name;
}

export const Row = (props, children) => <div className={mergeClassName('row', props)}>
  {children || ''}
</div>;


export const Column = (props, children) => <div className={mergeClassName('col', props)}>
  {children || ''}
</div>;

export const Card = (props, children) => {
  props = props || {};
  return <div className={mergeClassName('card', props)}>
    {props.header ? <div className="card-header">{props.header}</div> : ''}
    {children || ''}
    {props.body ? <div className="card-body">{props.body}</div> : ''}
    {props.footer ? <div className="card-footer">{props.footer}</div> : ''}
  </div>
}

export const Alert = (props, children) => <div className={mergeClassName('alert', props)} role="alert">
  {children || ''}
</div>;


export const Menus = ({ menus }) => <ul className="flex-lg-column flex-row navbar-nav w-100 justify-content-between">
  {menus.map(menu => menu.menus ?
    <li className="nav-item dropdown">
      <a className="nav-link pl-0 pr-0 dropdown-toggle" data-toggle="dropdown"
        href={menu.href} role="button" aria-haspopup="true" aria-expanded="false">
        <i className={`fa fa-${menu.icon} fa-fw`}></i>
        <span className="d-none d-lg-inline">{menu.text}</span>
      </a>
      <div className="dropdown-menu border-0">
        <Menus menus={menu.menus} />
      </div>
    </li> :
    <li className="nav-item">
      <a className="nav-link pl-0 text-nowrap" href={menu.href}>
        <i className={`fa fa-${menu.icon} fa-fw`}></i>
        <span className="d-none d-lg-inline">{menu.text}</span>
      </a>
    </li>
  )}
</ul>;

export const Sidebar = (props, children) => <aside className="col-lg-2 p-0">
  <nav className="navbar navbar-expand align-items-start navbar-light" >
    <div className="collapse navbar-collapse">
      {props.menus ? <Menus menus={props.menus} /> : ''}
    </div>
  </nav>
</aside>;


