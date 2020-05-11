   //순차적으로 showing 클라스를 추가해 주는 함수
   function slide(){
       const showingClass = "showing";
       //엘리먼트 선택
       const firstSlide = document.querySelector(".slide-img:first-child");
   //firstSlide.classList.add(showingClass)'
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
    //id, input감싸고 있는 태그에게 이벤트를 걸면 댐! 일단 founction이벤트는 계속 발생하게

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
   