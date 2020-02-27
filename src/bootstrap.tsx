import app from 'apprun';

const mergeClassName = (name, props): string => {
  if (props?.class) {
    name = `${name} ${props.class}`;
    delete props.class;
  } else if (props?.className) {
    name = `${name} ${props.className}`;
    delete props.className;
  }
  return name;
};
export const Row = (props, children) => (
  <div class={mergeClassName('row', props)}>{children || ''}</div>
);

export const Column = (props, children) => (
  <div class={mergeClassName('col', props)}>{children || ''}</div>
);

export const Card = (props, children) => {
  props = props || {};
  return (
    <div class={mergeClassName('card', props)}>
      {props.header ? <div class="card-header">{props.header}</div> : ''}
      {children || ''}
      {props.body ? <div class="card-body">{props.body}</div> : ''}
      {props.footer ? <div class="card-footer">{props.footer}</div> : ''}
    </div>
  );
};

export const Alert = (props, children) => (
  <div class={mergeClassName('alert', props)} role="alert">
    {children || ''}
  </div>
);

export const Menus = ({ menus }) => (
  <ul class="flex-lg-column flex-row navbar-nav w-100 justify-content-between">
    {menus.map(menu =>
      menu.menus ? (
        <li class="nav-item dropdown">
          <a
            class="nav-link pl-0 pr-0 dropdown-toggle"
            data-toggle="dropdown"
            href={menu.href}
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
            <i class={`fa fa-${menu.icon} fa-fw`}></i>
            <span class="d-none d-lg-inline">{menu.text}</span>
          </a>
          <div class="dropdown-menu border-0">
            <Menus menus={menu.menus} />
          </div>
        </li>
      ) : (
        <li class="nav-item">
          <a class="nav-link pl-0 text-nowrap" href={menu.href}>
            <i class={`fa fa-${menu.icon} fa-fw`}></i>
            <span class="d-none d-lg-inline">{menu.text}</span>
          </a>
        </li>
      )
    )}
  </ul>
);

export const Sidebar = props => (
  <aside class="col-lg-2 p-0">
    <nav class="navbar navbar-expand align-items-start navbar-light">
      <div class="collapse navbar-collapse">
        {props.menus ? <Menus menus={props.menus} /> : ''}
      </div>
    </nav>
  </aside>
);
