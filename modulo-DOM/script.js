var p = document.getElementsByTagName('p');

//p

// alert(p[0].innerHTML);   //Dando um alert na tag especificada;

 // p[0].innerHTML = 'Manupulado via JS!!'; //Fazendo manipulações via innerHTML;

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado via JS!! - ' + i;
}