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
                    <a href="index.html" class="nav-link"> GIẢNG VIÊN </a>
                </li>
            </ul>

            <ul class="list-unstyled menu-categories" id="topAccordion">

                <li class="menu single-menu">
                    <router-link to="/giang-vien/homepage">
                        <a href="/giang-vien/homepage">
                            <span><i class="bi bi-house mr-1"></i>Dashboard</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/giang-vien/lop-hoc">
                        <a href="/giang-vien/lop-hoc">
                            <span><i class="bi bi-calendar3 mr-1"></i>Lớp Học</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/giang-vien/mon-hoc">
                        <a href="/giang-vien/mon-hoc">
                            <span><i class="bi bi-journal-bookmark-fill mr-1"></i>Môn Học</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/giang-vien/cau-hoi">
                        <a href="/giang-vien/cau-hoi">
                            <span><i class="bi bi-patch-plus mr-1"></i>Câu Hỏi</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/giang-vien/bai-thi">
                        <a href="/giang-vien/bai-thi">
                            <span><i class="bi bi-card-text mr-1"></i>Bài Thi</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/giang-vien/loai-bai-thi">
                        <a href="/giang-vien/loai-bai-thi">
                            <span><i class="bi bi-hdd-stack mr-1"></i>Loại Bài Thi</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/giang-vien/cham-bai-thi">
                        <a href="/giang-vien/cham-bai-thi">
                            <span><i class="bi bi-clipboard-data mr-1"></i>Chấm Bài Thi</span>
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