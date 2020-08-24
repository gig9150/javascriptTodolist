window.onload = function(){
    document.onkeyup = function(e){
        const keyCode = e.keyCode;
        if(keyCode==13){
            const list = document.createElement("div");
            list.innerHTML = document.getElementById("input_text").value;
            document.getElementById("list").appendChild(list);
        }
    }
}