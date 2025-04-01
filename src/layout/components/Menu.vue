<template>
    <div class="topbar-nav header navbar" role="banner">
        <nav id="topbar">
            <ul class="navbar-nav theme-brand flex-row  text-center">
                <li class="nav-item theme-logo">
                    <a href="/admin">
                        <img src="../../assets/img/logo-onlineexamsystem.png" class="navbar-logo" alt="logo">
                    </a>
                </li>
                <li class="nav-item theme-text">
                    <a href="/admin" class="nav-link"> ADMIN </a>
                </li>
            </ul>

            <ul class="list-unstyled menu-categories" id="topAccordion">

                <li class="menu single-menu active">
                    <a href="/admin/homepage">
                        <span><i class="bi bi-house mr-1"></i>Dashboard</span>
                    </a>
                </li>
                <li class="menu single-menu">
                    <a href="#quanlychung" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <span><i class="bi bi-gear-wide mr-1"></i>Quản Lý Chung</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </a>
                    <ul class="collapse submenu list-unstyled" id="components" data-parent="#topAccordion">
                        <li>
                            <a href="/admin/giang-vien"> Quản Lý Giảng Viên </a>
                        </li>
                        <li>
                            <a href="/admin/sinh-vien"> Quản Lý Sinh Viên </a>
                        </li>
                        <li>
                            <a href="/admin/lop-hoc"> Quản Lý Lớp Học </a>
                        </li>
                        <li>
                            <a href="/admin/loai-bai-thi"> Quản Lý Loại Bài Thi </a>
                        </li>
                        <li>
                            <a href="/admin/mon-hoc"> Quản Lý Môn Học </a>
                        </li>
                    </ul>
                </li>
                <li class="menu single-menu">
                    <a href="/admin/cau-hoi">
                        <span><i class="bi bi-patch-question mr-1"></i>Câu Hỏi</span>
                    </a>
                </li>
                <li class="menu single-menu">
                    <a href="/admin/bai-thi">
                        <span><i class="bi bi-card-text mr-1"></i>Bài Thi</span>
                    </a>
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