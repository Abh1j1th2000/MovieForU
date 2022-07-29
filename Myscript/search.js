$(document).ready(()=>{
       $('#entery').blur(function(){
        var value= $(this).val().toLowerCase();
        console.log(value)
        if(value==="jana gana mana"){
            $('#bb2').fadeOut();
            $('#vikram').fadeOut();
            $('#kgf2').fadeOut();
            $('#thor').fadeOut();
            $('#jk0').fadeOut();
            $('#jgm').fadeIn();
            console.log("bb2")
        }
        else if(value==="vikram"){
            $('#jgm').fadeOut();
            $('#kgf2').fadeOut();
            $('#thor').fadeOut();
            $('#jk0').fadeOut();
            $('#bb2').fadeOut();
            $('#vikram').fadeIn();

        }
        else if(value==="kgf 2"){
            $('#jgm').fadeOut();
            $('#vikram').fadeOut();
            $('#thor').fadeOut();
            $('#jk0').fadeOut();
            $('#bb2').fadeOut();
            $('#kgf2').fadeIn();
            console.log("bb2")
        }
        else if(value==="thor"){
            $('#jgm').fadeOut();
            $('#kgf2').fadeOut();
            $('#vikram').fadeOut();
            $('#jk0').fadeOut();
            $('#bb2').fadeOut();
            $('#thor').fadeIn();
        }
        else if(value==="jujutsu kaisen 0"){
            $('#jgm').fadeOut();
            $('#kgf2').fadeOut();
            $('#thor').fadeOut();
            $('#vikram').fadeOut();
            $('#bb2').fadeOut();
            $('#jk0').fadeIn();
        }
        else if(value==="bhool bhulaiyaa 2"){
            $('#jgm').fadeOut();
            $('#kgf2').fadeOut();
            $('#thor').fadeOut();
            $('#jk0').fadeOut();
            $('#vikram').fadeOut();
            $('#bb2').fadeIn();

        }
        else {
            $('#jgm').fadeOut();
            $('#kgf2').fadeOut();
            $('#thor').fadeOut();
            $('#jk0').fadeOut();
            $('#bb2').fadeOut();
            $('#vikram').fadeOut();
    
        }

        
       });
});
           