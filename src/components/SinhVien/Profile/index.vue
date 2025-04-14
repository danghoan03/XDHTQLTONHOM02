<template>
    <div class="container-fluid mt-4">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card p-4 shadow-sm">
                    <h5 class="text-danger mb-4">
                        <i class="bi bi-person-fill"></i> THÔNG TIN CÁ NHÂN
                    </h5>
                    <div class="row">
                        <!-- Form nhập thông tin cá nhân -->
                        <div class="col-md-8">
                            <div class="mb-3">
                                <label class="form-label"><strong>Tên Người dùng:</strong></label>
                                <input type="text" class="form-control" v-model="form.ho_va_ten" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><strong>Mã Sinh viên:</strong></label>
                                <input type="text" class="form-control" v-model="form.ma_sinh_vien" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><strong>Giới tính:</strong></label>
                                <select class="form-control" v-model="form.gioiTinh">
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                    <option>Khác</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><strong>Ngày sinh:</strong></label>
                                <input type="date" class="form-control" v-model="form.ngaySinh" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><strong>CCCD:</strong></label>
                                <input type="text" class="form-control" v-model="form.can_cuoc" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><strong>Email (DTU):</strong></label>
                                <input type="email" class="form-control" v-model="form.email" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label"><strong>Khoa</strong></label>
                                <input type="email" class="form-control" v-model="form.khoa" />
                            </div>
                        </div>

                        <!-- Avatar -->
                        <div class="col-md-4 text-center">
                            <div class="border p-2 d-inline-block">
                                <img :src="form.anh_dai_dien" alt="Avatar" class="img-thumbnail mb-2"
                                    style="height: 155px; width: 147px;" />
                                <br />
                                <input type="file" @change="onAvatarChange" class="form-control form-control-sm mt-2" />
                            </div>
                            <small class="d-block mt-2 text-muted">(Kích thước tốt nhất là cao 155px, rộng
                                147px)</small>
                        </div>
                    </div>

                    <!-- Nút lưu -->
                    <div class="text-end mt-3">
                        <button class="btn btn-primary" @click="luuThongTin">Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThongTinCaNhan",
    data() {
        return {
            form: {
                ho_va_ten: "Lê Thị Thu Hiền",
                can_cuoc: "206458924",
                ma_sinh_vien: "27201241860",
                email: "hienle88990@gmail.com",
                so_dien_thoai: "0356850584",
               khoa: "Công nghệ thông tin",
                gioiTinh: "Nữ",
                ngaySinh: "2003-12-15",
                anh_dai_dien: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
        };
    },
    methods: {
        onAvatarChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.form.avatar = URL.createObjectURL(file);
            }
        },
        luuThongTin() {
            console.log("Dữ liệu đã lưu:", this.form);
            alert("Thông tin đã được lưu!");
        }
    }
};
</script>

<style scoped>
.card {
    margin-top: 10px;
    border-radius: 10px;
}
</style>