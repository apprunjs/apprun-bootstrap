import app, { Component } from 'apprun';
import data from './table-data';
declare let $;

// checkout available options: https://datatables.net/reference/option/
const DataTable = options => table =>
  !$.fn.dataTable.isDataTable(table) && $(table).DataTable(options);

app.on('$', ({ key, props }) => {
  key === '$data-table' && (props.ref = DataTable(props[key]));
});

const columns = [
  { title: 'Name', data: 'name' },
  { title: 'Position', data: 'position' },
  { title: 'Office', data: 'office' },
  { title: 'Age', data: 'age' },
  { title: 'Start date', data: 'date' },
  { title: 'Salary', data: 'salary' }
];

export default class extends Component {
  state = { data };

  view = ({ data }) => (
    <table
      class="table w-100 table-striped table-bordered"
      $data-table={{
        data,
        columns,
        pageLength: 10
      }}
    />
  );
}
