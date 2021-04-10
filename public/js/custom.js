const socket = new WebSocket('wss://hybroo2.herokuapp.com/0.0.0.0'); // Local: "ws://localhost:5000"

socket.addEventListener('open', function (event) {
    console.log('Connected to the WS Server!')
    socket.send(JSON.stringify({ 'task': 'functions_names', 'params': 'None' }));
});

socket.addEventListener('close', function (event) {
    console.log('Disconnected from the WS Server!')
});

socket.addEventListener('message', function (event) {
    const { task } = JSON.parse(event.data)

    switch (task) {
        case "functions_names":
            let { data } = JSON.parse(event.data)
            data.forEach(function (item) {
                $('#function_selected').append('<option  value="' + item.id + '">' + item.name + '</option>');
            });
            socket.send(JSON.stringify({ 'task': 'functions_methods', 'params': 'None' }));
            break;

        case "functions_details_img":
            const { img } = JSON.parse(event.data)
            $("#image-details").attr("src", img);
            break;

        case "functions_details":
            populateCardContainerTwo(JSON.parse(event.data))
            break;

        case "functions_methods":
            const RG4 = JSON.parse(event.data)
            // Popula single methos
            jsonToArray(RG4).map(function (item) {
                if (item[0] !== "task") {
                    $('#method_single').append('<option  value="' + item[0] + '">' + item[1].name + '</option>');
                }
            });

            // Popula hybrid methods
            jsonToArray(RG4).map(function (item) {
                if (item[1].approach === "HYBRID") {
                    $('#method_hybrid').append('<option  value="' + item[0] + '">' + item[1].name + '</option>');
                }
            });

            functionMethod = jsonToArray(RG4)
            break;

        case "functions_solver":
            const TE2 = JSON.parse(event.data)
            console.log(TE2.data)
            alert(TE2.data)
            break;

        case "functions_solver_results":
            const PL8 = JSON.parse(event.data)
            console.log(PL8)
            alert(PL8)
            break;

        default:
            break;
    }
});


// Popula card do container two
function populateCardContainerTwo(value) {
    switchTwo()
    labels = Object.keys(value)
    for (var i in labels) {
        $("#list").append(`
            <tr>
                <td class="font-weight-bold capitalize pr-3 vertical-top">${labels[i]}</td>
                <td class="vertical-top" >${value[labels[i]]}</td>
            </tr>
        `);
    }

}

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
    $("#fields-of-methods-hybrid").empty();
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


function getDetails() {
    socket.send(JSON.stringify({ 'task': 'functions_details', 'params': { 'function_id': valueSelected } }));
    socket.send(JSON.stringify({ 'task': 'functions_details_img', 'params': { 'function_id': valueSelected } }));
}

function sendData() {
    firstMethod = []
    secondMethod = []
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

    socket.send(JSON.stringify({ 'task': 'functions_solver', 'params': { collectionData } }));
    console.log(collectionData)
}

// Funções que altera estado, mudança de layout, limpar estados.
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





