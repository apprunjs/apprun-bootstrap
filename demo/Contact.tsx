import app, {Component} from 'apprun';

export default class ContactComponent extends Component {
  state = 'Contact';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
    </div>
  }

  update = {
    '#Contact': state => state,
  }
}

