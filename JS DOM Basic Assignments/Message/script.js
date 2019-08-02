const sendBtn = document.querySelector('#sendBtn'),
    messageIn = document.querySelector('#messageIn'),
    messageOut = document.querySelector('#messageOut'),
    sendMsg = () => {
        let content = messageIn.value;
        if (content === '') {
            alert('Please Enter a Valid Value');
        } else {
            messageOut.innerHTML = content;
            messageIn.value = '';
        }
    };
sendBtn.addEventListener('click', sendMsg);
