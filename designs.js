function makeGrid() {
    var canvas, cell, Height, Width, rows, color;

    canvas = $('#pixelCanvas');
    Height = $('#inputHeight').val();
    Width = $('#inputWidth').val();

    canvas.children().remove()

    for (i = 1; i <= Height; i++) {
        canvas.append('<tr></tr>');
    }

    rows = $('tr');

    for (j = 1; j <= Width; j++) {
        rows.append('<td></td>');
    }

    cell = canvas.find('td');
    cell.on("click", function() {
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });

}
var submit;

submit = $('input[type="submit"]');

submit.click(function(event) {
    event.preventDefault();
    makeGrid();
});