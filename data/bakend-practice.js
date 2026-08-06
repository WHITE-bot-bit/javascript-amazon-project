const xhr = new XMLHttpRequest();


xhr.addEventListener('load',() => { //load:-"The server has finished sending the response."
    console.log(xhr.response);
});//"When the response has completely arrived from the server, run this function."

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
