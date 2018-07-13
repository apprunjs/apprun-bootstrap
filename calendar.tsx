import app, { Component } from 'apprun';

declare var $;

const yyyymm = new Date().toISOString().substr(0, 7);

export default class extends Component {
  state = {
    events: [
      {
        title: 'All Day Event',
        start: `${yyyymm}-01`
      },
      {
        title: 'Long Event',
        start: `${yyyymm}-07`,
        end: `${yyyymm}-10`
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: `${yyyymm}-09 16:00:00`
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: `${yyyymm}-16 16:00:00`
      },
      {
        title: 'Conference',
        start: `${yyyymm}-11`,
        end: `${yyyymm}-13`
      },
      {
        title: 'Meeting',
        start: `${yyyymm}-12 10:30:00`,
        end: `${yyyymm}-12 12:30:00`
      },
      {
        title: 'Lunch',
        start: `${yyyymm}-12 12:00:00`
      },
      {
        title: 'Meeting',
        start: `${yyyymm}-12 14:30:00`
      },
      {
        title: 'Happy Hour',
        start: `${yyyymm}-12 17:30:00`
      },
      {
        title: 'Dinner',
        start: `${yyyymm}-12 20:00:00`
      },
      {
        title: 'Birthday Party',
        start: `${yyyymm}-13 07:00:00`
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: `${yyyymm}-28`
      }
    ]
  };

  view = (state) => <div id="calendar"></div>

  update = {};

  rendered = state => {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      defaultDate: `${yyyymm}-12`,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: state.events
    })
  }
}