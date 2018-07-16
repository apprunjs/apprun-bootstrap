import app, { Component } from 'apprun';
import { Row, Column, Card, Alert, Sidebar } from './ui';
import DataTable from './table';
import Chart from './chart';
import Calendar from './calendar';
import Map from './map';

const Dashboard = (_, children) => <div className="row h-100">
  {children}
</div>

const Widgets = () => <main className="col">
  <CardList />
  <Alerts />
  <Row>
    <Column><Chart id="chart"/></Column>
    <Column><Map id="map"/></Column>
  </Row>
  <Row className="my-4" />
  <DataTable />
  <Row className="my-4" />
  <Row className="my-4">
    <Column className="col-md-6"><Calendar id="c1" name="My Calendar" /></Column>
    <Column className="col-md-6"><Calendar id="c2" name="Team Calendar" /></Column>
  </Row>
  <Row className="my-4" />
  <Row className="my-4" />
  <Row className="my-4" />
  <Row className="my-4" />
  <Row className="my-4" />
</main>

const Alerts = () => <Row className="my-4">
  <Column>
    <Alert className="alert-primary">Primary</Alert>
  </Column>
  <Column>
    <Alert className="alert-secondary">Secondary</Alert>
  </Column>
  <Column>
    <Alert className="alert-success">Success</Alert>
  </Column>
  <Column>
    <Alert className="alert-danger">Danger</Alert>
  </Column>
  <Column>
    <Alert className="alert-warning">Warning</Alert>
  </Column>
  <Column>
    <Alert className="alert-info">Info</Alert>
  </Column>
</Row>


const CardList = () => <Row className="my-4">
  {[1, 2, 3, 4, 5, 6].map(i => <div className="col-sm-4 col-lg-2">
    <Card>
      <div className="card-body text-center">
        <div className="text-right text-green">
          {(Math.random() * 10).toFixed(1)} %
      </div>
        <div className="h1 m-0">{(Math.random() * 100).toFixed(0)}</div>
        <div className="text-muted">KPI #{i}</div>
      </div>
    </Card>
  </div>)}
</Row>;


const menus = [
  { icon: 'home', text: 'Home', href: '#' },
  { icon: 'star', text: 'Events', href: '#' },
  { icon: 'book', text: 'Teams', href: '#' },
  { icon: 'heart', text: 'Favorites', href: '#' },
  {
    icon: 'list', text: 'More', href: '#', menus:
      [
        { icon: 'check', text: 'Admin', href: '#' },
      ]
  }
];

export default class extends Component {

  state = 'Dashboard';

  view = (state) => <Dashboard>
    <Sidebar menus={menus} />
    <Widgets></Widgets>
  </Dashboard>

  update = {
    '#Home': state => state,
  }
}

