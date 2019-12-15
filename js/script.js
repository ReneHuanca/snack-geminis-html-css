/*  My functions */

const $ = selector => document.querySelector(selector);

const menuDisplace = () => {
    $('header nav ul').classList.toggle('nav-active');
    $('.icon-hamburger').classList.toggle('active-hamburger');
}

/* Animations */

$('.icon-hamburger').addEventListener("click",menuDisplace,false);

// animation form contact

console.log('hola soy rene');

var frm = $('.form-contact');
function formActive(){
    for (let i = 0; i < frm.length; i++) {
        frm[i].addEventListener('focus',function(){
            $('label[for="'+frm[i].id+'"]').classList.add('form-active');
            $('label[for="'+frm[i].id+'"]').style = 'font-size: 1em;';
        });
    
        frm[i].addEventListener('blur',function(){
            if(!frm[i].value){
                $('label[for="'+frm[i].id+'"]').classList.remove('form-active');
                $('label[for="'+frm[i].id+'"]').style = 'font-size: 1.5em;';
            }
        });
    }
}
formActive();

// validations


window.onload = function () {
    document.formcontact.nombre.focus();
    document.formcontact.addEventListener('submit', validarFormulario);
}

function validarFormulario(evObject) {
    //Evita el envío del formulario hasta comprobar
    evObject.preventDefault();
    
    var todoCorrecto = true;
    var formulario = document.formcontact;

    for (var i = 0; i < formulario.length; i++) {
        if (formulario[i].type == 'text') {
            if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)) {
                alert(formulario[i].name + ' No puede estar vacío o contener sólo espacios en blanco');
                todoCorrecto = false;
            }
        }
    }
    if (todoCorrecto == true) { formulario.submit(); }
}




