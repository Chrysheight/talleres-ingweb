console.log("Hola");

/*
Defina objetos similares para los otros meses. 
Para renderizar la tabla de un mes basta saber 
cual es el día de semana inicial, y cuántos días tiene el mes.
*/

var diasMayo = {"firstWeekDay": "mon", "days": 31}
var eventosMayo = [];

function addEventToDay(month, day) {
    console.log(month + " " + day);
    var eventText = window.prompt("Ingrese texto del evento: ");

    /* El chequeo de eventText es obligatorio */
    if(eventText) {
	eventosMayo[day] = eventText;
    }

    renderSelectedMonth(month);
}
		    
function getHTMLForMonthDay(month, day) {
    var dayId = day;
    var dayHTML = "<td id=\"" + dayId + "\" ";
    dayHTML += "onclick=\"addEventToDay(" + month + "," + day + ")\">";
    dayHTML += day;

    if(eventosMayo[day]) {
	dayHTML += "<hr/>";
	dayHTML += eventosMayo[day];
    }
	
    dayHTML += "</td>";
    return dayHTML;
}


function getHTMLForMonthTable(selectedMonth) {
    /*
     El valor de weekDayIdx debe cambiar
     si el primer dia del mes  no es lunes
    */
    var weekDayIdx = 0;
    var newHTML = "";
    var newSemanaHTML = "";   
    
    for(var i = 1; i <= diasMayo.days; i++) {
	if(weekDayIdx == 0) {
	    newSemanaHTML += "<tr>";
	}

	newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	if(weekDayIdx == 6 || (i + 1) > diasMayo.days) {
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
