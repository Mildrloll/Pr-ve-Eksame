function text() {
    $(document).ready(function () {
        $.getJSON("sensordata.json", function (data) {
            var test = '';
            $.each(data, function (key, value) {
                test += '<tr>';
                test += '<td>' + value.id + '</td>';
                test += '</tr>'
            });
            $('#table').append(test);
        });
    });
}
