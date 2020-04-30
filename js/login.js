window.onload = function(){
   const showingClass = "showing";
   //엘리먼트 선택
   const firstSlide = document.querySelector(".slide-img:first-child");
   //firstSlide.classList.add(showingClass)'

   //순차적으로 showing 클라스를 추가해 주는 함수
   function slide(){
       const currentSlide = document.querySelector('.showing')
       //console.log(currentSlide)
       if(currentSlide){
           currentSlide.classList.remove(showingClass);
           const nextSlide = currentSlide.nextElementSibling;
           if(nextSlide){
               nextSlide.classList.add(showingClass);
           }else{
               firstSlide.classList.add(showingClass);
           }
       }else{ //넥스트가 없으면 처음으로 돌아가기
           firstSlide.classList.add(showingClass);
       }
   }
   slide();
   setInterval(slide, 6000); //인터벌 주고 반복


    const emailInput = document.getElementsByClassName("login-input")[0];
    const pwdInput = document.getElementsByClassName("login-input")[1];
    const loginBtn = document.getElementsByClassName("login-btn")[0];

    function changeColor(){
        if(emailInput.value.length > 0 && pwdInput.value.length >0){
            loginBtn.style.backgroundColor = '#0095f6';
            return;
        }else{
            loginBtn.style.backgroundColor = 'rgba(0,149,246,.3)';
            return;
        }
    }
    emailInput.addEventListener('keyup',changeColor);
    pwdInput.addEventListener('keyup', changeColor);
    // loginBtn.addEventListener('mousedown', btnColorChange);

    // function btnColorChange(){
    //     const clickColor = document.querySelector('.bottonClick'); 
    //     if(loginBtn)
    // }

    // loginBtn.onmousedown = function(){
    //     loginBtn.style.backgroundColor = 'rgba(0, 149, 266, .7)';
    //     return;
    // }
    // loginBtn.onmouseup = function () {
    //     loginBtn.style.backgroundColor = 'rgba(0, 149, 266, .7)';
    //     return;
    // }

       //아이디 비밀번호가 입력되야 실행되는 함수
       //1. 각 인풋에다가 이벤트 리스너를 달아줌
       //2. 들어왔는지 감지하는 이벤트  key이벤트
       //3. 이벤트 리스너의 두번째 인자로 콜백함수를 주고 
       //4. 그 함수 안에서 e.target.value / target은 키값

}