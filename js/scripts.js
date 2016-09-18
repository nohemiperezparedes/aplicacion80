// JavaScript Document
function obtenerfecha(){
	var fecha=new Date();
	var cadena=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+(fecha.getYear()+1900);
	return cadena;

}
function fechahora(){
	var cadena=obtenerfecha();
	document.formulario.horafecha.value=cadena;
	
}