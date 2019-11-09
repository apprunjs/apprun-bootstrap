import app, { Component } from 'apprun';

export default class AboutComponent extends Component {
  state = 'About';

  view = state => (
    <div>
      <h1>{state}</h1>
    </div>
  );
}
