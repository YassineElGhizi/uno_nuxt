<template>
  <div class="side-content-wrap rounded-3" style="display: block;">
    <div class="sidebar-left-secondary position-relative w-100 h-auto"
         style="left:auto;top:auto;z-index: auto;border-radius: 10px;border: 1px solid #dee2e6">
      <!-- Submenu Dashboards -->
      <p class="text-success text-22  border-bottom-primary-200 m-1 ml-3">Filter : 56321 results</p>

      <ul class="childNav" data-parent="apps" style="display: block;">
        <SidebarFilteComponent name="Categories"/>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">brands</span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2">
              <select class="custom-select task-manager-list-select mb-2" id="inputGroupSelect01"
                      name="brand[]">
                <option value="">Choose brand ...</option>
                <option value="197">10.or</option>
                <option value="198">Acer</option>
                <option value="199">Adcom</option>
                <option value="200">Airtel</option>
                <option value="201">Alcatel</option>
                <option value="202">Alpha</option>
                <option value="203">Amazon</option>
                <option value="204">AOC</option>
                <option value="205">Apple</option>
                <option value="206">Aqua</option>
                <option value="207">Archos</option>
                <option value="208">Asus</option>
                <option value="209">Benq</option>
                <option value="210">Billion</option>
                <option value="211">Black Shark</option>
                <option value="212">BlackBerry</option>
                <option value="213">Blu</option>
                <option value="214">BQ</option>
                <option value="215">Byond</option>
                <option value="216">Cat</option>
                <option value="217">Celkon</option>
                <option value="218">Centric</option>
                <option value="219">Champion Computers</option>
                <option value="220">ChampOne</option>
                <option value="221">Cherry Mobile</option>
                <option value="222">Comio</option>
                <option value="223">Coolpad</option>
                <option value="224">Creo</option>
                <option value="225">Croma</option>
                <option value="226">Datawind</option>
                <option value="227">Detel</option>
                <option value="228">Dizo</option>
                <option value="229">Docoss</option>
                <option value="230">Elari</option>
                <option value="231">Elephone</option>
                <option value="232">Energizer</option>
                <option value="233">Essential</option>
                <option value="234">Evercoss</option>
                <option value="235">Fairphone</option>
                <option value="236">Flash</option>
                <option value="237">Fly</option>
                <option value="238">GeeksPhone</option>
                <option value="239">General Mobile</option>
                <option value="240">Gionee</option>
                <option value="241">Google</option>
                <option value="242">Homtom</option>
                <option value="243">Honor</option>
                <option value="244">HP</option>
                <option value="245">HTC</option>
                <option value="246">Huawei</option>
                <option value="247">Hyve</option>
                <option value="248">i-mobiles</option>
                <option value="249">iBall</option>
                <option value="250">iBerry</option>
                <option value="251">Idea</option>
                <option value="252">Infinix</option>
                <option value="253">InFocus</option>
                <option value="254">Intex</option>
                <option value="255">iQOO</option>
                <option value="256">Itel</option>
                <option value="257">iVoomi</option>
                <option value="258">Jio</option>
                <option value="259">Jivi</option>
                <option value="260">Jolla</option>
                <option value="261">Josh Mobile</option>
                <option value="262">Karbonn</option>
                <option value="263">Kestrel</option>
                <option value="264">Kodak</option>
                <option value="265">Kult</option>
                <option value="266">Kyocera</option>
                <option value="267">Land Rover</option>
                <option value="268">Lava</option>
                <option value="269">LeEco</option>
                <option value="270">Leica</option>
                <option value="271">Lemon</option>
                <option value="272">Lenovo</option>
                <option value="273">Lephone</option>
                <option value="274">LG</option>
                <option value="275">Lumigon</option>
                <option value="276">Lyf</option>
                <option value="277">M-tech</option>
                <option value="278">Mafe Mobile</option>
                <option value="279">Magicon</option>
                <option value="280">MarQ by Flipkart</option>
                <option value="281">Marshall</option>
                <option value="282">Maxx Mobile</option>
                <option value="283">Meizu</option>
                <option value="284">Mercury</option>
                <option value="285">Micromax</option>
                <option value="286">Microsoft</option>
                <option value="287">Mitashi</option>
                <option value="288">Mito</option>
                <option value="289">Mobiistar</option>
                <option value="290">Motorola</option>
                <option value="291">mPhone</option>
                <option value="292">MTS</option>
                <option value="293">MyPhone</option>
                <option value="294">Namotel</option>
                <option value="295">Neffos</option>
                <option value="296">Nexian</option>
                <option value="297">Nextbit</option>
                <option value="298">Nokia</option>
                <option value="299">Nubia</option>
                <option value="300">Nuu Mobile</option>
                <option value="301">Obi</option>
                <option value="302">Obi Worldphone</option>
                <option value="303">OnePlus</option>
                <option value="304">Onida</option>
                <option value="305">Oplus</option>
                <option value="306">Oppo</option>
                <option value="307">Oukitel</option>
                <option value="308">Panasonic</option>
                <option value="309">Pantel</option>
                <option value="310">Pepsi</option>
                <option value="311">Phicomm</option>
                <option value="312">Philips</option>
                <option value="313">Poco</option>
                <option value="314">Polaroid</option>
                <option value="315">Porsche Design</option>
                <option value="316">QiKU</option>
                <option value="317">QMobile</option>
                <option value="318">Razer</option>
                <option value="319">Reach</option>
                <option value="320">Realme</option>
                <option value="321">Reliance</option>
                <option value="322">Ringing Bells</option>
                <option value="323">Rio</option>
                <option value="324">Royole</option>
                <option value="325">Salora</option>
                <option value="326">Samsung</option>
                <option value="327">Sansui</option>
                <option value="328">Saygus</option>
                <option value="329">Sharp</option>
                <option value="330">Sikur</option>
                <option value="331">Silent Circle</option>
                <option value="332">Simmtronics</option>
                <option value="333">Sirin</option>
                <option value="334">Smartisan</option>
                <option value="335">Smartron</option>
                <option value="336">Sony</option>
                <option value="337">Spice</option>
                <option value="338">Sunstrike</option>
                <option value="339">Swipe</option>
                <option value="340">Symphony</option>
                <option value="341">Tambo</option>
                <option value="342">TCL</option>
                <option value="343">Tecno</option>
                <option value="344">Tonino Lamborghini</option>
                <option value="345">Turing</option>
                <option value="346">Umi</option>
                <option value="347">Unihertz</option>
                <option value="348">Vaio</option>
                <option value="349">Vertu</option>
                <option value="350">Viaan</option>
                <option value="351">Videocon</option>
                <option value="352">Vivo</option>
                <option value="353">Vodafone</option>
                <option value="354">Wickedleak</option>
                <option value="355">Wiio</option>
                <option value="356">Xiaomi</option>
                <option value="357">Xolo</option>
                <option value="358">Yamada Denki</option>
                <option value="359">Yandex</option>
                <option value="360">Yota Devices</option>
                <option value="361">Yu</option>
                <option value="362">Zen</option>
                <option value="363">Ziox</option>
                <option value="364">Zopo</option>
                <option value="365">ZTE</option>
                <option value="366">Zuk</option>
                <option value="367">Zync</option>
                <option value="368">Adata</option>
                <option value="369">Ariston</option>
                <option value="370">Allocacoc</option>
                <option value="371">Argo</option>
                <option value="372">Arthur Martin</option>
                <option value="373">Avent</option>
                <option value="374">Awei</option>
                <option value="375">Aeg</option>
                <option value="376">Ariete</option>
                <option value="377">Abyx</option>
                <option value="378">Air Monster</option>
                <option value="379">Alaska</option>
                <option value="380">Arzum</option>
                <option value="381">Babyliss</option>
                <option value="382">Beko</option>
                <option value="383">Bosch</option>
                <option value="384">Braun</option>
                <option value="385">Brita</option>
                <option value="386">Beper</option>
                <option value="387">Base</option>
                <option value="388">Batitherm</option>
                <option value="389">Beats</option>
                <option value="390">Bose</option>
                <option value="391">Calor</option>
                <option value="392">Candy</option>
                <option value="393">Canon</option>
                <option value="394">Chaffoteaux</option>
                <option value="395">Cookart</option>
                <option value="396">Cellularline</option>
                <option value="397">Carrier</option>
                <option value="398">Delonghi</option>
                <option value="399">Dlink</option>
                <option value="400">Dyson</option>
                <option value="401">Dell</option>
                <option value="402">Eaton</option>
                <option value="403">Elexia</option>
                <option value="404">Epson</option>
                <option value="405">Easydis</option>
                <option value="406">Easymount</option>
                <option value="407">Energy Sistem</option>
                <option value="408">Express</option>
                <option value="409">Franke</option>
                <option value="410">Fujifilm</option>
                <option value="411">Funway</option>
                <option value="412">Foodsaver</option>
                <option value="413">Fosa</option>
                <option value="414">Goodis</option>
                <option value="415">Gopro</option>
                <option value="416">Galaxy</option>
                <option value="417">Haier</option>
                <option value="418">Havit</option>
                <option value="419">Homedics</option>
                <option value="420">Hoover</option>
                <option value="421">Hp</option>
                <option value="422">H.Koenig</option>
                <option value="423">Hikvison</option>
                <option value="424">Harman Kardon</option>
                <option value="425">Ibili</option>
                <option value="426">Imperial</option>
                <option value="427">Inoxibar</option>
                <option value="428">Indesit</option>
                <option value="429">Itimat</option>
                <option value="430">Irobot</option>
                <option value="431">Jata</option>
                <option value="432">Jbl</option>
                <option value="433">Junkers</option>
                <option value="434">Kenwood</option>
                <option value="435">Krohler</option>
                <option value="436">Krups</option>
                <option value="437">Kitchenaid</option>
                <option value="438">Kaspersky</option>
                <option value="439">Kioxia</option>
                <option value="440">Karcher</option>
                <option value="441">Kingston</option>
                <option value="442">Lg</option>
                <option value="443">Liebherr</option>
                <option value="444">Logicom</option>
                <option value="445">Logitech</option>
                <option value="446">Magefesa</option>
                <option value="447">Magimix</option>
                <option value="448">Moulinex</option>
                <option value="449">Media Range</option>
                <option value="450">Msi</option>
                <option value="451">Nespresso</option>
                <option value="452">Nikon</option>
                <option value="453">Nintendo</option>
                <option value="454">Ngs</option>
                <option value="455">No Name</option>
                <option value="456">Optiline</option>
                <option value="457">Oraimo</option>
                <option value="458">Playstation</option>
                <option value="459">Pinacle</option>
                <option value="460">Pioneer</option>
                <option value="461">Rowenta</option>
                <option value="462">Royal</option>
                <option value="463">Roline</option>
                <option value="464">Rivacase</option>
                <option value="465">Remade</option>
                <option value="466">Risoli</option>
                <option value="467">Sandisk</option>
                <option value="468">Seb</option>
                <option value="469">Severin</option>
                <option value="470">Siera</option>
                <option value="471">Simeo</option>
                <option value="472">Soehnle</option>
                <option value="473">Sandberg</option>
                <option value="474">Sonorous</option>
                <option value="475">Steamone</option>
                <option value="476">Solac</option>
                <option value="477">Stg</option>
                <option value="478">Skyworth</option>
                <option value="479">Sencor</option>
                <option value="480">Spirit Of Gamer</option>
                <option value="481">Targus</option>
                <option value="482">Taurus</option>
                <option value="483">Tcl</option>
                <option value="484">Tefal</option>
                <option value="485">Tenda</option>
                <option value="486">Thomson</option>
                <option value="487">Tnb</option>
                <option value="488">Toshiba</option>
                <option value="489">Tplink</option>
                <option value="490">Trust</option>
                <option value="491">Terraillon</option>
                <option value="492">Tp-Link</option>
                <option value="493">Trend</option>
                <option value="494">Urban Factory</option>
                <option value="495">Ufesa</option>
                <option value="496">Valira</option>
                <option value="497">Vision</option>
                <option value="498">Value</option>
                <option value="499">Vitrinor</option>
                <option value="500">Western Digital</option>
                <option value="501">Whirlpool</option>
                <option value="502">Wiko</option>
                <option value="503">W-Pro</option>
                <option value="504">Wpro</option>
                <option value="505">Yamaha</option>
                <option value="506">Zanussi</option>
              </select>
              <div class="menu-icon-grid w-100 p-0">
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=197" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>10.or</a>
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=198" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>Acer</a>
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=199" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>Adcom</a>
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=200" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>Airtel</a>
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=201" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>Alcatel</a>
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=202" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>Alpha</a>
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=203" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>Amazon</a>
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=204" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>AOC</a>
                <a href="http://127.0.0.1:9999/Products_list?brand%5B%5D=205" class="p-2 mb-2"
                   style="width: 30%;" hover><i class="i-Drop mb-0"></i>Apple</a>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu open">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Prix </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="p-0 m-3">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName1">Min Prix</label>
                  <input type="text" class="form-control form-control-rounded" id="input-min_Prix"
                         name="min_price" placeholder="min Prix">
                </div>
                <div class="col-md-6 mb-3">
                  <label for="firstName1">Max Prix</label>
                  <input type="text" class="form-control form-control-rounded" id="input-max_Prix"
                         name="max_price" placeholder="max Prix">
                </div>
              </div>
              <div class="range-slider">
                <input type="text" class="js-range-slider" value=""/>
              </div>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon fas fa-swatchbook"></i>
            <span class="item-name text-18 font-weight-semibold  ">Colors </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2">
              <select class="custom-select task-manager-list-select mb-2" id="inputGroupSelect01"
                      name="color">
                <option value="">Choose Color...</option>
                <option value="17">Red</option>
                <option value="18">Blue</option>
                <option value="19">Green</option>
                <option value="20">Purple</option>
                <option value="21">Yellow</option>
                <option value="22">White</option>
                <option value="23">Black</option>
                <option value="24">Brown</option>
                <option value="25">Silver</option>
                <option value="26">Orange</option>
                <option value="122">Violet</option>
                <option value="123">Bleu Alpin</option>
                <option value="124">Graphite</option>
                <option value="125">Or</option>
                <option value="126">Bleu Pacifique</option>
                <option value="127">Argent</option>
                <option value="128">Rose</option>
                <option value="129">Bleu</option>
                <option value="130">Minuit</option>
                <option value="131">Noir</option>
                <option value="132">Blanc</option>
                <option value="133">Rouge</option>
                <option value="134">Vert Nuit</option>
                <option value="135">Vert</option>
                <option value="136">Jaune</option>
                <option value="137">Gold</option>
                <option value="138">Midnight</option>
                <option value="139">Pacific Blu</option>
                <option value="140">Pink</option>
                <option value="141">Gris</option>
                <option value="142">Lumière Stellaire</option>
              </select>
              <div class="ul-bottom__line mb-3">
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: Red;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=17"></a>
                </button>
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: Blue;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=18"></a>
                </button>
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: Green;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=19"></a>
                </button>
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: Purple;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=20"></a>
                </button>
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: Yellow;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=21"></a>
                </button>
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: White;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=22"></a>
                </button>
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: Black;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=23"></a>
                </button>
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: Brown;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=24"></a>
                </button>
                <button type="button" class="btn  rounded-circle m-1"
                        style="width: 35px;height: 35px;border-width: 3px;background-color: Silver;">
                  <a href="http://127.0.0.1:9999/getResult_product?color=25"></a>
                </button>
              </div>
            </div>
          </div>
        </li>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Type de stockage </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">power </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">connexion_adapter </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Garantie </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Shoe Size </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Size Category </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Perfume Type </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Printer Type </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Operating system pc </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Sim Cards </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Operating system phone </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Core Processor </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Piece Count </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Size ML </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Type HD </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="186">
                <span>4.5k  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="185">
                <span>5k  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="44">
                <span>HD  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="43">
                <span>Full HD  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="42">
                <span>Ultra HD 8K  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="41">
                <span>Ultra HD 4K  </span>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Taille de l&#039;écran </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="191">
                <span>6.7  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="184">
                <span>24.0  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="183">
                <span>27  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="182">
                <span>16  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="181">
                <span>13  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="180">
                <span>8.3  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="179">
                <span>10.2  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="178">
                <span>10.9  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="177">
                <span>11  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="176">
                <span>12.9  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="40">
                <span>65  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="39">
                <span>55  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="38">
                <span>43  pouces  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="37">
                <span>32  pouces  </span>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">size   </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="169">
                <span>100  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="168">
                <span>50  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="167">
                <span>20  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="166">
                <span>15  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="165">
                <span>10  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="164">
                <span>5  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="163">
                <span>4  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="162">
                <span>3  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="161">
                <span>2  m  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="160">
                <span>1  m  </span>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">RAM </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="151">
                <span>512  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="150">
                <span>256  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="149">
                <span>128  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="148">
                <span>64  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="147">
                <span>32  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="146">
                <span>16  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="36">
                <span>8  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="35">
                <span>6  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="34">
                <span>4  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="33">
                <span>3  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="32">
                <span>2  GB  </span>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Storage </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="175">
                <span>2  TB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="174">
                <span>1  TB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="173">
                <span>512  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="172">
                <span>256  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="171">
                <span>2  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="170">
                <span>1  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="31">
                <span>128  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="30">
                <span>64  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="29">
                <span>32  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="28">
                <span>16  GB  </span>
                <span class="checkmark"></span>
              </label>
              <label class="checkbox checkbox-success">
                <input type="checkbox" name="options[]" value="27">
                <span>8  GB  </span>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown-sidemenu">
          <a>
            <i class="nav-icon i-Receipt"></i>
            <span class="item-name text-18 font-weight-semibold  ">Color </span>
            <i class="dd-arrow fas fa-sort-down"></i>
          </a>
          <div class="submenu">
            <div class="m-2 ml-4">
            </div>
          </div>
        </li>
      </ul>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-success btn-lg btn-block w-75 m-3">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarFilteComponent from "@/components/SidebarFilter/SidebarFilteComponent";
export default {
  name: "SidebarFilter",
  components: {SidebarFilteComponent},
  computed:{
    options(){
      return this.$store.getters["filters/get_filters"]
    },
    brands(){
      return this.$store.getters["filters/get_brands"]
    }

  },

  async fetch() {
    await this.$store.dispatch('filters/fetch_filters'),
    await this.$store.dispatch('filters/fetch_brands')
  },

}


</script>

