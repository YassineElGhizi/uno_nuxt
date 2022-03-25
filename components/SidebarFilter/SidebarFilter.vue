<template>
  <div class="side-content-wrap rounded-3" style="display: block;">
    <div class="sidebar-left-secondary position-relative w-100 h-auto"
         style="left:auto;top:auto;z-index: auto;border-radius: 10px;border: 1px solid #dee2e6">
      <!-- Submenu Dashboards -->
      <p class="text-success text-22  border-bottom-primary-200 m-1 ml-3">Filter : 56321 results</p>

      <ul class="childNav" data-parent="apps" style="display: block;">

        <SidebarFilteComponent
          name="Categories"
          :body_content="categories"
          :select_space_holder="'Choisir une catégorie ...'"
        />

        <SidebarFilteComponent
          name="Marques"
          :body_content="brands"
          :select_space_holder="'Choisir une marque ...'"
        />

        <SidebarFilterPriceComponent/>

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
    },
    categories(){
      return this.$store.getters["categories/get_cats_ids"]
    },

  },

  async fetch() {
    await this.$store.dispatch('filters/fetch_filters'),
    await this.$store.dispatch('filters/fetch_brands'),
    await this.$store.dispatch('categories/getCatsIds')
  },

}


</script>

