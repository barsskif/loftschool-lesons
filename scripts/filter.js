(function(){
    

    const controlls = document.querySelectorAll('.color__filter__item');
    const activeClass = 'color__filter__item--active';

    controlls.forEach(function(control) {
        
        control.addEventListener('click', function(e) {
            e.preventDefault();


           controlls.forEach(function(link){
               link.closest('.color__filter__item').classList.remove(activeClass);
           });

            control.closest('.color__filter__item').classList.add(activeClass);
       
        }); 
    });

})();




(function() {

    const controlls = document.querySelectorAll('.filter__link');
    const activeClass = 'filter__item--active';

    controlls.forEach(function(control) {
    
        control.addEventListener('click', function(e) {
            e.preventDefault();

            controlls.forEach(function(link){
                link.closest('.filter__item').classList.remove(activeClass);
            })
            control.closest('.filter__item').classList.add(activeClass);
        })
    })
})();



$( function() {
    var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });
  } );