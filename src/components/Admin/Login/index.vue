<template>
    <div class="form-container outer">
        <div class="form-form">
            <div class="form-form-wrap">
                <div class="form-container">
                    <div class="form-content">
                        <img src="/src/assets/img/logo-onlineexamsystem.png" width="50" height="50" alt="Logo">
                        <h1 class="">ĐĂNG NHẬP</h1>
                        <p class="mb-0">Quản lý thi trắc nghiệm trực tuyến</p>
                        <form class="text-left mt-0">
                            <div class="form">
                                <div id="username-field" class="field-wrapper input">
                                    <label for="username">EMAIL</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-user">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <input v-model="tai_Khoan.email" type="text" class="form-control"
                                        placeholder="...@gmail.com" autocomplete="username">
                                    
                                </div>
                                <div id="password-field" class="field-wrapper input mb-2">
                                    <div class="d-flex justify-content-between">
                                        <label for="password">PASSWORD</label>
                                        <a href="auth_pass_recovery_boxed.html" class="forgot-pass-link">Forgot
                                            Password?</a>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-lock">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>

                                    <input v-model="tai_Khoan.password" type="password" class="form-control"
                                        placeholder="Password" autocomplete="current-password">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" id="toggle-password" class="feather feather-eye">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </div>
                                <div class="d-sm-flex justify-content-between">
                                    <div class="field-wrapper">
                                        <button v-on:click="dangNhap()" type="button" class="btn btn-primary"
                                            value="">Đăng Nhập</button>
                                    </div>
                                </div>
                                <!-- <p class="signup-link">Not registered ? <a href="auth_register_boxed.html">Create an
                                        account</a></p> -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { toast } from "vue3-toastify";

export default {
    data() {
        return {
            tai_Khoan: {
                email: "",
                password: ""
            }
        }
    },
    // mounted() {
    //     this.kiemTraDangNhap();
    // },
    methods: {
        kiemTraDangNhap() {
            axios
                .get("http://127.0.0.1:8000/api/admin/checklogin", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$router.push('/admin/giang-vien')
                    }
                });
        },
        dangNhap() {
            axios
                .post("http://127.0.0.1:8000/api/admin/login", this.tai_Khoan)
                .then((res) => {
                    if (res.data.status === 1) {
                        toast.success(res.data.message);
                        // Lưu token và thông tin user vào localStorage
                        localStorage.setItem("key_admin", res.data.key);
                        localStorage.setItem("username", res.data.username);
                        localStorage.setItem("email", res.data.email);

                        this.$router.push('/admin/giang-vien'); // hoặc route bạn muốn
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    const list = Object.values(err.response.data.errors || {});
                    list.forEach((msg) => {
                        toast.error(msg[0]);
                    });
                });
        }

    }
}
</script>

<style></style>