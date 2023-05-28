function showForm() {
    document.getElementById('overlay').style.display = 'flex';
}
  
function closeForm() {
    document.getElementById('overlay').style.display = 'none';
}

function toggleTheme() {
    var body = document.body;
    body.classList.toggle('theme-dark');
}

document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const buyButton = document.querySelector('.buy-submit');
                                //  v анонимная функция
    form.addEventListener('submit', function(event) {    
        event.preventDefault() // чтобы страница не перезагружалась
        if (form.checkValidity() && event.submitter === buyButton) {
            // Если все поля прошли проверку валидности на кнопке "Купить"
            document.getElementById('overlay').style.display = 'flex';
            alert('Спасибо за покупку!');
        }
    });
    /*создание объекта*/
    const btnUp = {
        el: document.querySelector('.btn-up'),
        show() {
          /* удалим у кнопки класс btn-up_hide */
          this.el.classList.remove('btn-up_hide');
        },
        hide() {
          /* добавим к кнопке класс btn-up_hide */
          this.el.classList.add('btn-up_hide');
        },
        addEventListener() {
          /* при прокрутке содержимого страницы (описываем функцию внутри функции(колбэк))*/
          window.addEventListener('scroll', () => {
            /* определяем величину прокрутки */
            const scrollY = window.scrollY;
            /* если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем */
            scrollY > 400 ? this.show() : this.hide();
          });
          /* при нажатии на кнопку .btn-up */
          document.querySelector('.btn-up').onclick = () => {
            /* переместим в начало страницы */
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      }
    
    btnUp.addEventListener();

    function getDayInfo(dateString) {
        const date = new Date(dateString); // Date - созданный объект с методами и тд
        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    
        const dayOfWeek = daysOfWeek[date.getDay()]; // getDay() возвращает день недели определенного дня
        const weekNumber = Math.ceil((date.getDate() + 6 - date.getDay()) / 7); // getMonth() возвращает месяц определенного дня
                                // + вычисление номера недели по формуле   
        const month = months[date.getMonth()];
        const year = date.getFullYear(); // getFullYear() возвращает год определенного дня
    
        return dayOfWeek + ', ' + weekNumber + ' неделя ' + month + ' ' + year + ' года';

    }
    const cardElements = document.querySelectorAll('.card');

    cardElements.forEach((card) => {
        const addedDateElement = card.querySelector('.added-date');
        const addedDate = addedDateElement.textContent;
        const formattedDate = getDayInfo(addedDate);
        addedDateElement.textContent = formattedDate;
    });

});
