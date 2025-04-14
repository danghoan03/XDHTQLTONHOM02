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
                    <router-link to="/admin/homepage">
                        <a href="/admin/homepage">
                            <span><i class="bi bi-house mr-1"></i>Dashboard</span>
                        </a>
                    </router-link>
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
                            <router-link to="/admin/giang-vien">
                                <a href="/admin/giang-vien"> Quản Lý Giảng Viên </a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/sinh-vien">
                                <a href="/admin/sinh-vien"> Quản Lý Sinh Viên </a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/lop-hoc">
                                <a href="/admin/lop-hoc"> Quản Lý Lớp Học </a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/loai-bai-thi">
                                <a href="/admin/loai-bai-thi"> Quản Lý Loại Bài Thi </a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/mon-hoc">
                                <a href="/admin/mon-hoc"> Quản Lý Môn Học </a>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="menu single-menu">
                    <router-link to="/admin/cau-hoi">
                        <a href="/admin/cau-hoi">
                            <span><i class="bi bi-patch-question mr-1"></i>Câu Hỏi</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                    <router-link to="/admin/bai-thi">
                        <a href="/admin/bai-thi">
                            <span><i class="bi bi-card-text mr-1"></i>Bài Thi</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu single-menu">
                     <router-link to="/admin/khoa">
                         <a href="/admin/khoa">
                             <span><i class="bi bi-card-text mr-1"></i>Khoa</span>
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