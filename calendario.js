console.log("Hola");

/*
Defina objetos similares para los otros meses. 
Para renderizar la tabla de un mes basta saber 
cual es el día de semana inicial, y cuántos días tiene el mes.
*/

var diasEnero = {"firstWeekDay": "sun", "days": 31};
var eventosEnero = [];
var diasFebrero = {"firstWeekDay": "wed", "days": 28};
var eventosFebrero = [];
var diasMarzo = {"firstWeekDay": "wed", "days": 31};
var eventosMarzo = [];
var diasAbril = {"firstWeekDay": "sat", "days": 30};
var eventosAbril = [];
var diasMayo = {"firstWeekDay": "mon", "days": 31}
var eventosMayo = [];
var diasJunio = {"firstWeekDay": "thu", "days": 30};
var eventosJunio = [];
var diasJulio = {"firstWeekDay": "sat", "days": 31};
var eventosJulio = [];
var diasAgosto = {"firstWeekDay": "tue", "days": 31};
var eventosAgosto = [];
var diasSeptiembre = {"firstWeekDay": "fri", "days": 30};
var eventosSeptiembre = [];
var diasOctubre = {"firstWeekDay": "sun", "days": 31};
var eventosOctubre = [];
var diasNoviembre = {"firstWeekDay": "wed", "days": 30};
var eventosNoviembre = [];
var diasDiciembre = {"firstWeekDay": "fri", "days": 31};
var eventosDiciembre = [];

function setEventos(month) {
    switch (parseInt(month)) {
        case 0: return eventosEnero;
        case 1: return eventosFebrero;
        case 2: return eventosMarzo;
        case 3: return eventosAbril;
        case 4: return eventosMayo;
        case 5: return eventosJunio;
        case 6: return eventosJulio;
        case 7: return eventosAgosto;
        case 8: return eventosSeptiembre;
        case 9: return eventosOctubre;
        case 10: return eventosNoviembre;
        case 11: return eventosDiciembre;
    }
}

function addEventToDay(month, day) {
    var eventos = setEventos(month);
    console.log(month + " " + day);
    var eventText = window.prompt("Ingrese texto del evento: ");

    /* El chequeo de eventText es obligatorio */
    if(eventText) 
	    eventos[day] = eventText;

    renderSelectedMonth(month);
}
		    
function getHTMLForMonthDay(month, day) {
    var eventos = setEventos(month);
    var dayId = day;
    var dayHTML = "<td id=\"" + dayId + "\" ";
    dayHTML += "onclick=\"alerta(" + month + "," + day + ")\">";
    dayHTML += day;

    if(eventos[day]) {
	    dayHTML += "<hr/>";
	    dayHTML += eventos[day];
    }
	
    dayHTML += "</td>";
    return dayHTML;
}

function getHTMLForMonthTable(selectedMonth) {
    /*
     El valor de weekDayIdx debe cambiar
     si el primer dia del mes  no es lunes
    */
    var weekDayIdx;
    var dias;

    switch(parseInt(selectedMonth)) {
        case 0: 
            weekDayIdx = 6;
            dias = diasEnero;
            break;
        case 1: 
            weekDayIdx = 2;
            dias = diasFebrero;
            break;
        case 2: 
            weekDayIdx = 2;
            dias = diasMarzo;
            break;
        case 3: 
            weekDayIdx = 5;
            dias = diasAbril;
            break;
        case 4: 
            weekDayIdx = 0;
            dias = diasMayo;
            break;
        case 5: 
            weekDayIdx = 3;
            dias = diasJunio;
            break;
        case 6: 
            weekDayIdx = 5;
            dias = diasJulio;
            break;
        case 7: 
            weekDayIdx = 1;
            dias = diasAgosto;
            break;
        case 8: 
            weekDayIdx = 4;
            dias = diasSeptiembre;
            break;
        case 9: 
            weekDayIdx = 6;
            dias = diasOctubre;
            break;
        case 10: 
            weekDayIdx = 2;
            dias = diasNoviembre;
            break;
        case 11: 
            weekDayIdx = 4;
            dias = diasDiciembre;
            break;
    }

    var newHTML = "";
    var newSemanaHTML = "";
    for (var j = 0; j < weekDayIdx; j++) {
        newSemanaHTML += "<td></td>";
    }
    
    for(var i = 1; i <= dias.days; i++) {
	    if(weekDayIdx == 0) {
            newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);
        
	    if(weekDayIdx == 6 || (i + 1) > dias.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }

    return newHTML;
}



function getMonthName(month) {
    switch(parseInt(month)) {
    case 0: return "Enero";
    case 1: return "Febrero";
    case 2: return "Marzo";
    case 3: return "Abril";
    case 4: return "Mayo";
    case 5: return "Junio";
    case 6: return "Julio";
    case 7: return "Agosto";
    case 8: return "Septiembre";
    case 9: return "Octubre";
    case 10: return "Noviembre";
    case 11: return "Diciembre";
    }

    throw new Error("No existe mes con indice: " + month);
}


function renderSelectedMonth(selectedMonth) {
    console.log(selectedMonth);

    var monthName = getMonthName(selectedMonth);
    console.log(monthName);

    // Ver: http://stackoverflow.com/questions/13775519/html-draw-table-using-innerhtml
    var newHTML = "";
    newHTML += "<h1>Mes: " + monthName + "</h1>";
    newHTML += "<table>";    
    newHTML += "<tr>";
    newHTML += "<th>Lunes</th>";
    newHTML += "<th>Martes</th>";
    newHTML += "<th>Miercoles</th>";
    newHTML += "<th>Jueves</th>";
    newHTML += "<th>Viernes</th>";
    newHTML += "<th>Sabado</th>";
    newHTML += "<th>Domingo</th>";
    newHTML += "</tr>";

    /*
    Aqui usted debe renderizar la tabla con los dias del mes
    Utilice la información en el objeto 'diasMayo' o el que
    corresponda según el mes seleccionado.

    A modo de demostración, el siguiente código renderiza
    la tabla con el mes de Mayo.
    */

    newHTML += getHTMLForMonthTable(selectedMonth);

    /* Fin de la tabla */
    newHTML += "</table>";

    /* Actualizamos el innerHTML del div currentMonth */
    var monthDiv = document.getElementById("currentMonth");    
    monthDiv.innerHTML = newHTML;
}

//consulta si quiere agregar o eliminar evento
function alerta(month, day) {
    var agregar = confirm("Desea agregar un evento?");

    if (agregar) {
        addEventToDay(month, day);
    } else {
        var eliminar = confirm("Desea eliminar un evento?");
        if (eliminar) {
            eliminarEvento(month, day);
        }
    }
}

//borrado
function eliminarEvento(month, day) {
    var eventos = setEventos(month);
    eventos[day] = "";
    renderSelectedMonth(month);
}