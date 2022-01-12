console.log("welcome");
document.getElementById("submit").onclick = function fun(){
    document.getElementById("display").style.backgroundColor= "#346fdc";
    document.getElementById("submit").disabled=true;
    const target=document.getElementById("datetime").value;
    let intervalID=setInterval(function updateTimer(){
        let current = new Date();
        let diff=new Date(target).getTime() - current.getTime();
        document.getElementById("Days").innerText = Math.floor(diff/(1000*60*60*24));
        document.getElementById("Hours").innerText=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        document.getElementById("Minutes").innerText=Math.floor((diff%(1000*60*60))/(1000*60));
        document.getElementById("Seconds").innerText=Math.floor((diff%(1000*60))/(1000));
        if(diff<1){
            clearInterval(intervalID);
            document.getElementById("display").style.backgroundColor= "#cf2528";
            document.getElementById("Days").innerText = "0";
            document.getElementById("Hours").innerText= "0";
            document.getElementById("Minutes").innerText= "0";
            document.getElementById("Seconds").innerText= "0";
            document.getElementById("submit").disabled=false;
        }
    },1000);

   
}
