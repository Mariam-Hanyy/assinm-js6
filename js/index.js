/// <reference types="../@types/jquery" />



$('.aside').on('click',function(){
    $('aside').animate({width:'20%'},1000)
    
})

$('aside i').on('click',function(){
    $('aside').animate({width:'0px'},1000)
})


$('.singer h3').on('click',function(){
    $('.singer p').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})


let maxText=100;

$('textarea').on('input',function(){
    let length=$(this).val().length
    let textLeft =maxText -length;
    if(textLeft<=0){
        $('#contactUs form p span').html(`0`)
    }
    else(
        $('#contactUs form p span').html(textLeft)
    )


})


    // Count Down Date
    const targetDate = new Date('2025-01-21T00:00:00').getTime();


    const interval = setInterval(function() {

    const now = new Date().getTime();


    const timeDifference = targetDate - now;


        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


        $('#day').html(`-${days} Days` )
        $('#hour').html(`${hours} Hours`)
        $('#min').html(`${minutes} Minutes`)
        $('#sec').html(`${seconds} Seconds`)
        

        if (timeDifference < 0) {
            clearInterval(interval); 
            $('#countdown').html('<p>Countdown expired!</p>');
        }
    }, 1000); 








