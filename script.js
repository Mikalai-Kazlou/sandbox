let alertText = '';

function showAlert() {
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = `<strong>Всем привет!</strong> ${alertText}`;

  document.body.prepend(div);
  setTimeout(() => div.remove(), 3000);
}

const alertButton = document.querySelector('.alert-button');

alertText = 'Вы получили новое сообщение!';
alertButton.addEventListener("click", showAlert); 