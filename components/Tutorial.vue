<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="app-admin-wrap layout-sidebar-large clearfix">
    <Navbar></Navbar>

      <div class="main-content-wrap  d-flex flex-column   flex-grow-1">

        <div class="main-content">
          <section>
            <LazySearch></LazySearch>
            <div class="row justify-content-center mb-3" id='index_content'>
              <div class="col col-xl-2 col-lg-2 col-md-2 p-0">
                <div class="card border h-100">
                  <div class="card-body p-3 ">
                    <div class="card-title" style="margin-bottom:0.6rem">
                      <i class="fas fa-list text-18 text-success font-weight-600 mr-3"></i>
                      <span class="text-22 font-weight-800">Catégories</span>
                    </div>
                    <CategoryContainer></CategoryContainer>
                  </div>
                </div>
              </div>

              <div class="col col-xl-9 col-lg-9 col-md-3 pr-0">
                <div class="tab-content p-0 pl-2">
                  <div class="tab-pane show active" id="index-Home">
                    <div class="row">
                      <div class="col-9">
                        <div class="card border" id='slider_image_selector'>
                          <div class="card-img">
                            <div class="carousel_wrap">
                              <div id="carouselSliderIndicators" class="carousel carousel-fade" data-ride="carousel">
                                <ol class="carousel-indicators">
                                  <li data-target="#carouselSliderIndicators" data-slide-to="0" class="active"></li>
                                  <li data-target="#carouselSliderIndicators" data-slide-to="1" class=""></li>
                                  <li data-target="#carouselSliderIndicators" data-slide-to="2" class=""></li>
                                </ol>
                                <div class="carousel-inner">
                                  <div class="carousel-item active">
                                    <img class="d-block card-img w-100 " src="https://ma.jumia.is/cms/000_2021/Week10/712x384.jpg" alt="First slide">
                                  </div>
                                  <div class="carousel-item">
                                    <img class="d-block card-img w-100 " src="https://ma.jumia.is/cms/000_2021/Week10/Slider/MA_W10_SX_Le-printemps-arrive.jpg" alt="Second slide">
                                  </div>
                                  <div class="carousel-item">
                                    <img class="d-block card-img w-100 " src="https://ma.jumia.is/cms/000_2021/Week10/Slider/MA_SX_Welcome20_02032021.jpg" alt="Third slide">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col col-lg-3 col-md-3 p-0">
                        <div class="card card-icon-bg card-icon-bg-primary o-hidden border mr-3">
                          <img class="card-img" src="/images/apple_watch.jpg" alt="Card image">
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-1">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img1.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">SANTÉ &amp; PREMIERS SOINS</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=13">Masques</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=14">Vitamines et compléments alimentaires</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=15">Nutrition sportive</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">MAQUILLAGE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=17">Teint</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=18">Yeux &amp; Sourcils</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=19">Lèvres</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=20">Palettes maquillage</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=21">Ongles</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=22">Pinceaux &amp; accessoires</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">PARFUM</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=24">Parfums Femme</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=25">Parfums Homme</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">SOIN VISAGE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=27">Crèmes et hydratants</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=28">Nettoyants</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=29">Traitements &amp; Masques</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">SOINS CORPS</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=31">Hydratants</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=32">Nettoyants</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=33">Gommages &amp; traitement corporels</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">HYGIÈNE BUCCO DENTAIRE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=35">Bain de bouche</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=36">Blanchiment des dents</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=37">Brosses</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=38">Dentifrice</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">SOIN DES CHEVEUX</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=40">Shampoing</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=41">Conditionneur</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=42">Soins &amp; Masques Capillaires</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=43">Appareils &amp; Outils de Coiffure</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">HOMMES</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=45">Tondeuses à cheveux nez &amp; oreilles</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=46">Soins barbe &amp; moustache</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=47">Crèmes à raser, lotions et gels</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Beauté &amp; Santé</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-2">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img2.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">VÊTEMENTS FEMME</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=49">T-shirts, tops &amp; chemisiers</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=50">Robes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=51">Pantalon</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=52">Jeans</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=53">Maillots de bains</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=54">Combinaisons, Combishorts &amp; Salopettes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=55">Jupes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=56">Shorts</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=57">Ensemble Pyjama</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=58">Lingerie</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">CHAUSSURES FEMME</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=60">Sandales</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=61">Baskets</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=62">Escarpins</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=63">Mocassins</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">VÊTEMENTS HOMME</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=65">T-Shirts</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=66">Polos</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=67">Chemises</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=68">Pulls &amp; Gilets</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=69">Sous-vêtements</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=70">Pantalons</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=71">Jeans</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=72">Shorts</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=73">Maillots de bain</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=74">Pyjamas</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">CHAUSSURES HOMME</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=76">Baskets</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=77">Chaussures de ville</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=78">Mocassins</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=79">Sandales</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">MODE ENFANT</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=81">Mode Fille</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=82">Mode Garçon</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Vêtements &amp; Chaussures</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-3">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img3.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCESSOIRES FEMME</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=84">Montres</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=85">Sacs à main &amp; portefeuilles</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=86">Lunettes de soleil</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=87">Bijoux</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=88">Ceintures</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=89">Chapeaux &amp; casquettes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=90">Foulards &amp; Écharpes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=91">Gants &amp; Mitaines</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCESSOIRES HOMME</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=93">Montres</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=94">Lunettes de soleil</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=95">Chapeaux &amp; casquettes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=96">Portefeuilles</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=97">Bijoux</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=98">Ceintures</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=99">Cravates</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=100">Écharpes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=101">Gants</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">BAGAGE &amp; SACS DE VOYAGE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=103">Sacs à dos</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=104">Bagage</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=105">Sacs Bandoulière</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=106">Accessoires de voyage</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=107">Sacs de sport</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=108">Parapluies</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Accessoires Mode</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-4">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img4.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">CUISINE &amp; ARTS CULINAIRES</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=110">Casseroles, Poêles &amp; Faitouts</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=111">Cocottes &amp; Plats de Cuisson</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=112">Accessoires coutellerie et couteaux</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=113">Ustensiles de cuisine</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=114">Stockage et organisation</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=115">Fontaines d&#039;Eau, Filtres &amp; Cartouches</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">BRICOLAGE &amp; RÉNOVATION</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=117">Quincaillerie</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=118">Électricité</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=119">Outils de mesure et de mise en page</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=120">Plomberie &amp; Chauffe-Eau</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=121">Peintures, Outils &amp; Traitement des Murs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=122">Outillage à Main &amp; Électroportatif</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=123">Sécurité &amp; Protection</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">CUISINE &amp; MAISON</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=125">Meubles</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=126">Literie</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=127">Salle de bain</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=128">Lampes, Luminaires &amp; Plafonniers</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=129">Décoration de Maison</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=130">Rangements &amp; Organisation</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">FOURNITURES SCOLAIRES &amp; BUREAU</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=132">Électroniques de bureau</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=133">Papeterie &amp; Petites Fournitures</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=134">Mobilier de bureau et éclairage</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Maison &amp; Cuisine</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-5">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img5.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TÉLÉPHONE PORTABLE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=136">Téléphones Android</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=137">iPhones</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=138">Téléphones Basiques</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCÉSSOIRES TÉLÉPHONE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=141">Films &amp; Protections d&#039;écran</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=142">Batteries Téléphones</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=143">Ecouteurs Bluetooth</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=144">Chargeurs Téléphones</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=145">Câbles</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=146">Accessoires de voiture</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=147">Cartes mémoires</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=148">Smartwatch</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=149">Casques de réalité virtuelle</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=150">Objectifs pour Appareil Photo</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=308">Accessoires pour telephone</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=310">Powerbank</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TABLETTES</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=152">Tablettes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=153">Accessoires pour tablette</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TÉLÉPHONES FIXES</p>
                                <ul class="links">
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Téléphone &amp; Tablette</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-6">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img6.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">PETIT ÉLECTROMÉNAGER</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=156">Robots Cuisine</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=157">Blenders</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=158">Mixeurs &amp; Batteurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=159">Bouilloires</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=160">Café, Thé &amp; Expresso</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=161">Centrifugeuses</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=162">Fours &amp; Grille-pain</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=163">Micro-ondes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=164">Friteuses</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=165">Fers à Repasser</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=166">Aspirateurs</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">GROS ÉLECTROMÉNAGER</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=168">Climatiseurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=169">Réfrigérateurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=170">Congélateurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=171">Machines à Laver</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=172">Lave-vaisselle</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=173">Cuisinières</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=174">Plaques de Cuisson</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Électroménager</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-7">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img7.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ORDINATEURS</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=176">Probook</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=177">Windows</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=178">Gaming</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=307">Mac</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ORDINATEUR FIXE &amp; ECRANS</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=180">Tout-en-un</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=181">Unités centrales</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=182">Ecran</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=183">Imprimantes</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCESSOIRES</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=185">Souris</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=186">Clavier</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=187">Casques</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=188">Webcam</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=189">Enceintes PC</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=309">Accessoires mac</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">STOCKAGE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=191">Disque Dur Externe</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=192">SSD Externe</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=193">Clé USB</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">COMPOSANTS PC</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=195">Processeurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=196">Lecteurs Optique Externe</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=197">Cartes Son Externes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=198">Ventilateurs &amp; Refroidissement</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=199">Cartes Graphiques</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=200">Disques Durs Internes</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=201">Disques Durs SSD</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">RÉSEAUX</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=203">Modems</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=204">Routeurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=205">Répéteurs</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Informatique</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-8">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img8.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">EAUX, BOISSONS</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=207">Café, thé et cacao</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=208">Lait</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=209">Eau</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=210">Boissons gazeuses</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=211">Jus</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=212">Sirops</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ÉPICERIE SALÉE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=214">Chips</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=215">Aliments en conserve, en pot et emballés</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=216">Sauces &amp; Condiments</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=217">Pâtes &amp; Nouilles</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=218">Huiles</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=219">Riz &amp; Féculents</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=220">Épices &amp; Bouillons</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ÉPICERIE SUCRÉE</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=222">Bonbons &amp; Chocolats</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=223">Biscuiterie</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=224">Pâtisserie &amp; Desserts</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=225">Sucres</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=226">Céréales</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=227">Margarine, confitures, miel et tartinades</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=228">Fruits Secs</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">PRODUITS DOMESTIQUES</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=230">Lessive</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=231">Vaisselle</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=232">Désodorisants</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=233">Nettoyage</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=234">Papier &amp; Plastique</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=235">Articles de toilette</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">FOURNITURES POUR ANIMAUX</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=237">Chats</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=238">Chiens</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=239">Oiseaux</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=240">Poissons et animaux aquatiques</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Supermarché</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-9">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img9.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">SPORT &amp; FITNESS</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=242">Musculation</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=243">Football</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=244">Exercice et remise en forme</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=245">Sports d&#039;équipe</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=246">Natation</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=247">Vêtements</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=248">Chasse &amp; Pêche</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">LOISIRS EN PLEIN AIR</p>
                                <ul class="links">
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">CYCLISME</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=255">Vélos (VTT,VTC...)</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=256">Casques &amp; accessoires</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=257">Outils de vélo &amp; entretien</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=258">Vêtements</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=259">Accessoires</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">SURVÊTEMENTS DE SPORT</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=261">Homme</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=262">Femme</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TOP MARQUES</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=264">WeekWiki</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=265">Hitchonson</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=266">Scoutyway</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=267">Nike</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=268">Adidas</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of Sports &amp; Loisirs</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="index-Category-10">
                    <div class="card  o-hidden w-100 p-0">
                      <img class="card-img" src="/images/img10.png" alt="Card image">
                      <div class="card-image-overlay">
                        <div class="row">
                          <div class="col-9 pr-0">
                            <div class="row">
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TÉLÉVISIONS</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=270">Smart TV</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=271">TV 4K</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=272">TV 32&quot;</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=273">TV 40&quot; à 55&quot;</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=274">TV Extra-large</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCESSOIRES TV</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=276">Récepteurs et IPTV</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=277">TV box</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=278">Supports TV</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=279">Meubles TV</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=280">Câbles et adaptateurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=281">Projecteurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=282">Écrans de projection</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">APPAREIL PHOTO</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=284">Caméras digitales</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=285">Caméras d&#039;action</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=286">Accessoires</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=287">Univers espion</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=288">Vidéo</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=289">Video Surveillance</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=290">Jumelles et lunettes</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">AUDIO</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=292">Home cinéma</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=293">Microphones</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=294">Haut-parleurs</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=295">Radio cassette &amp; Lecteurs CD</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=296">Radio réveil</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TOP MARQUES</p>
                                <ul class="links">
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=298">Samsung</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=299">LG</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=300">Sony</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=301">Daiko</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=302">Philips</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=303">Moulinex</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=304">Taurus</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=305">Echolink</a></li>
                                  <li><a href="http://127.0.0.1:8000/Products_list?category%5B%5D=306">Découvrez d&#039;autres produits</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-3 pl-0">
                            <p class="font-weight-semibold  text-default text-16 t-font-boldest" style="    white-space: nowrap !important;overflow: hidden !important;text-overflow: ellipsis !important;max-width: 300px;">best store of TV &amp; Hi Tech</p>
                            <div class="row">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </section>
          <!-- Recommended for you Cards-->

          <div class="row justify-content-center mb-3">
            <div class="col col-xl-11 col-lg-11  col-md-12 p-0">
              <div class="card border mb-4">
                <div class="card-body">
                  <div class="card-title">
                    <div class="row justify-content-between border-bottom mb-2">
                      <div class="col-3 border-bottom-success" style="border-bottom: 2px solid #4caf50;">
                        Product popular
                      </div>
                      <div class="col-4 mb-2">
                        <a href="http://127.0.0.1:8000/Products_list">
                          <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                            <span class="ul-btn__text">See all</span>
                            <i class="fas fa-chevron-circle-right ml-1"></i>
                          </button>
                        </a>
                      </div>
                    </div>

                  </div>
                  <section class="product-cart">
                    <div class="row list-grid">
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2Fp%2Fiphone12promaxpromosite_3.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-or-neuf-1-an-de-garantie-66657034" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-or-neuf-1-an-de-garantie-66657034">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    13990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-or-neuf-1-an-de-garantie-66657034">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0003955214_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-earpods-avec-connecteur-lightning-43677374" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-earpods-avec-connecteur-lightning-43677374">
                                <div class="item-title">
                                  accessoires Iphone
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    429.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-earpods-avec-connecteur-lightning-43677374">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743536_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-argent-neuf-1-an-de-garantie-75777247" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-argent-neuf-1-an-de-garantie-75777247">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    13990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-argent-neuf-1-an-de-garantie-75777247">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-laniere-airtag-marine-intense-airtag-loop-deep-navy-uno-maroc_.jpeg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-airtag-loop-deep-navy-17307512" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-airtag-loop-deep-navy-17307512">
                                <div class="item-title">
                                  accessoires Iphone
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    449.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-airtag-loop-deep-navy-17307512">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743536_1_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-argent-neuf-1-an-de-garantie-57688529" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-argent-neuf-1-an-de-garantie-57688529">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    14990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-argent-neuf-1-an-de-garantie-57688529">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-laniere-cuir-airtag-product-red-uno-maroc.jpeg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-cuir-airtag-leather-loop-product-red-78175418" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-cuir-airtag-leather-loop-product-red-78175418">
                                <div class="item-title">
                                  accessoires Iphone
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    549.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-cuir-airtag-leather-loop-product-red-78175418">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005735821_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-128-gb-or-neuf-1-an-de-garantie-67378276" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-128-gb-or-neuf-1-an-de-garantie-67378276">
                                <div class="item-title">
                                  iPhone 12 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    11490.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-128-gb-or-neuf-1-an-de-garantie-67378276">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-porte-cles-airtag-cuir-product-red-uno-maroc.jpeg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-porte-cles-airtag-cuir-product-red-66962824" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-porte-cles-airtag-cuir-product-red-66962824">
                                <div class="item-title">
                                  accessoires Iphone
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    449.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-porte-cles-airtag-cuir-product-red-66962824">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <!-- Most Popular Cards-->
          <div class="row justify-content-center mb-3">
            <div class="col col-xl-11 col-lg-11  col-md-12 p-00">
              <div class="card border mb-4">
                <div class="card-body">
                  <div class="card-title">
                    <div class="row justify-content-between border-bottom mb-2">
                      <div class="col-3 border-bottom-success" style="border-bottom: 2px solid #4caf50;">
                        Recommended for you
                      </div>
                      <div class="col-4 mb-2">
                        <a href="http://127.0.0.1:8000/Products_list">
                          <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                            <span class="ul-btn__text">See all</span>
                            <i class="fas fa-chevron-circle-right ml-1"></i>
                          </button>
                        </a>
                      </div>
                    </div>

                  </div>
                  <section class="product-cart">
                    <div class="row list-grid">
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11promax-gs-1_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-gris-sideral-neuf-1-an-de-garantie-27907832" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-gris-sideral-neuf-1-an-de-garantie-27907832">
                                <div class="item-title">
                                  iPhone 11 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    10990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-gris-sideral-neuf-1-an-de-garantie-27907832">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11promax-v-1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-vert-nuit-neuf-1-an-de-garantie-29423534" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-vert-nuit-neuf-1-an-de-garantie-29423534">
                                <div class="item-title">
                                  iPhone 11 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    10990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-vert-nuit-neuf-1-an-de-garantie-29423534">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-pro-g-1_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-or-neuf-1-an-de-garantie-97193923" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-or-neuf-1-an-de-garantie-97193923">
                                <div class="item-title">
                                  iPhone 11 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    9990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-or-neuf-1-an-de-garantie-97193923">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-pro-v-1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-vert-nuit-neuf-1-an-de-garantie-10508587" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-vert-nuit-neuf-1-an-de-garantie-10508587">
                                <div class="item-title">
                                  iPhone 11 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    9990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-vert-nuit-neuf-1-an-de-garantie-10508587">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-pro-b-1_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-argent-neuf-1-an-de-garantie-63212092" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-argent-neuf-1-an-de-garantie-63212092">
                                <div class="item-title">
                                  iPhone 11 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    9990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-argent-neuf-1-an-de-garantie-63212092">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-pro-g-1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-256-go-or-neuf-1-an-de-garantie-21258316" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-256-go-or-neuf-1-an-de-garantie-21258316">
                                <div class="item-title">
                                  iPhone 11 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    10990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-256-go-or-neuf-1-an-de-garantie-21258316">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-j-1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-256-go-jaune-neuf-1-an-de-garantie-13735388" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-256-go-jaune-neuf-1-an-de-garantie-13735388">
                                <div class="item-title">
                                  iPhone 11
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    10790.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-256-go-jaune-neuf-1-an-de-garantie-13735388">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-n-1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-64-go-noir-neuf-1-an-de-garantie-67565540" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-64-go-noir-neuf-1-an-de-garantie-67565540">
                                <div class="item-title">
                                  iPhone 11
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    6990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-64-go-noir-neuf-1-an-de-garantie-67565540">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-n-1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-128-go-noir-neuf-1-an-de-garantie-39912505" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-128-go-noir-neuf-1-an-de-garantie-39912505">
                                <div class="item-title">
                                  iPhone 11
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    7890.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-128-go-noir-neuf-1-an-de-garantie-39912505">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743524_1_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-or-neuf-1-an-de-garantie-30225254" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-or-neuf-1-an-de-garantie-30225254">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    14990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-or-neuf-1-an-de-garantie-30225254">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743500_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-graphite-neuf-1-an-de-garantie-27061688" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-graphite-neuf-1-an-de-garantie-27061688">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    12990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-graphite-neuf-1-an-de-garantie-27061688">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743500_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-graphite-neuf-1-an-de-garantie-32779684" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-graphite-neuf-1-an-de-garantie-32779684">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    13990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-graphite-neuf-1-an-de-garantie-32779684">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743500_1_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-graphite-neuf-1-an-de-garantie-39436755" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-graphite-neuf-1-an-de-garantie-39436755">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    14990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-graphite-neuf-1-an-de-garantie-39436755">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743528_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-bleu-pacifique-neuf-1-an-de-garantie-88436821" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-bleu-pacifique-neuf-1-an-de-garantie-88436821">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    12990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-bleu-pacifique-neuf-1-an-de-garantie-88436821">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743528_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-bleu-pacifique-neuf-1-an-de-garantie-81622280" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-bleu-pacifique-neuf-1-an-de-garantie-81622280">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    13990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-bleu-pacifique-neuf-1-an-de-garantie-81622280">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743528_1_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-bleu-pacifique-neuf-1-an-de-garantie-60129188" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-bleu-pacifique-neuf-1-an-de-garantie-60129188">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    14990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-bleu-pacifique-neuf-1-an-de-garantie-60129188">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                                      <span class="ul-btn__text">details</span>
                                      <i class="fas fa-chevron-circle-right ml-1"></i>
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <!-- Store Cards-->
          <LazyTopStore></LazyTopStore>




        </div>
        <div class="flex-grow-1"></div>
        <div class="flex-grow-1"></div>
        <Footer></Footer>
      </div>
      <!-- ============ Body content End ============= -->
    </div>

    <!-- ============ Search UI Start ============= -->
    <!-- ============ Search UI Start ============= -->
    <div class="search-ui">
      <div class="search-header">
        <img src="/images/logo.png" alt="" class="logo">
        <button class="search-close btn btn-icon bg-transparent float-right mt-2">
          <i class="i-Close-Window text-22 text-muted"></i>
        </button>
      </div>

      <input type="text" placeholder="Type here" class="search-input" autofocus>

      <div class="search-title">
        <span class="text-muted">Search results</span>
      </div>

      <div class="search-results list-horizontal">
        <div class="list-item col-md-12 p-0">
          <div class="card o-hidden flex-row mb-4 d-flex">
            <div class="list-thumb d-flex">
              <!-- TUMBNAIL -->
              <img src="/images/products/headphone-1.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                <!-- OTHER DATA -->
                <a href="" class="w-40 w-sm-100">
                  <div class="item-title">Headphone 1</div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $300
                  <del class="text-secondary">$400</del>
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  <span class="badge badge-danger">Sale</span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <div class="list-item col-md-12 p-0">
          <div class="card o-hidden flex-row mb-4 d-flex">
            <div class="list-thumb d-flex">
              <!-- TUMBNAIL -->
              <img src="/images/products/headphone-2.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                <!-- OTHER DATA -->
                <a href="" class="w-40 w-sm-100">
                  <div class="item-title">Headphone 1</div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $300
                  <del class="text-secondary">$400</del>
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  <span class="badge badge-primary">New</span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <div class="list-item col-md-12 p-0">
          <div class="card o-hidden flex-row mb-4 d-flex">
            <div class="list-thumb d-flex">
              <!-- TUMBNAIL -->
              <img src="/images/products/headphone-3.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                <!-- OTHER DATA -->
                <a href="" class="w-40 w-sm-100">
                  <div class="item-title">Headphone 1</div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $300
                  <del class="text-secondary">$400</del>
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  <span class="badge badge-primary">New</span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <div class="list-item col-md-12 p-0">
          <div class="card o-hidden flex-row mb-4 d-flex">
            <div class="list-thumb d-flex">
              <!-- TUMBNAIL -->
              <img src="/images/products/headphone-4.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                <!-- OTHER DATA -->
                <a href="" class="w-40 w-sm-100">
                  <div class="item-title">Headphone 1</div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $300
                  <del class="text-secondary">$400</del>
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  <span class="badge badge-primary">New</span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- PAGINATION CONTROL -->
      <div class="col-md-12 mt-5 text-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination d-inline-flex">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </div>
</template>
