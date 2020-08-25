window.onload = function(){
    let i = 0;
    /* 현재시간 갱신 */
    setInterval(function(){
        const d =  new Date();
        /* 현재 날짜,시간을 출력 */
        document.getElementById("list_img").getElementsByTagName("p")[0].innerHTML = 
        d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate() + 
        "\n" + d.getHours() +":" + d.getMinutes() + ":" + d.getSeconds();
    },1000);

    /* 할일 목록 추가 이벤트 */
    document.onkeyup = function(e){
        const keyCode = e.keyCode;
        if(keyCode==13){
            const list = document.createElement("div");
            const list_checkbox = document.createElement("input");
            list_checkbox.type = "checkbox"
            list.className = "list_content";
            list_checkbox.className = "content_checkbox";
            list.innerHTML = document.getElementById("input_text").value;
            document.getElementById("list").appendChild(list);
            document.getElementsByClassName("list_content")[i++].appendChild(list_checkbox);
            //입력창 초기화
            document.getElementById("input_text").value = "";
        }
    }
    /* 취소선 이벤트 */
    /* document.onclick = function(e){
         e.parentNode.style.textDecoration = "line-through";
         alert(e);
    } */
}