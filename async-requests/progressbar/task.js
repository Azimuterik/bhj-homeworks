const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (elem) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

  xhr.upload.addEventListener('progress', (e) => {
    progress.value = event.loaded / event.total;
  });

  let data = new FormData(form);
  xhr.send(data);

  elem.preventDefault();


});

