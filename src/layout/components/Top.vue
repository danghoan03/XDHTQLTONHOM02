<template>
    <div class="header-container">
        <header class="header navbar navbar-expand-sm">
            <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </a>

            <div class="nav-logo align-self-center">
                <a class="navbar-brand" href="index.html">
                    <img alt="logo" src="../../assets/img/logo-onlineexamsystem.png" />
                    <span class="navbar-brand-name">ADMIN</span>
                </a>
            </div>

            <ul class="navbar-item flex-row mr-auto">
                <li class="nav-item align-self-center search-animated">
                    <form class="form-inline search-full form-inline search" role="search">
                        <div class="search-bar">
                            <input type="text" class="form-control search-form-control ml-lg-auto"
                                placeholder="Search..." />
                        </div>
                    </form>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-search toggle-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </li>
            </ul>

            <ul class="navbar-item flex-row nav-dropdowns">
                <li class="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
                    <a href="javascript:void(0);" class="nav-link dropdown-toggle user" id="user-profile-dropdown"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="media">
                            <div class="media-body align-self-center">
                                <h6>{{ user.name || 'Chưa đăng nhập' }}</h6>
                                <p>{{ user.email || 'Chưa có email' }}</p>
                            </div>
                            <img src="../../assets/img/90x90.jpg" class="img-fluid" alt="admin-profile" />
                            <span class="badge badge-success"></span>
                        </div>
                    </a>

                    <div class="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                        <div class="dropdown-item">
                            <a href="/admin/login">
                                <!-- Biểu tượng khóa (lock) thay cho user -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-lock">
                                    <rect x="5" y="11" width="14" height="10" rx="2" ry="2"></rect>
                                    <path d="M12 16v-4M9 12h6"></path>
                                    <path d="M9 7V4a4 4 0 0 1 8 0v3"></path>
                                </svg>
                                <span> Login</span>
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="/admin/profile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-user">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg> <span> Profile</span>
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a :href="`/admin/doi-mat-khau/${user.hash_reset}`">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-user">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg> <span>ChangePassword</span>
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="javascript:void(0)" v-on:click="logoutAll">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-log-out">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg> <span v-on:click="logout()"> Log Out</span>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
            }
        };
    },
    mounted() {
        this.loadUserInfo();
    },
    methods: {
        loadUserInfo() {
            const name = localStorage.getItem('username');
            const email = localStorage.getItem('email');

            // Kiểm tra và gán giá trị mặc định nếu không có dữ liệu
            this.user.name = name || 'Chưa đăng nhập';
            this.user.email = email || 'Chưa có email';

            // Debug thông tin lấy từ localStorage
            console.log("User Info:", { name, email });
        },
        logout() {
            axios
            .post('http://localhost:8000/api/admin/logout', {}, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                }
            })
                .then((res) => {
                    if (res.data.status) {
                        localStorage.removeItem('key_admin');
                        localStorage.removeItem("username");
                        localStorage.removeItem("email");
                        this.$router.push('/admin/login');
                    } else {
                        this.$toast.error('Có lỗi xảy ra');
                    }
                });
        },
    }
};
</script>

<style scoped>
/* Bạn có thể thêm CSS nếu muốn tùy chỉnh */
</style>
