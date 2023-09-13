"use strinct"

window.onload=function(){
    $(".tablink").click(function(){
        $(".tabcontent").css("display","none").empty()
        $(".tablink").css({
            "background-color":"#c3d9f3",
            "color": "#464859"
        })
        if($(this).hasClass("1")){
            let divDocente=$(".tabcontent.1").eq(0)
            creaLogin(divDocente)
        }
        else{ 
            let divStudente=$(".tabcontent.2").eq(0)
            creaLogin(divStudente)
        }
        $(this).css({"background-color":"#CF9BE9",
                    "color":"#464859",
                    "font-weight": "bold"});
    })
    

    function creaLogin(div){
        let container=$("<div>").addClass("container").appendTo(
            $("<form>").addClass("modal-content").appendTo(div)
        );
        $("<b>").text("Username").appendTo(
            $("<labl>").prop("for","uname").appendTo($(container))
        );
        $("<input>").prop({
            type:"text",
            placeholder:"Inserisci Username",
            name:"uname",
            required:true
        }).appendTo($(container));
        $("<b>").text("Password").appendTo(
            $("<labl>").prop("for","pwd").appendTo($(container))
        );
        $("<input>").prop({
            type:"password",
            placeholder:"Inserisci Password",
            name:"pwd",
            required:true
        }).appendTo($(container));
        $("<button>").addClass("btn").text("Login").appendTo($(container)).click(function(){
            
        });

        div.css("display","block");
    }
}