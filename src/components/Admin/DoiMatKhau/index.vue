<template>
    <div class="container-fluid">
        <div class="row row-cols-lg-2">
            <div class="col mx-auto">
                <div class="mb-4 text-center">

                </div>
                <div class="card"> <div class="card-body">
                        <div class="border border-primary p-4 rounded">
                            <div class="text-center">
                                <img src="/src/assets/img/logo-onlineexamsystem.png" alt="Logo"
                                    style="width: 10%; height: auto;">
                                <h3 class="">ĐỔI MẬT KHẨU</h3>
                            </div>
                            <hr>
                            <div class="form-body">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label class="mb-2">Mật Khẩu Mới</label>
                                        <div class="input-group">
                                            <span class="input-group-text text-primary">
                                                <i class="fa-solid fa-lock"></i>
                                            </span>
                                            <input v-model="tai_Khoan.password" type="password" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label class="mb-2">Xác Nhận Mật Khẩu</label>
                                        <div class="input-group">
                                            <span class="input-group-text text-success">
                                                <i class="fa-solid fa-rotate-right"></i>
                                            </span>
                                            <input v-model="tai_Khoan.re_password" type="password" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex flex-column gap-2" style="gap: 20px; margin-top: 16px;">
                                        <button v-on:click="changePassword()" type="submit" class="btn btn-primary">
                                            <i class="fa-solid fa-lock-open me-2"></i> Thay Đổi Mật Khẩu
                                        </button>

                                        <router-link to="/admin/login">
                                            <button type="button" class="btn btn-secondary w-100">
                                                Đăng Nhập <i class="ms-2 fa-solid fa-arrow-right"></i>
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            tai_Khoan: {
                hash_reset: this.$route.params.hash_reset
            }
        }
    },
    methods: {
        changePassword() {
            if (this.tai_Khoan.password !== this.tai_Khoan.re_password) {
                this.$toast.error("Mật khẩu xác nhận không khớp");
                return;
            }

            axios
                .post('http://127.0.0.1:8000/api/admin/doi-mat-khau', this.tai_Khoan)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.$router.push('/admin/login')
                    } else {
                        this.$toast.error(res.data.message)
                    }
                })
        }
    },
}
</script>
<style scoped>
.container-fluid {
    margin-top: 60px;
}

.card {
    /* Remove border: none; */
    border: 1px solid #007bff; /* Add a blue border */
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom right, #ffffff, #f9f9f9);
}

.card-body {
    padding: 40px 30px;
}

h3 {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
    color: #2c3e50;
}

img {
    margin-bottom: 20px;
    width: 80px;
}

.input-group-text {
    background-color: #f1f1f1;
    border: 1px solid #ced4da;
    border-radius: 6px 0 0 6px;
}

input.form-control {
    height: 45px;
    font-size: 15px;
    border-radius: 0 6px 6px 0;
}

label {
    font-weight: 500;
    font-size: 14px;
    color: #333;
}

button.btn {
    height: 45px;
    font-weight: bold;
    font-size: 15px;
    transition: 0.3s ease;
    border-radius: 8px;
}

button.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

button.btn-primary:hover {
    background-color: #0056b3;
    border-color: #004080;
}

button.btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
}

button.btn-secondary:hover {
    background-color: #5a6268;
    border-color: #4e555b;
}

/* Màu icon */
.input-group-text.text-primary i {
    color: #007bff;
}

.input-group-text.text-success i {
    color: #28a745;
}
</style>