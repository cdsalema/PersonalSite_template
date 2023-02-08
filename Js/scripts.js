$(function(){
    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul')
            if(listaMenu.is(':hidden') === true){
                listaMenu.fadeIn();
            }
            else{
                listaMenu.fadeOut();
            }
    })
})