import app, { Component } from '/dist/_modules/apprun.js';
const yyyymm = new Date().toISOString().substr(0, 7);
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            id: '',
            name: '',
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
        this.view = (state) => app.createElement("div", { style: { 'font-size': '0.8em' } },
            app.createElement("h5", null, state.name),
            app.createElement("div", { id: `calendar-${state.id}` }));
        this.update = {};
        this.mounted = ({ id, name }) => {
            this.setState({ ...this.state, id, name });
        };
        this.rendered = state => {
            $(`#calendar-${state.id}`).fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,basicWeek,basicDay',
                    title: state.name
                },
                defaultDate: `${yyyymm}-12`,
                navLinks: true,
                editable: true,
                eventLimit: true,
                events: state.events
            });
        };
    }
}
//# sourceMappingURL=calendar.js.map