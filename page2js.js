function checkCovid(x){//კითხვაზე გადატანილი გაქვს კოვიდი.ამ ფუნქციით კის მონიშვნის შემთხვევაში გამოგვაქვს შემდეგი კითხვა
    if(x==1){
        document.getElementById("kitxva2").style.visibility="visible"        
        document.getElementById("forward").style.display="none"//წინ გადასასვლელი გილაკი 
    }
    else{
        document.getElementById("forward").style.display="inline-block"
        document.getElementById("kitxva2").style.visibility="hidden"
        document.getElementById("version2").style.visibility="hidden"
        document.getElementById("version1").style.visibility="hidden"
    }
}

function checkAnti(x){//ანტისხეულებზე გაქვს ტესტი გაკეთებული
    if(x==0){
        document.getElementById("version2").style.visibility="hidden"
        document.getElementById("version1").style.visibility="visible"
        document.getElementById("forward").style.display="inline-block"
    }
    else if(x==1){
         document.getElementById("version1").style.visibility="hidden"
         document.getElementById("version2").style.visibility="visible"
         document.getElementById("forward").style.display="inline-block"
    }
}