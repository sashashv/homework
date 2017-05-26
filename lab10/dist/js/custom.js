$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            992:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
    $(".slide-two").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        navText:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:5,
                nav:true
            },
            767:{
                items:5,
                nav:true
            },
            768:{
                items:8,
                nav:true
            },
            992:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });
});
//select style
$(document).ready(function(){
    $("select").selecter({
        cover: true,
        label: ' ',
    });
});
//button
$(document).ready(function(){
    $('button').click(function(){
        if($(this).hasClass('i_am'))
        {
            $(this).addClass('look_for').removeClass('i_am');
        }
        else
        {
            $(this).addClass('i_am').removeClass('look_for');
        }
    });
});
//tabs
$(document).ready(function(){
    $( "#tabs" ).tabs();
} );
//slider in users list
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});
//rating, circle progress bar
$(document).ready(function(){
    $("#jRate").jRate({
        startColor: '#ff8912',
        endColor: '#ff8912',
        width: 17,
        height: 16,
        strokeWidth: 5
    });
    $(".el").circleProgress({
        value: 0.35,
        startAngle: 450*(-Math.PI/180),
        fill: {
            color: '#ffa352'
        },
        emptyFill: '#e7e8e8'
});
});

//for circle bar animation

// $(function() {
//     var elbar = $( ".el" );
//     elLabel = $( ".el-label" );
//     $( ".el" ).circleProgress({
//         value: false,
//         change: function() {
//             elLabel.text(
//                 elbar.circleProgress( "value" ) + "%" );
//         },
//     });
//     function el() {
//         var val = elbar.circleProgress( "value" ) || 0;
//         elbar.circleProgress( "value", val + 1 );
//         if ( val < 34 ) {
//             setTimeout( el, 100);
//         }
//     }
//     setTimeout( el, 5000 );
// });
//progress bar
$(function() {
    var progressbar = $( "#progressbar-5" );
    progressLabel = $( ".progress-label" );
    $( "#progressbar-5" ).progressbar({
        value: false,
        change: function() {
            progressLabel.text(
                progressbar.progressbar( "value" ) + "%" );
        },
    });
    function progress() {
        var val = progressbar.progressbar( "value" ) || 0;
        progressbar.progressbar( "value", val + 1 );
        if ( val < 19 ) {
            setTimeout( progress, 100);
        }
    }
    setTimeout( progress, 5000 );
});

$(document).ready(function(){
    $(".no-csscolumns .type").columnize({
        width: 285
        
    });
});

//validation


    $(function() {

        $('.rf').each(function(){
            // Объявляем переменные (форма и кнопка отправки)
            var form = $(this),
                btn = form.find('.btn_submit');

            // Добавляем каждому проверяемому полю, указание что поле пустое
            form.find('.rfield').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput(){
                form.find('.rfield').each(function(){
                    if($(this).val() != ''){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('empty_field');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('empty_field');
                    }
                });
            }

            // Функция подсветки незаполненных полей
            function lightEmpty(){
                form.find('.empty_field').css({'border-color':'rgba(209, 0, 0, 0.49)'});
            }

            // Проверка в режиме реального времени
            setInterval(function(){
                // Запускаем функцию проверки полей на заполненность
                checkInput();
                // Считаем к-во незаполненных полей
                var sizeEmpty = form.find('.empty_field').size();
                // Вешаем условие-тригер на кнопку отправки формы
                if(sizeEmpty > 0){
                    if(btn.hasClass('disabled')){
                        return false
                    } else {
                        btn.addClass('disabled')
                    }
                } else {
                    btn.removeClass('disabled')
                }
            },500);

            // Событие клика по кнопке отправить
            btn.click(function(){
                if($(this).hasClass('disabled')){
                    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                    lightEmpty();
                    return false
                } else {
                    // Все хорошо, все заполнено, отправляем форму
                    form.submit();
                }
            });
        });
    });
