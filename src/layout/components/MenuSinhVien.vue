<template>
    <div class="topbar-nav header navbar" role="banner">
        <nav id="topbar">
            <ul class="navbar-nav theme-brand flex-row  text-center">
                <li class="nav-item theme-logo">
                    <a href="index.html">
                        <img src="../../assets/img/90x90.jpg" class="navbar-logo" alt="logo">
                    </a>
                </li>
                <li class="nav-item theme-text">
                    <a href="index.html" class="nav-link"> CORK </a>
                </li>
            </ul>

            <ul class="list-unstyled menu-categories" id="topAccordion">
                <li class="menu single-menu">
                    <router-link to="/sinh-vien/homepage">
                        <a href="/sinh-vien/homepage">
                            <span><i class="bi bi-house mr-1"></i>Trang Chủ</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/sinh-vien/lop-hoc">
                        <a href="/sinh-vien/lop-hoc">
                            <span><i class="bi bi-mortarboard mr-1"></i>Lớp Học</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/sinh-vien/ket-qua">
                        <a href="/sinh-vien/ket-qua">
                            <span><i class="bi bi-clipboard2-data-fill mr-1"></i>Kết Quả</span>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>