// Присюнявливаем бота для отправки в телегу


const TOKEN = "5727038331:AAFtVTEDBrTXhHx8-cPHCbJOAVTG1j0NHZo";
const CHAT_ID = "-1001501838988";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();


    let message = `<b>Заявка с портфолио!<b>\n`;
    message += `<b>Контакт: </b> ${this.name.value}\n`;
    message += `<b>Сообщение: </b> ${this.text.value}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })

       .then((res) => {
           this.name.value = "";
           this.text.value = "";
       })

       .catch((err) => {
           console.warn(err);
       })
       
       .finally(() => {
           console.log('Конец');
       })

})