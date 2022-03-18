(function($) {
  $("#submit_header_search").on('click', function() {
    if ($("#header_search_selector").val() != '' && $("#header_search_selector").val().length > 0) {
      $("#form_header_search").submit();
    }
  });
  $("#header_search_selector").on('focusout', function() {
    $("#header_search_card").attr("class", "card shadow-sm border rounded-pill pr-0 w-90");
    $("#header_search_body").css("display", "none");
  });
  $("#header_search_selector").on('input', function(event) {
    $.ajax({
      url: '/index/search',
      type: 'post',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": $('input[name="_token"]').val()
      },
      credentials: "same-origin",
      data: JSON.stringify({
        search_string: event.target.value
      }),
      error: function(data, status) {
        console.log(status);
        console.log(data);
      },
      success: function(data, status) {
        var header_search_html = '';
        console.log(data);
        if (data.search_resultat) {

          if (data.search_resultat.length == 0) {
            image = "http://127.0.0.1:8000/assets/images/No_data.svg";
            header_search_html += '<div class="row justify-content-center text-success text-center" style="padding: 5px 0;"><div class="col-12" ><img src="' + image + '" alt=""></div><div class="ul-widget4__pic-icon"><i class="far fa-times-circle"></i></div><p class="ul-widget4__title font-weight-semibold  text-20">Aucun résultat</p></div>';
            header_search_html += '<div class="d-flex justify-content-center py-3"><strong class="text-16 text-success mr-2">trying To search for : </strong><a href="#" class="font-weight-semibold  text-default text-14 t-font-boldest mr-3">iPhone 12 pro</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Galaxy S30</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Canon EOS</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Huawei P30</a></div>';

            $("#header_search_card").attr("class", "card shadow-sm border pr-0 w-90 clicked");
            $("#header_search_card").css("border-radius", "1.25rem");
            $("#header_search_body").css("display", "block");
          } else {

            data.search_resultat.forEach(function(resultat) {

              image = "http://127.0.0.1:8000/assets/images" + "/" + resultat.images[0];

              header_search_html += '<div class = "ul-widget10__item  ul-widget4__users" > <div class = "ul-widget4__img ml-3" >';
              header_search_html += '<img  src="' + image + '" id = "userDropdown" style = "width: 1.75rem;" alt = ""data-toggle = "dropdown" aria - haspopup = "true" ariaexpanded = "false" ></div>';
              header_search_html += '<div class = "ul-widget2__info" ><a href = "#" class = "ul-widget2__title" >' + resultat.title.toLowerCase().replace(event.target.value, '<strong class="text-success">' + event.target.value + '</strong>') + '</a> </div> </div>';

            });

            $("#header_search_card").attr("class", "card shadow-sm border pr-0 w-90 clicked");
            $("#header_search_card").css("border-radius", "1.25rem");
            $("#header_search_body").css("display", "block");
          }

          $('#header_search_resultat_slector').html(header_search_html);


        } else {
          $('#header_search_resultat_slector').html(header_search_html);
          $("#header_search_card").attr("class", "card shadow-sm border rounded-pill pr-0 w-90");
          $("#header_search_body").css("display", "none");
        }
      }
    });

  });
})(jQuery);
