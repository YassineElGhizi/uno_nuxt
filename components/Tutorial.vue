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
                              <Carousel></Carousel>
                            </div>
                          </div>
                        </div>
                      </div>

                      <LazyAd></LazyAd>

                    </div>
                  </div>
                  <Pane></Pane>
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
                                  <li><a href="#">T-shirts, tops &amp; chemisiers</a></li>
                                  <li><a href="#">Robes</a></li>
                                  <li><a href="#">Pantalon</a></li>
                                  <li><a href="#">Jeans</a></li>
                                  <li><a href="#">Maillots de bains</a></li>
                                  <li><a href="#">Combinaisons, Combishorts &amp; Salopettes</a></li>
                                  <li><a href="#">Jupes</a></li>
                                  <li><a href="#">Shorts</a></li>
                                  <li><a href="#">Ensemble Pyjama</a></li>
                                  <li><a href="#">Lingerie</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">CHAUSSURES FEMME</p>
                                <ul class="links">
                                  <li><a href="#">Sandales</a></li>
                                  <li><a href="#">Baskets</a></li>
                                  <li><a href="#">Escarpins</a></li>
                                  <li><a href="#">Mocassins</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">VÊTEMENTS HOMME</p>
                                <ul class="links">
                                  <li><a href="#">T-Shirts</a></li>
                                  <li><a href="#">Polos</a></li>
                                  <li><a href="#">Chemises</a></li>
                                  <li><a href="#">Pulls &amp; Gilets</a></li>
                                  <li><a href="#">Sous-vêtements</a></li>
                                  <li><a href="#">Pantalons</a></li>
                                  <li><a href="#">Jeans</a></li>
                                  <li><a href="#">Shorts</a></li>
                                  <li><a href="#">Maillots de bain</a></li>
                                  <li><a href="#">Pyjamas</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">CHAUSSURES HOMME</p>
                                <ul class="links">
                                  <li><a href="#">Baskets</a></li>
                                  <li><a href="#">Chaussures de ville</a></li>
                                  <li><a href="#">Mocassins</a></li>
                                  <li><a href="#">Sandales</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">MODE ENFANT</p>
                                <ul class="links">
                                  <li><a href="#">Mode Fille</a></li>
                                  <li><a href="#">Mode Garçon</a></li>
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
                                  <li><a href="#">Montres</a></li>
                                  <li><a href="#">Sacs à main &amp; portefeuilles</a></li>
                                  <li><a href="#">Lunettes de soleil</a></li>
                                  <li><a href="#">Bijoux</a></li>
                                  <li><a href="#">Ceintures</a></li>
                                  <li><a href="#">Chapeaux &amp; casquettes</a></li>
                                  <li><a href="#">Foulards &amp; Écharpes</a></li>
                                  <li><a href="#">Gants &amp; Mitaines</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCESSOIRES HOMME</p>
                                <ul class="links">
                                  <li><a href="#">Montres</a></li>
                                  <li><a href="#">Lunettes de soleil</a></li>
                                  <li><a href="#">Chapeaux &amp; casquettes</a></li>
                                  <li><a href="#">Portefeuilles</a></li>
                                  <li><a href="#">Bijoux</a></li>
                                  <li><a href="#">Ceintures</a></li>
                                  <li><a href="#">Cravates</a></li>
                                  <li><a href="#">Écharpes</a></li>
                                  <li><a href="#">Gants</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">BAGAGE &amp; SACS DE VOYAGE</p>
                                <ul class="links">
                                  <li><a href="#">Sacs à dos</a></li>
                                  <li><a href="#">Bagage</a></li>
                                  <li><a href="#">Sacs Bandoulière</a></li>
                                  <li><a href="#">Accessoires de voyage</a></li>
                                  <li><a href="#">Sacs de sport</a></li>
                                  <li><a href="#">Parapluies</a></li>
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
                                  <li><a href="#">Casseroles, Poêles &amp; Faitouts</a></li>
                                  <li><a href="#">Cocottes &amp; Plats de Cuisson</a></li>
                                  <li><a href="#">Accessoires coutellerie et couteaux</a></li>
                                  <li><a href="#">Ustensiles de cuisine</a></li>
                                  <li><a href="#">Stockage et organisation</a></li>
                                  <li><a href="#">Fontaines d&#039;Eau, Filtres &amp; Cartouches</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">BRICOLAGE &amp; RÉNOVATION</p>
                                <ul class="links">
                                  <li><a href="#">Quincaillerie</a></li>
                                  <li><a href="#">Électricité</a></li>
                                  <li><a href="#">Outils de mesure et de mise en page</a></li>
                                  <li><a href="#">Plomberie &amp; Chauffe-Eau</a></li>
                                  <li><a href="#">Peintures, Outils &amp; Traitement des Murs</a></li>
                                  <li><a href="#">Outillage à Main &amp; Électroportatif</a></li>
                                  <li><a href="#">Sécurité &amp; Protection</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">CUISINE &amp; MAISON</p>
                                <ul class="links">
                                  <li><a href="#">Meubles</a></li>
                                  <li><a href="#">Literie</a></li>
                                  <li><a href="#">Salle de bain</a></li>
                                  <li><a href="#">Lampes, Luminaires &amp; Plafonniers</a></li>
                                  <li><a href="#">Décoration de Maison</a></li>
                                  <li><a href="#">Rangements &amp; Organisation</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">FOURNITURES SCOLAIRES &amp; BUREAU</p>
                                <ul class="links">
                                  <li><a href="#">Électroniques de bureau</a></li>
                                  <li><a href="#">Papeterie &amp; Petites Fournitures</a></li>
                                  <li><a href="#">Mobilier de bureau et éclairage</a></li>
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
                                  <li><a href="#">Téléphones Android</a></li>
                                  <li><a href="#">iPhones</a></li>
                                  <li><a href="#">Téléphones Basiques</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCÉSSOIRES TÉLÉPHONE</p>
                                <ul class="links">
                                  <li><a href="#">Films &amp; Protections d&#039;écran</a></li>
                                  <li><a href="#">Batteries Téléphones</a></li>
                                  <li><a href="#">Ecouteurs Bluetooth</a></li>
                                  <li><a href="#">Chargeurs Téléphones</a></li>
                                  <li><a href="#">Câbles</a></li>
                                  <li><a href="#">Accessoires de voiture</a></li>
                                  <li><a href="#">Cartes mémoires</a></li>
                                  <li><a href="#">Smartwatch</a></li>
                                  <li><a href="#">Casques de réalité virtuelle</a></li>
                                  <li><a href="#">Objectifs pour Appareil Photo</a></li>
                                  <li><a href="#">Accessoires pour telephone</a></li>
                                  <li><a href="#">Powerbank</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TABLETTES</p>
                                <ul class="links">
                                  <li><a href="#">Tablettes</a></li>
                                  <li><a href="#">Accessoires pour tablette</a></li>
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
                                  <li><a href="#">Robots Cuisine</a></li>
                                  <li><a href="#">Blenders</a></li>
                                  <li><a href="#">Mixeurs &amp; Batteurs</a></li>
                                  <li><a href="#">Bouilloires</a></li>
                                  <li><a href="#">Café, Thé &amp; Expresso</a></li>
                                  <li><a href="#">Centrifugeuses</a></li>
                                  <li><a href="#">Fours &amp; Grille-pain</a></li>
                                  <li><a href="#">Micro-ondes</a></li>
                                  <li><a href="#">Friteuses</a></li>
                                  <li><a href="#">Fers à Repasser</a></li>
                                  <li><a href="#">Aspirateurs</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">GROS ÉLECTROMÉNAGER</p>
                                <ul class="links">
                                  <li><a href="#">Climatiseurs</a></li>
                                  <li><a href="#">Réfrigérateurs</a></li>
                                  <li><a href="#">Congélateurs</a></li>
                                  <li><a href="#">Machines à Laver</a></li>
                                  <li><a href="#">Lave-vaisselle</a></li>
                                  <li><a href="#">Cuisinières</a></li>
                                  <li><a href="#">Plaques de Cuisson</a></li>
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
                                  <li><a href="#">Probook</a></li>
                                  <li><a href="#">Windows</a></li>
                                  <li><a href="#">Gaming</a></li>
                                  <li><a href="#">Mac</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ORDINATEUR FIXE &amp; ECRANS</p>
                                <ul class="links">
                                  <li><a href="#">Tout-en-un</a></li>
                                  <li><a href="#">Unités centrales</a></li>
                                  <li><a href="#">Ecran</a></li>
                                  <li><a href="#">Imprimantes</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCESSOIRES</p>
                                <ul class="links">
                                  <li><a href="#">Souris</a></li>
                                  <li><a href="#">Clavier</a></li>
                                  <li><a href="#">Casques</a></li>
                                  <li><a href="#">Webcam</a></li>
                                  <li><a href="#">Enceintes PC</a></li>
                                  <li><a href="#">Accessoires mac</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">STOCKAGE</p>
                                <ul class="links">
                                  <li><a href="#">Disque Dur Externe</a></li>
                                  <li><a href="#">SSD Externe</a></li>
                                  <li><a href="#">Clé USB</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">COMPOSANTS PC</p>
                                <ul class="links">
                                  <li><a href="#">Processeurs</a></li>
                                  <li><a href="#">Lecteurs Optique Externe</a></li>
                                  <li><a href="#">Cartes Son Externes</a></li>
                                  <li><a href="#">Ventilateurs &amp; Refroidissement</a></li>
                                  <li><a href="#">Cartes Graphiques</a></li>
                                  <li><a href="#">Disques Durs Internes</a></li>
                                  <li><a href="#">Disques Durs SSD</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">RÉSEAUX</p>
                                <ul class="links">
                                  <li><a href="#">Modems</a></li>
                                  <li><a href="#">Routeurs</a></li>
                                  <li><a href="#">Répéteurs</a></li>
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
                                  <li><a href="#">Café, thé et cacao</a></li>
                                  <li><a href="#">Lait</a></li>
                                  <li><a href="#">Eau</a></li>
                                  <li><a href="#">Boissons gazeuses</a></li>
                                  <li><a href="#">Jus</a></li>
                                  <li><a href="#">Sirops</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ÉPICERIE SALÉE</p>
                                <ul class="links">
                                  <li><a href="#">Chips</a></li>
                                  <li><a href="#">Aliments en conserve, en pot et emballés</a></li>
                                  <li><a href="#">Sauces &amp; Condiments</a></li>
                                  <li><a href="#">Pâtes &amp; Nouilles</a></li>
                                  <li><a href="#">Huiles</a></li>
                                  <li><a href="#">Riz &amp; Féculents</a></li>
                                  <li><a href="#">Épices &amp; Bouillons</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ÉPICERIE SUCRÉE</p>
                                <ul class="links">
                                  <li><a href="#">Bonbons &amp; Chocolats</a></li>
                                  <li><a href="#">Biscuiterie</a></li>
                                  <li><a href="#">Pâtisserie &amp; Desserts</a></li>
                                  <li><a href="#">Sucres</a></li>
                                  <li><a href="#">Céréales</a></li>
                                  <li><a href="#">Margarine, confitures, miel et tartinades</a></li>
                                  <li><a href="#">Fruits Secs</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">PRODUITS DOMESTIQUES</p>
                                <ul class="links">
                                  <li><a href="#">Lessive</a></li>
                                  <li><a href="#">Vaisselle</a></li>
                                  <li><a href="#">Désodorisants</a></li>
                                  <li><a href="#">Nettoyage</a></li>
                                  <li><a href="#">Papier &amp; Plastique</a></li>
                                  <li><a href="#">Articles de toilette</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">FOURNITURES POUR ANIMAUX</p>
                                <ul class="links">
                                  <li><a href="#">Chats</a></li>
                                  <li><a href="#">Chiens</a></li>
                                  <li><a href="#">Oiseaux</a></li>
                                  <li><a href="#">Poissons et animaux aquatiques</a></li>
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
                                  <li><a href="#">Musculation</a></li>
                                  <li><a href="#">Football</a></li>
                                  <li><a href="#">Exercice et remise en forme</a></li>
                                  <li><a href="#">Sports d&#039;équipe</a></li>
                                  <li><a href="#">Natation</a></li>
                                  <li><a href="#">Vêtements</a></li>
                                  <li><a href="#">Chasse &amp; Pêche</a></li>
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
                                  <li><a href="#">Vélos (VTT,VTC...)</a></li>
                                  <li><a href="#">Casques &amp; accessoires</a></li>
                                  <li><a href="#">Outils de vélo &amp; entretien</a></li>
                                  <li><a href="#">Vêtements</a></li>
                                  <li><a href="#">Accessoires</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">SURVÊTEMENTS DE SPORT</p>
                                <ul class="links">
                                  <li><a href="#">Homme</a></li>
                                  <li><a href="#">Femme</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TOP MARQUES</p>
                                <ul class="links">
                                  <li><a href="#">WeekWiki</a></li>
                                  <li><a href="#">Hitchonson</a></li>
                                  <li><a href="#">Scoutyway</a></li>
                                  <li><a href="#">Nike</a></li>
                                  <li><a href="#">Adidas</a></li>
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
                                  <li><a href="#">Smart TV</a></li>
                                  <li><a href="#">TV 4K</a></li>
                                  <li><a href="#">TV 32&quot;</a></li>
                                  <li><a href="#">TV 40&quot; à 55&quot;</a></li>
                                  <li><a href="#">TV Extra-large</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">ACCESSOIRES TV</p>
                                <ul class="links">
                                  <li><a href="#">Récepteurs et IPTV</a></li>
                                  <li><a href="#">TV box</a></li>
                                  <li><a href="#">Supports TV</a></li>
                                  <li><a href="#">Meubles TV</a></li>
                                  <li><a href="#">Câbles et adaptateurs</a></li>
                                  <li><a href="#">Projecteurs</a></li>
                                  <li><a href="#">Écrans de projection</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">APPAREIL PHOTO</p>
                                <ul class="links">
                                  <li><a href="#">Caméras digitales</a></li>
                                  <li><a href="#">Caméras d&#039;action</a></li>
                                  <li><a href="#">Accessoires</a></li>
                                  <li><a href="#">Univers espion</a></li>
                                  <li><a href="#">Vidéo</a></li>
                                  <li><a href="#">Video Surveillance</a></li>
                                  <li><a href="#">Jumelles et lunettes</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">AUDIO</p>
                                <ul class="links">
                                  <li><a href="#">Home cinéma</a></li>
                                  <li><a href="#">Microphones</a></li>
                                  <li><a href="#">Haut-parleurs</a></li>
                                  <li><a href="#">Radio cassette &amp; Lecteurs CD</a></li>
                                  <li><a href="#">Radio réveil</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 p-3 pt-0">
                                <p class="text-success font-weight-semibold  text-14 t-font-boldest text--cap border-bottom-success d-inline-block">TOP MARQUES</p>
                                <ul class="links">
                                  <li><a href="#">Samsung</a></li>
                                  <li><a href="#">LG</a></li>
                                  <li><a href="#">Sony</a></li>
                                  <li><a href="#">Daiko</a></li>
                                  <li><a href="#">Philips</a></li>
                                  <li><a href="#">Moulinex</a></li>
                                  <li><a href="#">Taurus</a></li>
                                  <li><a href="#">Echolink</a></li>
                                  <li><a href="#">Découvrez d&#039;autres produits</a></li>
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


<script>
import axios from 'axios'
export default {
  computed:{
    categories(){
      return this.$store.getters["categories/getData"]
    }
  },
  async fetch() {
    await axios.get('http://localhost:8000/api/categories').then( (res) => {
      this.$store.dispatch('categories/getData',res.data)
      console.log('res' , res.data)
    })
  },

}
</script>


<style>
body{
  zoom:83% !important;
}

.main-content-wrap {
  background-color: white !important;
}

.text-success {
  color: #03A84D !important;
}

.btn-success:hover, .btn-outline-success:hover {
  background: #03A84D !important;
  box-shadow: 0 px 25px -8px #4caf50;
  border-color: #03A84D !important;
}
</style>
