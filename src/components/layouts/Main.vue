<template>
    <main>
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="@/assets/images/account-icon.png"> حسابي
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">الصفحة الشخصيه</a>
              <a class="dropdown-item" href="#">الخروج</a>
            </div>
        </div>
        <ul class="icons">
            <li>
                <router-link to="/favourites" class="btn heart-icon"><img src="@/assets/images/heart-icon.png"></router-link>
            </li>
            <li>
                <router-link to="/cart" class="btn cart-icon"><img src="@/assets/images/cart-icon.png"></router-link>
            </li>
        </ul>
    </main>
</template>