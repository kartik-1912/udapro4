$(function() {

    // Select size input
    let height = $('#inputHeight');
    let width = $('#inputWeight');

    // Select color input
    let colour = $('#colorPicker');

    //select canvas
    const table = $('#pixelCanvas');

    // grid generation based on user input
    function makeGrid() {
        table.find('tbody').remove();

        //after user submits
        let Rows = height.val();
        let Col = width.val();

        // set tbody to the table
        table.append('<tbody></tbody>');

        let tBody = table.find('tbody');

        // draw grid row
        for (let i = 0; i < Rows; i++) {
            tBody.append('<tr></tr>');
        }

        // draw grid col
        for (let i = 0; i < Col; i++) {
            table.find('tr').append('<td class="white"></td>');
        }
    }

    $(document).ready(function () {
        // click the submit button to update the grid
        $('input[type="submit"]').on('click', function (f) {
            f.preventDefault();
            makeGrid();
        });

        // toggle grid color
        $('#pixelCanvas').on('click', 'td', function (f) {
            let x = colour.val();
            let currentColor = $(this).css('background-color');
            console.log(currentColor + " color:" + x);

            if ($(this).hasClass('white')) {
                $(this).toggleClass('white');
                $(this).css("background-color", x);
            } else {
                $(this).toggleClass('white');
                $(this).css("background-color", "white");
            }

        });
    });
});
