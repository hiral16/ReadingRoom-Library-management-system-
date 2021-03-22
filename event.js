$(document).ready(function () {
    var appointments = new Array();

    var appointment1 = {
    id: "id1",
    description: "",
    location: "",
    subject: "Book Club Meeting",
    calendar: "Abbey Road",
    start: new Date(2020, 09, 28, 16, 0, 0),
    end: new Date(2020, 09, 28, 18, 0, 0)
}

var appointment2 = {
    id: "id2",
    description: "",
    location: "",
    subject: "Book Signing of Trials Of Apollo",
    calendar: "Baker Street",
    start: new Date(2020, 09, 31, 12, 0, 0),
    end: new Date(2020, 09, 31, 15, 0, 0)
}

var appointment3 = {
    id: "id3",
    description: "",
    location: "",
    subject: "Scavenger Hunt",
    calendar: "Privet Drive",
    start: new Date(2020, 09, 27, 15, 0, 0),
    end: new Date(2020, 09, 27, 17, 0, 0)
}

var appointment4 = {
    id: "id4",
    description: "",
    location: "",
    subject: "Interview with J.K Rowling",
    calendar: "Abbey Road",
    start: new Date(2020, 09, 30, 17, 0, 0),
    end: new Date(2020, 09, 30, 19, 0, 0)
}

var appointment5 = {
    id: "id5",
    description: "",
    location: "",
    subject: "Scavenger Hunt",
    calendar: "Privet Drive",
    start: new Date(2020, 09, 25, 15, 0, 0),
    end: new Date(2020, 09, 25, 17, 0, 0)
}

var appointment6 = {
    id: "id6",
    description: "",
    location: "",
    subject: "Book Fair",
    calendar: "Baker Street",
    start: new Date(2020, 09, 26, 14, 0, 0),
    end: new Date(2020, 09, 26, 16, 0, 0)
}
appointments.push(appointment1);
appointments.push(appointment2);
appointments.push(appointment3);
appointments.push(appointment4);
appointments.push(appointment5);
appointments.push(appointment6);


// prepare the data
var source =
{
    dataType: "array",
    dataFields: [
        { name: 'id', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'subject', type: 'string' },
        { name: 'calendar', type: 'string' },
        { name: 'start', type: 'date' },
        { name: 'end', type: 'date' }
    ],
    id: 'id',
    localData: appointments
};
var adapter = new $.jqx.dataAdapter(source);
$("#scheduler").jqxScheduler({
    date: new $.jqx.date(2020, 09, 10),
    width: 850,
    height: 600,
    source: adapter,
    view: 'weekView',
    showLegend: true,
    ready: function () {
        $("#scheduler").jqxScheduler('ensureAppointmentVisible', 'id1');
    },
    resources:
    {
        colorScheme: "scheme03",
        dataField: "calendar",
        source:  new $.jqx.dataAdapter(source)
    },
    appointmentDataFields:
    {
        from: "start",
        to: "end",
        id: "id",
        description: "description",
        location: "place",
        subject: "subject",
        resourceId: "calendar"
    },
    views:
    [
        'dayView',
        'weekView',
        'monthView'
    ]
});
});
