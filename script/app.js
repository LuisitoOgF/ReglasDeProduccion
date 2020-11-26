
function ShowSelected() {
	/* Para obtener el valor */
	var conj1 = document.getElementById("conjuncion1").value;
	var conj2 = document.getElementById("conjuncion2").value;
	if (conj1 == "V" && conj2 == "V") {
		document.getElementById("res").value = "Verdadero";
	} else if ((conj1 == "V" && conj2 == "F") || (conj1 == "F" && conj2 == "V") || (conj1 == "F" && conj2 == "F")) {
		document.getElementById("res").value = "Falso";
	}

}
function ShowSelected2() {
	/* Para obtener el valor */
	var dis1 = document.getElementById("disyuncion1").value;
	var dis2 = document.getElementById("disyuncion2").value;
	if (dis1 == "F" && dis2 == "F") {
		document.getElementById("resdis").value = "Falso";
	} else if ((dis1 == "V" && dis2 == "V") || (dis1 == "V" && dis2 == "F") || (dis1 == "F" && dis2 == "V")) {
		document.getElementById("resdis").value = "Verdadero";
	}

}
function ShowSelected3() {
	/* Para obtener el valor */
	var condi1 = document.getElementById("condicional1").value;
	var condi2 = document.getElementById("condicional2").value;
	if (condi1 == "V" && condi2 == "F") {
		document.getElementById("rescon").value = "Falso";
	} else if ((condi1 == "V" && condi2 == "V") || (condi1 == "F" && condi2 == "V") ||
		(condi1 == "F" && condi2 == "F")) {
		document.getElementById("rescon").value = "Verdadero";
	}

}
function ShowSelected4() {
	/* Para obtener el valor */
	var bico1 = document.getElementById("bicondicional1").value;
	var bico2 = document.getElementById("bicondicional2").value;
	if ((bico1 == "V" && bico2 == "V") || (bico1 == "F" && bico2 == "F")) {
		document.getElementById("resbi").value = "Verdadero";
	} else if ((bico1 == "V" && bico2 == "F") || (bico1 == "F" && bico2 == "V")) {
		document.getElementById("resbi").value = "Falso";
	}

}
function ShowSelected5() {
	/* Para obtener el valor */
	var neg = document.getElementById("negacion1").value;
	if (neg == "F") {
		document.getElementById("resneg").value = "Verdadero";
	} else if (neg == "V") {
		document.getElementById("resneg").value = "Falso";
	}
}