document.addEventListener('DOMContentLoaded', function() {
    //Инициализация слайдера
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
    // Создание табов
    document.querySelectorAll('.work__button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.work__button').forEach(function(styleBtn) {
                styleBtn.classList.remove('is-active')
            });
            this.classList.add('is-active');
            document.querySelectorAll('.work__slide').forEach(function(tabContent) {
                tabContent.classList.remove('work__slide-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('work__slide-active')
        })
    });
    //Создание аккордеона
    $(function() {
        $("#accordion").accordion({
            heightStyle: "content",
            collapsible: true,
            animate: 300,
            icons: false,
        });
    });
    //Burger-menu
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#burger__list').classList.add('active');

        document.querySelector('.burger__btn').addEventListener('click', function() {
            document.querySelector('#burger__list').classList.remove('active');
        });
    });
})