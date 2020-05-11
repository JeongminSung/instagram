const button = document.getElementById('btn');
const commentInput = document.getElementById('comment');
const commentBox = document.getElementById('comment-box');

function buttonEvent(){
    let container = document.createElement('div');
    container.classList.add('comment-people');
    let id = document.createElement('a');
    id.classList.add("comment-id")
    id.innerHTML = "hello"
    let content = document.createElement('span');
    content.classList.add('comment-content');
    content.innerHTML = commentInput.value;

    container.appendChild(id);
    container.appendChild(content);
    commentInput.value = '';

    //value를 가져오는것은 함수의 안에 있어야 한다. 아니면 초기값인 빈 상태로 들어와 아무것도 존재하지 않음
    commentBox.appendChild(container)
};
button.addEventListener('click', buttonEvent)

commentInput.addEventListener('keydown', function () {
    if (window.event.keyCode === 13) {
        buttonEvent()
        return;
    }
    if (commentInput.value) {
        button.style.opacity = '1';
        return;
    } else {
        button.style.opacity = '0.3';
        return;
    }
})
