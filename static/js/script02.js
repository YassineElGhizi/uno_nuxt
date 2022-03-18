(function($) {
  $("#submit_search").on('click', function() {
    if ($("#search_selector").val() != '' && $("#search_selector").val().length > 0) {
      $("#form_search").submit();
    }
  });

  /*$("#search_selector").on('focusout', function() {
       $("#search_card").attr("class", "card shadow-sm border rounded-pill pr-0 w-90");
       $("#search_body").css("display", "none");
       $("#slider_image_selector").css("visibility", "visible");
   });*/


  $("#search_selector").on('input', function(event) {
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
        var search_html = '';
        console.log(data);
        if (data.search_resultat) {

          if (data.search_resultat.length == 0) {
            image = "http://127.0.0.1:8000/assets/images/No_data.svg";
            search_html += '<div class="row justify-content-center text-success text-center" style="padding: 5px 0;"><div class="col-12" ><div class="row justify-content-center" ><img src="' + image + '" alt="" style="width: 20rem;"></div></div><div class="ul-widget4__pic-icon"><i class="far fa-times-circle"></i></div><p class="ul-widget4__title font-weight-semibold  text-20">Aucun résultat</p></div>';
            search_html += '<div class="d-flex justify-content-center py-3"><strong class="text-16 text-success mr-2">trying To search for : </strong><a href="#" class="font-weight-semibold  text-default text-14 t-font-boldest mr-3">iPhone 12 pro</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Galaxy S30</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Canon EOS</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Huawei P30</a></div>';

            $("#search_card").attr("class", "card shadow-sm border pr-0 w-90 clicked");
            $("#search_card").css("border-radius", "1.25rem");
            $("#slider_image_selector").css("visibility", "hidden");
            $("#search_body").css("display", "block");
          } else {

            data.search_resultat.forEach(function(resultat) {

              image = "http://127.0.0.1:8000/assets/images" + "/" + resultat.images[0];
              url = "http://127.0.0.1:8000/Product_Details" + "/" + resultat.slug;

              search_html += '<a href = "' + url + '"><div class = "ul-widget10__item  ul-widget4__users" > <div class = "ul-widget4__img ml-3" >';
              search_html += '<img  src="' + image + '" id = "userDropdown" style = "width: 1.75rem;" alt = ""data-toggle = "dropdown" aria - haspopup = "true" ariaexpanded = "false" ></div>';
              search_html += '<div class = "ul-widget2__info" ><p class = "ul-widget2__title" >' + resultat.title.toLowerCase().replace(event.target.value, '<strong class="text-success">' + event.target.value + '</strong>') + '</p> </div> </div></a>';

            });

            search_html += '<div class="d-flex justify-content-center py-3"><strong class="text-16 text-success mr-2">Trending search : </strong><a href="#" class="font-weight-semibold  text-default text-14 t-font-boldest mr-3">iPhone 12 pro</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Galaxy S30</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Canon EOS</a><a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">Huawei P30</a></div>';


            $("#search_card").attr("class", "card shadow-sm border pr-0 w-90 clicked");
            $("#search_card").css("border-radius", "1.25rem");
            $("#slider_image_selector").css("visibility", "hidden");
            $("#search_body").css("display", "block");
          }

          $('#search_resultat_slector').html(search_html);


        } else {
          $('#search_resultat_slector').html(search_html);
          $("#search_card").attr("class", "card shadow-sm border rounded-pill pr-0 w-90");
          $("#search_body").css("display", "none");
          $("#slider_image_selector").css("visibility", "visible");
        }
      }
    });

  });
})(jQuery);
