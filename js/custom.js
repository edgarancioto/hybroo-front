let optionsFunciton;

var functionMethod = []; // Recebe da APi todos do methods

let valueSelected;
let labelSelected;
let detailsSelected;
var detailsLabels;

var BASE_URL_API = "https://hybroo2.herokuapp.com/"
var collectionData = {} // Guarda os valores pra ser enviados

var firstMethod = []
var secondMethod = []

// Escuta o checkbox "Single x Hybrid"
$('#single-or-hybrid-switch').change(function () {
    if (document.getElementById("single-or-hybrid-switch").checked) {
        $('#method_hybrid_label').css('display', 'block')
        $('#method_hybrid').css('display', 'block')
    } else {
        // Limpa os inputs do method hybrid
        $("#fields-of-methods-hybrid").empty();
        $("#method_hybrid").val(0)
        $('#method_hybrid_label').css('display', 'none')
        $('#method_hybrid').css('display', 'none')
    }
});

// Escuta o select do "Single"
$('#method_single').change(function () {
    // Limpa os input anterior para dar espaço a novos
    $("#fields-of-methods-single").empty();

    // Busca o elemento que contem os valores 
    let methodSelecionado = functionMethod.find((item) => {
        if (item[0] === this.value) {
            return item
        }
    });

    // Cria os inputs na tela
    methodSelecionado[1].fields.forEach(function (item) {
        $('#fields-of-methods-single').append(`<label>${item.label}</label>
        <input type=${item.type} name=${item.label} step=${item.step} value=${item.default} min=${item.min} class="form-control" placeholder="">`);
    });
});

// Escuta o select do "Hybrid"
$('#method_hybrid').change(function () {
    // Limpa os input anterior para dar espaço a novos
    $("#fields-of-methods-hybrid").empty();

    // Busca o elemento que contem os valores
    let methodSelecionado = functionMethod.find((item) => {
        if (item[0] === this.value) {
            return item
        }
    });

    // Cria os inputs na tela
    methodSelecionado[1].fields.forEach(function (item) {
        $('#fields-of-methods-hybrid').append(`<label>${item.label}</label>
        <input type=${item.type} name=${item.label} value=${item.default} min=${item.min} class="form-control" placeholder="">`);
    });
});

// Chama a API e popula o select do inicio
async function callApi() {
    axios.get(BASE_URL_API + 'functions-names')
        .then(function (response) {
            optionsFunciton = response.data.data;
            optionsFunciton.forEach(function (item) {
                $('#function_selected').append('<option  value="' + item.id + '">' + item.name + '</option>');
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    populationSelectOfMethods()
}

function getDetails() {
    axios.get(BASE_URL_API + 'functions-details?id=' + valueSelected)
        .then(function (response) {
            getImage();

            detailsSelected = response.data

            switchTwo()

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

function sendData() {
    $("div#group-first-method :input").each(function () {
        let input = $(this);
        let label = input[0].name
        let value = input[0].value
        let element = { label, value }

        firstMethod.push(element)
    });

    $("div#group-second-method :input").each(function () {
        let input = $(this);
        let label = input[0].name
        let value = input[0].value
        let element = { label, value }

        secondMethod.push(element)
    });

    collectionData.problem = $('#function_selected').val()
    collectionData.dimension = $('#dimensions').val()
    collectionData.isHybrid = $('#single-or-hybrid-switch').is(":checked")
    collectionData.firstMethod = firstMethod
    collectionData.secondMethod = secondMethod

    console.log(collectionData)
}

// Popula select input com valores retornados da API
async function populationSelectOfMethods() {
    functionMethod = await axios.get(BASE_URL_API + 'functions-methods')
        .then(function (response) {
            // Popula single methos
            jsonToArray(response.data).map(function (item) {
                $('#method_single').append('<option  value="' + item[0] + '">' + item[1].name + '</option>');
            });

            // Popula hybrid methods
            jsonToArray(response.data).map(function (item) {
                if (item[1].approach === "HYBRID") {
                    $('#method_hybrid').append('<option  value="' + item[0] + '">' + item[1].name + '</option>');
                }
            });

            // Guarda valores para serem usados proteriormente
            return jsonToArray(response.data)
        })
        .catch(function (error) {
            console.log(error);
            return;
        });
}



function getImage() {
    axios.get(BASE_URL_API + 'functions-details-img?id=' + valueSelected)
        .then(function (response) {
            $("#image-details").attr("src", response.data.img);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function switchTwo() {
    $('#first-container').css('display', 'none')
    $('#second-container').css('display', 'block')
}

function switchThird() {
    $('#second-container').css('display', 'none')
    $('#third-container').css('display', 'block')
}

function cleanForm() {
    $('#first-container').css('display', 'block')
    $('#second-container').css('display', 'none')
    $('#third-container').css('display', 'none')
    $("#function_selected").val(0)
    $("#btn_next_1").prop("disabled", true);
    $("#list").empty();
}

// Habilita botão após escolha no select input
$('#function_selected').on('change', function () {
    $("#btn_next_1").prop("disabled", false);
    valueSelected = this.value;
    labelSelected = $(this).find('option').filter(':selected').text();
});


// :::::::::::::::::::::: Customs ::::::::::::::::::::::  
//Passa Objeto em JSON recebi da API para array
function jsonToArray(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
}

// :::::::::::::::::::::: Resets :::::::::::::::::::::: 
$('#method_single').on('change', function () {
    $("#btn_next_3").prop("disabled", false);
    firstMethod = []
})

$('#method_hybrid').on('change', function () {
    secondMethod = []
})





