const chatWidget = document.querySelector(".chat-widget__side");
const widget = document.querySelector(".chat-widget");

let input = document.querySelector("input");
let messages = document.getElementById("chat-widget__messages");

const widgetArea = document.querySelector('.chat-widget__area')


const getAnswer = () => {
    const robotAnswers = [
        'Добрый день!',
        'Напишите Ваш вопрос',
        'Сейчас все операторы пьют чай',
        'Не готов Вам помочь',
        'Вы еще тут?',
        'Обратитесь в службу поддержки',
        'Покеда'
    ];

    let answer = Math.floor(Math.random() * robotAnswers.length);

    input.value = ''

    return robotAnswers[answer];

}

chatWidget.addEventListener("click", () => {
    widget.classList.toggle("chat-widget_active");
});

widgetArea.addEventListener("keydown", (event) => {
    let time = new Date();
    if (event.key === "Enter" && input.value !== '') {
        messages.innerHTML += `
        <div class="message message_client">
    <div class="message__time">${
      time.getHours() + ":" + time.getMinutes()
    }</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>`;
        document.querySelector('.chat-widget__messages-container').scrollTop = 999;
    }
});

widgetArea.onchange = () => {
    let time = new Date();
    messages.innerHTML += `
        <div class="message">
    <div class="message__time">${
      time.getHours() + ":" + time.getMinutes()
    }</div>
    <div class="message__text">
      ${getAnswer()}
    </div>
  </div>`;
    document.querySelector('.chat-widget__messages-container').scrollTop = 999;
}