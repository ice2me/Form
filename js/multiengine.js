// Как только страничка загрузилась 
window.onload = function() {
    // проверяем поддерживает ли браузер FormData 
    if (!window.FormData) {
        alert("Браузер не поддерживает загрузку файлов на этом сайте");
    }
}
var url = "https://ice2me.github.io/Form/";

jQuery(document).ready(function() {
    // =validation
    var errorTxt = 'Ошибка отправки';
    jQuery("#sendform").validate({
        submitHandler: function(form) {
            var form = document.forms.sendform,
                formData = new FormData(form),
                xhr = new XMLHttpRequest();

            xhr.open("POST", "multisend.php");

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        // jQuery("#sendform").html('<p class="thank">Данные отправлены!<p>');
                        $(location).attr('href', url);
                    }
                }
            };
            xhr.send(formData);
        }
    });
})

function sendSuccess(callback) {
    jQuery(callback).find("form fieldset").html(thank);
    startClock();
}