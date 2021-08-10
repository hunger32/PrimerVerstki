var initialized = false;

function init() {
    if (initialized) return;
    initialized = true;
    $('.owl-carousel').owlCarousel();
    $("div.dropdown").click(function() {
        let openClass = 'open',
            closedClass = 'closed',
            closedSpan= 'bar-closed',
            openSpan= 'bar-open',
            htmlScroll = $('html').scrollTop(),
            bodyScrollStopClass = 'scroll-stop';
        if ($(this).hasClass(openClass)) {
            $(this).removeClass(openClass);
            $(this).addClass(closedClass);
            $('span.dropdown-span').removeClass(openSpan);
            $('span.dropdown-span').addClass(closedSpan);
            $('body').removeClass(bodyScrollStopClass);
            $(".dropdown-container").fadeOut("fast", function(){
            });
        } else {
            $(this).removeClass(closedClass);
            $(this).addClass(openClass);
            $('span.dropdown-span').removeClass(closedSpan);
            $('span.dropdown-span').addClass(openSpan);
            $('body').addClass(bodyScrollStopClass);
            $('body, html').scrollTop(htmlScroll);
            $(".dropdown-container").fadeIn("fast", function(){
            });
        }
    });
    let acc = document.getElementsByClassName("accordion-wrapper");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.lastElementChild;
            let button = this.firstElementChild;
            let tmp = button.lastElementChild;
            let tmp2 = tmp.firstElementChild;
            let triangle = tmp2.lastElementChild;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.opacity = 0;
                panel.style.marginBottom = 0;
                button.style.paddingBottom = 27 + "px";
                triangle.classList.toggle("triangle-open");
                triangle.classList.toggle("triangle-closed");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.opacity = 1;
                panel.style.marginBottom = 27 + "px";
                button.style.paddingBottom = 11 + "px";
                triangle.classList.toggle("triangle-closed");
                triangle.classList.toggle("triangle-open"); 
            }
        });
    }
}

$(document).ready(function () {

    $('.logo-slider').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:30, //Отступ от элемента справа в 50px
        dots: false,
        center:true,
        items:2,
        responsive:{
            575:{
                items:3
            },
            768:{
                items:4
            },
            991:{
                items:4
            },
            1199:{
                items:5
            }
        }
    });
    if ('readyState' in document && document.readyState == 'complete') {
        init();
    }

    window.addEventListener('load', function (e) {
        init();
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKGluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoKTtcclxuICAgICQoXCJkaXYuZHJvcGRvd25cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IG9wZW5DbGFzcyA9ICdvcGVuJyxcclxuICAgICAgICAgICAgY2xvc2VkQ2xhc3MgPSAnY2xvc2VkJyxcclxuICAgICAgICAgICAgY2xvc2VkU3Bhbj0gJ2Jhci1jbG9zZWQnLFxyXG4gICAgICAgICAgICBvcGVuU3Bhbj0gJ2Jhci1vcGVuJyxcclxuICAgICAgICAgICAgaHRtbFNjcm9sbCA9ICQoJ2h0bWwnKS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgYm9keVNjcm9sbFN0b3BDbGFzcyA9ICdzY3JvbGwtc3RvcCc7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3Mob3BlbkNsYXNzKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoY2xvc2VkQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKCdzcGFuLmRyb3Bkb3duLXNwYW4nKS5yZW1vdmVDbGFzcyhvcGVuU3Bhbik7XHJcbiAgICAgICAgICAgICQoJ3NwYW4uZHJvcGRvd24tc3BhbicpLmFkZENsYXNzKGNsb3NlZFNwYW4pO1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoYm9keVNjcm9sbFN0b3BDbGFzcyk7XHJcbiAgICAgICAgICAgICQoXCIuZHJvcGRvd24tY29udGFpbmVyXCIpLmZhZGVPdXQoXCJmYXN0XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoY2xvc2VkQ2xhc3MpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgICAgICQoJ3NwYW4uZHJvcGRvd24tc3BhbicpLnJlbW92ZUNsYXNzKGNsb3NlZFNwYW4pO1xyXG4gICAgICAgICAgICAkKCdzcGFuLmRyb3Bkb3duLXNwYW4nKS5hZGRDbGFzcyhvcGVuU3Bhbik7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhib2R5U2Nyb2xsU3RvcENsYXNzKTtcclxuICAgICAgICAgICAgJCgnYm9keSwgaHRtbCcpLnNjcm9sbFRvcChodG1sU2Nyb2xsKTtcclxuICAgICAgICAgICAgJChcIi5kcm9wZG93bi1jb250YWluZXJcIikuZmFkZUluKFwiZmFzdFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxldCBhY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWNjb3JkaW9uLXdyYXBwZXJcIik7XHJcbiAgICBsZXQgaTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSB0aGlzLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBsZXQgdG1wID0gYnV0dG9uLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGxldCB0bXAyID0gdG1wLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBsZXQgdHJpYW5nbGUgPSB0bXAyLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIHBhbmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUucGFkZGluZ0JvdHRvbSA9IDI3ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgdHJpYW5nbGUuY2xhc3NMaXN0LnRvZ2dsZShcInRyaWFuZ2xlLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICB0cmlhbmdsZS5jbGFzc0xpc3QudG9nZ2xlKFwidHJpYW5nbGUtY2xvc2VkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAyNyArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5wYWRkaW5nQm90dG9tID0gMTEgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB0cmlhbmdsZS5jbGFzc0xpc3QudG9nZ2xlKFwidHJpYW5nbGUtY2xvc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdHJpYW5nbGUuY2xhc3NMaXN0LnRvZ2dsZShcInRyaWFuZ2xlLW9wZW5cIik7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKCcubG9nby1zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDp0cnVlLCAvL9CX0LDRhtC40LrQu9C40LLQsNC10Lwg0YHQu9Cw0LnQtNC10YBcclxuICAgICAgICBtYXJnaW46MzAsIC8v0J7RgtGB0YLRg9C/INC+0YIg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0YDQsNCy0LAg0LIgNTBweFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlcjp0cnVlLFxyXG4gICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgIDU3NTp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczozXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczo0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5MTp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczo0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDExOTk6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6NVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoJ3JlYWR5U3RhdGUnIGluIGRvY3VtZW50ICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
