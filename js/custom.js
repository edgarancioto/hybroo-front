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

            $("#list-label").append('<li class="font-weight-bold">Function</li>');
            $("#list-value").append('<li>' + labelSelected + '</li>');

            for (var i in detailsLabels) {
                $("#list-label").append('<li class="font-weight-bold capitalize">' + detailsLabels[i] + '</li>');
            }

            for (var i in detailsSelected) {
                $("#list-value").append('<li class="text-truncate">' + detailsSelected[i] + '</li>');
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
    $("#list-label").empty();
    $("#list-value").empty();
}

// Habilita botão após escolha no select input
$('#function_selected').on('change', function () {
    $("#btn_next").prop("disabled", false);
    valueSelected = this.value;
    labelSelected = $(this).find('option').filter(':selected').text();
});

