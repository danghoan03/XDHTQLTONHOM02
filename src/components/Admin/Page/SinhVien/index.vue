<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-lg-12">
                <div class="card bg-white mt-2">
                    <div class="card-header bg-white">
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0 mt-1"><b>Quản Lý Sinh Viên</b></h4>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addSinhVien">Thêm
                                Sinh Viên</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead class="table-primary text-center">
                                    <tr role="row">
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Ảnh Đại Diện</th>
                                        <th class="text-dark">Tên Sinh Viên</th>
                                        <th class="text-dark">Mã Sinh Viên</th>
                                        <th class="text-dark">Email</th>
                                        <th class="text-dark">Số Điện Thoại</th>
                                        <th class="text-dark">Trạng Thái</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in students" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="text-center">
                                                <span>
                                                    <img v-bind:src="value.anh_dai_dien" width="40" height="40"
                                                        class="rounded-circle profile-img" alt="avatar">
                                                </span>
                                            </td>
                                            <td class="align-middle">{{ value.ho_va_ten }}</td>
                                            <td class="align-middle text-center">{{ value.ma_sinh_vien }}</td>
                                            <td class="align-middle">{{ value.email }}</td>
                                            <td class="align-middle text-center">{{ value.so_dien_thoai }}</td>
                                            <td class="align-middle text-center">
                                                <button v-if="value.trang_thai == 1" class="btn btn-success">Hoạt
                                                    Động</button>
                                                <button v-else class="btn btn-warning">Tạm Ngưng</button>
                                            </td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center">
                                                    <h4><i @click="Object.assign(editSV, value)"
                                                            class="bi bi-pencil-square text-info mr-2"
                                                            data-toggle="modal" data-target="#editSinhVien"></i></h4>
                                                    <h4><i @click="Object.assign(delSV, value)"
                                                            class="bi bi-trash3 text-danger" data-toggle="modal"
                                                            data-target="#delSinhVien"></i></h4>
                                                </div>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Add-->
    <div class="modal fade" id="addSinhVien" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Thêm Mới Sinh Viên</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="text-dark"><b>Họ và tên</b></label>
                                <input v-model="student.ho_va_ten" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Email</b></label>
                                <input v-model="student.email" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Trạng thái</b></label>
                                <select v-model="student.trang_thai" class="placeholder form-control">
                                    <option>Chọn trạng thái...</option>
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Tạm Ngưng</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="text-dark"><b>Số điện thoại</b></label>
                                <input v-model="student.so_dien_thoai" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Thông tin chung</b></label>
                                <textarea v-model="student.thong_tin_chung" class="form-control" name=""
                                    rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="addSinhVien()" type="button" class="btn btn-primary" data-dismiss="modal">Thêm
                        Mới</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Edit-->
    <div class="modal fade" id="editSinhVien" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Cập Nhật Sinh Viên</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="text-dark"><b>Họ và tên</b></label>
                                <input v-model="editSV.ho_va_ten" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Email</b></label>
                                <input v-model="editSV.email" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Số điện thoại</b></label>
                                <input v-model="editSV.so_dien_thoai" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="text-dark"><b>Mã sinh viên</b></label>
                                <input v-model="editSV.ma_sinh_vien" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Thông tin chung</b></label>
                                <textarea v-model="editSV.thong_tin_chung" class="form-control" name=""
                                    rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="editSinhVien()" type="button" class="btn btn-info" data-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Del-->
    <div class="modal fade" id="delSinhVien" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Xóa Sinh Viên</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        Bạn có chắc chắn muốn xóa sinh viên <b class="text-danger">"{{ delSV.ho_va_ten }}"</b> không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { toast } from "vue3-toastify";
export default {
    data() {
        return {
            student: {
                anh_dai_dien: "",
                ho_va_ten: "",
                ma_sinh_vien: "",
                email: "",
                password: "",
                so_dien_thoai: "",
                thong_tin_chung: "",
                trang_thai: ""
            },
            students: [
                {
                    id: 1,
                    anh_dai_dien: "https://mighty.tools/mockmind-api/content/human/80.jpg",
                    ho_va_ten: "Nguyễn Văn A",
                    ma_sinh_vien: "SV001",
                    email: "nguyenvana@example.com",
                    password: "123456",
                    so_dien_thoai: "0123456789",
                    thong_tin_chung: "Sinh viên ngành CNPM",
                    trang_thai: 1
                },
                {
                    id: 2,
                    anh_dai_dien: "https://mighty.tools/mockmind-api/content/human/125.jpg",
                    ho_va_ten: "Trần Thị B",
                    ma_sinh_vien: "SV002",
                    email: "tranthib@example.com",
                    password: "123456",
                    so_dien_thoai: "0987654321",
                    thong_tin_chung: "Sinh viên ngành CNPM",
                    trang_thai: 1
                },
                {
                    id: 3,
                    anh_dai_dien: "https://mighty.tools/mockmind-api/content/human/104.jpg",
                    ho_va_ten: "Lê Văn C",
                    ma_sinh_vien: "SV003",
                    email: "levanc@example.com",
                    password: "123456",
                    so_dien_thoai: "0912345678",
                    thong_tin_chung: "Sinh viên ngành CNPM",
                    trang_thai: 0
                },
                {
                    id: 4,
                    anh_dai_dien: "https://mighty.tools/mockmind-api/content/human/97.jpg",
                    ho_va_ten: "Phạm Thị D",
                    ma_sinh_vien: "SV004",
                    email: "phamthid@example.com",
                    password: "123456",
                    so_dien_thoai: "0934567890",
                    thong_tin_chung: "Sinh viên ngành CNPM",
                    trang_thai: 1
                },
                {
                    id: 5,
                    anh_dai_dien: "https://mighty.tools/mockmind-api/content/human/112.jpg",
                    ho_va_ten: "Hoàng Văn E",
                    ma_sinh_vien: "SV005",
                    email: "hoangvane@example.com",
                    password: "123456",
                    so_dien_thoai: "0945678901",
                    thong_tin_chung: "Sinh viên ngành CNPM",
                    trang_thai: 0
                }
            ],
            delSV: {},
            editSV: {}
        }
    },
    mounted() {

    },
    methods: {
        loadData() {

        },
        addSinhVien() {
            this.students.push(this.student);
            toast("Thành công!", {
                type: "success",
                position: "top-right",
            });
            this.student = {
                anh_dai_dien: "",
                ho_va_ten: "",
                ma_sinh_vien: "",
                email: "",
                so_dien_thoai: "",
                trang_thai: ""
            };
        },
        editSinhVien() {

        },
        delSinhVien() {

        },
    },
}
</script>
<style></style>