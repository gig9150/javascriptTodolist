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

            /*취소선 이벤트 연결*/
            list_checkbox.addEventListener('click',function(){
                if(this.checked){
                    this.parentNode.style.textDecoration = 'line-through';
                }else{
                    this.parentNode.style.textDecoration = 'none';
                }refresh_img
            });

            /* 요소 추가 */
            document.getElementById("list").appendChild(list);
            document.getElementsByClassName("list_content")[i++].appendChild(list_checkbox);
            //입력창 초기화
            document.getElementById("input_text").value = "";
        }
    }
    /* 초기화 이벤트 바인딩 */
    document.getElementById('refresh_img').addEventListener('click',function(){
        if(confirm('정말 삭제 하시겠습니까?')){
            let list = document.getElementById('list');
            /* if (list.hasChildNodes()) {
                list.removeChild(list.childNodes[0]);
            } */
            list.innerHTML = '';
            /* 초기화 작업 */
            document.getElementById("input_text").value = "";
            i = 0;
        }
    });
}

window.onbeforeunload = function(){
    return '정말 나가시겠습니까?';
}