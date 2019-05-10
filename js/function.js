WhatAnimation('fadescroll');
WhatAnimation('moveleft');

$(window).scroll(function(){
    WhatAnimation('fadescroll');
    WhatAnimation('moveleft');
});

$(window).click(function(){
    WhatAnimation('fadescroll');
    WhatAnimation('moveleft');
});


function WhatAnimation(name) {
    $('.' + name).each(function(){
        switch(name){
            case 'fadescroll': AddClass(this, 'fadeIn');
                break;
            case 'moveleft': AddClass(this, 'left');
                break;
        }
    });
};

function AddClass(object, name){
    // if(IsVisible(object)){
    //     $(object).addClass(name);
    // } else {
    //     $(object).removeClass(name);
    // }

    $(object).addClass(name);
}

function IsVisible(object){
    var viewport = $(window).scrollTop() + $(window).height();
    var rand = $(object).offset();
    rand.bottom = rand.top + $(object).outerHeight();
    return (!(viewport <= (rand.top) || 
            $(window).scrollTop() >= (rand.bottom - 150)));
}

$(".nav .nav-link").on("click", function(){
    WhatAnimation('fadescroll');
    WhatAnimation('moveleft');
 });

 $(".navbar-nav .nav-item").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });

