(function ( $ ) {

    $.fn.customSelect = function(){
        
        this.click(function(e){
            e.stopPropagation();
            
            var label = $(this).find('.custom-select-label');
            var value = $(this).find('.custom-select-value');

            var toggle = $(this).data("toggle");
            var target = $(toggle, this);
            
            //close all other dropdown if opened
            $('.dropdown', '.custom-select').not(target).addClass('close');

            target.css({ 'top' : ($(this).height() + 4 ) +"px"});
            target.toggleClass('close');                         
            
            target.find('a').each(function(){
                $(this).unbind().click(function(){
                    label.html($(this).html());
                    value.val($(this).data("value"));
                })
            });
            
        });

        $(window).on('click', function(){           
            $('.dropdown', '.custom-select').addClass('close');
        }); 
     
        
    }

})(jQuery);