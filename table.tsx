import app, { Component } from 'apprun';
import data from './table-data';
declare var $;

export default class extends Component {

  state = {
    data
  };

  view = ({ data }) => <table id="table-example" className="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start date</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
      {data.map(p => <tr>
        <td>{p.name}</td>
        <td>{p.position}</td>
        <td>{p.office}</td>
        <td>{p.age}</td>
        <td>{p.date}</td>
        <td>{p.salary}</td>
      </tr>)}
    </tbody>
  </table>;

  update = {};

  rendered = state => {
    $('#table-example').DataTable();
  }
}
