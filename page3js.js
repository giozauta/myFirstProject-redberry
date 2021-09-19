function acriliXar(x){
    if(x==0){
        document.getElementById("raetapze").style.visibility ="visible"
        document.getElementById("ras-elodebi").style.visibility="hidden"
        document.getElementById("rcheva").style.visibility="hidden"
        document.getElementById("forward").style.display="none"
    }
    else if (x==1){
        document.getElementById("raetapze").style.visibility = "hidden"
        document.getElementById("ras-elodebi").style.visibility="visible"
        document.getElementById("ar-gadado").style.visibility ="hidden"
        document.getElementById("forward").style.display="none"
    }    
}
function pirvelEtapze(x){
    if(x==3){
        document.getElementById("forward").style.display="inline-block"
        document.getElementById("ar-gadado").style.visibility="visible"
    }else{
        document.getElementById("ar-gadado").style.visibility="hidden"
        document.getElementById("forward").style.display="inline-block"
    }
}
function rasElodebi(x){
    if(x==3){
        document.getElementById("rcheva").style.visibility = "visible"
        document.getElementById("forward").style.display="inline-block"
    }else{
        document.getElementById("rcheva").style.visibility="hidden"
        document.getElementById("forward").style.display="inline-block"
    }
}

