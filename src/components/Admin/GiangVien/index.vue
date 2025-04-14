<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-lg-12">
                <div class="card bg-white mt-3">
                    <div class="card-header bg-white">
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0 mt-1"><b>Danh Sách Giảng Viên</b></h4>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addGiangVien">Thêm
                                Giảng Viên</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead class="table-primary text-center">
                                    <tr role="row">
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Ảnh Đại Diện</th>
                                        <th class="text-dark">Tên Giảng Viên</th>
                                        <th class="text-dark">Số Căn Cước</th>
                                        <th class="text-dark">Mã Giảng Viên</th>
                                        <th class="text-dark">Email</th>
                                        <th class="text-dark">Số Điện Thoại</th>
                                        <th class="text-dark">Trạng Thái</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in teachers" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="text-center">
                                                <span>
                                                    <img v-bind:src="value.anh_dai_dien" width="40" height="40"
                                                        class="rounded-circle profile-img" alt="avatar">
                                                </span>
                                            </td>
                                            <td class="align-middle">{{ value.ho_va_ten }}</td>
                                            <td class="align-middle">{{ value.can_cuoc }}</td>
                                            <td class="align-middle text-center">{{ value.ma_giang_vien }}</td>
                                            <td class="align-middle">{{ value.email }}</td>
                                            <td class="align-middle text-center">{{ value.so_dien_thoai }}</td>
                                            <td class="align-middle text-center">
                                                <button v-if="value.trang_thai == 1" class="btn btn-success">Hoạt
                                                    Động</button>
                                                <button v-else class="btn btn-warning">Tạm Ngưng</button>
                                            </td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center">
                                                    <h4><i @click="Object.assign(editGV, value)" class="bi bi-pencil-square text-info mr-2"
                                                            data-toggle="modal" data-target="#editGiangVien"></i></h4>
                                                    <h4><i @click="Object.assign(delGV, value)" class="bi bi-trash3 text-danger" data-toggle="modal"
                                                            data-target="#delGiangVien"></i></h4>
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
    <div class="modal fade" id="addGiangVien" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Thêm Mới Giảng Viên</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="text-dark"><b>Họ và tên</b></label>
                                <input v-model="create.ho_va_ten" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Email</b></label>
                                <input v-model="create.email" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Số điện thoại</b></label>
                                <input v-model="create.so_dien_thoai" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="text-dark"><b>Số căn cước</b></label>
                                <input v-model="create.can_cuoc" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Mã giảng viên</b></label>
                                <input v-model="create.ma_giang_vien" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label class="text-dark"><b>Thông tin chung</b></label>
                                <textarea v-model="create.thong_tin_chung" class="form-control" name="" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="addGiangVien()" type="button" class="btn btn-primary" data-dismiss="modal">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Edit-->
    <div class="modal fade" id="editGiangVien" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Cập Nhật Giảng Viên</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="text-dark"><b>Họ và tên</b></label>
                                <input v-model="editGV.ho_va_ten" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Email</b></label>
                                <input v-model="editGV.email" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Số điện thoại</b></label>
                                <input v-model="editGV.so_dien_thoai" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="text-dark"><b>Số căn cước</b></label>
                                <input v-model="editGV.can_cuoc" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Mã giảng viên</b></label>
                                <input v-model="editGV.ma_giang_vien" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Trạng thái</b></label>
                                <select v-model="editGV.trang_thai" class="form-control">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Tạm ngưng</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label class="text-dark"><b>Thông tin chung</b></label>
                                <textarea v-model="editGV.thong_tin_chung" class="form-control" name="" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="editGiangVien()" type="button" class="btn btn-info" data-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Del-->
    <div class="modal fade" id="delGiangVien" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Xóa Giảng Viên</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        Bạn có chắc chắn muốn xóa giảng viên <b class="text-danger">"{{ delGV.ho_va_ten }}"</b> không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="delGiangVien()" type="button" class="btn btn-danger" data-dismiss="modal">Xóa</button>
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
            create : {
                anh_dai_dien    : "",
                ho_va_ten       : "",
                can_cuoc        : "",
                ma_giang_vien   : "",
                email           : "",
                password        : "",
                so_dien_thoai   : "",
                thong_tin_chung : "",
                trang_thai      : ""
            },
            teachers: [],
            delGV: {
                ho_va_ten       : "",
            },
            editGV: {
                anh_dai_dien    : "",
                ho_va_ten       : "",
                can_cuoc        : "",
                ma_giang_vien   : "",
                email           : "",
                password        : "",
                so_dien_thoai   : "",
                thong_tin_chung : "",
                trang_thai      : ""
            }
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData(){
            axios
                .get("http://127.0.0.1:8000/api/admin/giang-vien/data")
                .then((res) => {
                    this.teachers = res.data.giangvien;
                })
                .catch((res) => {
                    const teachers = Object.values(res.response.data.errors);
                    teachers.forEach((v, i) => {
                        toast.error(v[0]);
                    });
                });
        },
        addGiangVien(){
            axios
                .post("http://127.0.0.1:8000/api/admin/giang-vien/create", this.create)
                .then((res) => {
                    if (res.data.status) {
                        this.create = {
                            anh_dai_dien    : "",
                            ho_va_ten       : "",
                            can_cuoc        : "",
                            ma_giang_vien   : "",
                            email           : "",
                            password        : "",
                            so_dien_thoai   : "",
                            thong_tin_chung : "",
                            trang_thai      : ""
                        };
                        this.loadData();
                        toast(res.data.message, {
                            type: "success",
                            position: "top-right",
                        });
                    }
                })
                .catch((res) => {
                    const teachers = Object.values(res.response.data.errors);
                    teachers.forEach((v, i) => {
                        toast.error(v[0]);
                    });
                });
        },
        editGiangVien(){
            axios
                .post("http://127.0.0.1:8000/api/admin/giang-vien/update", this.editGV)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        toast(res.data.message, {
                            type: "success",
                            position: "top-right",
                        });
                    }
                })
                .catch((res) => {
                    const teachers = Object.values(res.response.data.errors);
                    teachers.forEach((v, i) => {
                        toast.error(v[0]);
                    });
                });
        },
        delGiangVien(){
            axios
                .post("http://127.0.0.1:8000/api/admin/giang-vien/delete", this.delGV)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        toast(res.data.message, {
                            type: "success",
                            position: "top-right",
                        });
                    }
                })
                .catch((res) => {
                    const teachers = Object.values(res.response.data.errors);
                    teachers.forEach((v, i) => {
                        toast.error(v[0]);
                    });
                });
        },
    },
}
</script>
<style></style>