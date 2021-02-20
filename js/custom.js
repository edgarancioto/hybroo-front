let optionsFunciton;
let valueSelected;
let labelSelected;
let detailsSelected;
var detailsLabels;
var detailsValues = [];

function callApi() {
    axios.get('https://hybroo2.herokuapp.com/functions-names')
        .then(function (response) {
            optionsFunciton = response.data.data;
            optionsFunciton.forEach(function (item) {
                $('#function_selected').append('<option  value="' + item.id + '">' + item.name + '</option>');
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getDetails() {
    axios.get('http://hybroo2.herokuapp.com/functions-details?id=' + valueSelected)
        .then(function (response) {
            getImage();

            detailsSelected = response.data

            $('#first-container').css('display', 'none')
            $('#second-container').css('display', 'block')

            detailsLabels = Object.keys(detailsSelected)

            for (var i in detailsLabels) {
                $("#list").append(`
                    <tr>
                        <td class="font-weight-bold capitalize pr-3 vertical-top">${detailsLabels[i]}</td>
                        <td class="vertical-top" >${detailsSelected[detailsLabels[i]]}</td>
                    </tr>
                `);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getImage() {
    axios.get('https://hybroo2.herokuapp.com/functions-details-img?id=' + valueSelected)
        .then(function (response) {
            $("#image-details").attr("src", response.data.img);
            console.log(response.data.img)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function cleanForm() {
    $('#first-container').css('display', 'block')
    $('#second-container').css('display', 'none')
    $("#function_selected").val(0)
    $("#btn_next").prop("disabled", true);
    $("#list").empty();
}

// Habilita botão após escolha no select input
$('#function_selected').on('change', function () {
    $("#btn_next").prop("disabled", false);
    valueSelected = this.value;
    labelSelected = $(this).find('option').filter(':selected').text();
});

