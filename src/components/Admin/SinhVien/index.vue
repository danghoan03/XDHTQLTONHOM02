<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-lg-12">
                <div class="card bg-white mt-3">
                    <div class="d-flex justify-content-between align-items-center" style="margin-top: 10px;">
                        <h4 style="margin-left: 20px;" class="mb-0 mt-1"><b>Quản lý Sinh Viên</b></h4>
                        <div class="d-flex align-items-center" style="margin-right: 20px;">
                            <select class=" form-control form-select mr-2" style="width: 200px; padding: 6px; height: auto;"
                                v-model="selectedKhoa" @change="filterByKhoa">
                                <option value="">-- Sắp xếp theo Khoa --</option>
                                <option v-for="khoa in list_khoa" :key="khoa.id" :value="khoa.id">
                                    {{ khoa.ten_khoa }}
                                </option>
                            </select>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addSinhVien">Thêm
                                Sinh Viên</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead class="table-primary text-center">
                                    <tr>
                                        <th colspan="100%">
                                            <div class="input-group w-100">
                                                <input v-on:keyup.enter="timKiem()" v-model="search.noi_dung"
                                                    type="text"
                                                    class="form-control search-control border border-1 border-secondary"
                                                    placeholder="Search...">
                                                <span class="position-absolute top-50 search-show translate-middle-y"
                                                    style="left: 15px;"><i class="bx bx-search"></i></span>
                                                <button v-on:click="timKiem()" class="btn btn-warning" type="button">Tìm
                                                    Kiếm</button>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr role="row" class="table-primary text-center">
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Ảnh Đại Diện</th>
                                        <th class="text-dark">Tên Sinh Viên</th>
                                        <th class="text-dark">Số Căn Cước</th>
                                        <th class="text-dark">Mã Sinh Viên</th>
                                        <th class="text-dark">Email</th>
                                        <th class="text-dark">Số Điện Thoại</th>
                                        <th class="text-dark">Khoa</th>
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
                                            <td class="align-middle text-center">{{ value.can_cuoc }}</td>
                                            <td class="align-middle text-center">{{ value.ma_sinh_vien }}</td>
                                            <td class="align-middle">{{ value.email }}</td>
                                            <td class="align-middle text-center">{{ value.so_dien_thoai }}</td>
                                            <td class="align-middle text-center">{{ value.ten_khoa }}</td>
                                            <td class="align-middle text-center">
                                                <button v-on:click="doiTrangThai(value)" v-if="value.trang_thai == 1"
                                                    class="btn btn-success">Hoạt
                                                    Động</button>
                                                <button v-on:click="doiTrangThai(value)" v-else
                                                    class="btn btn-warning">Tạm Ngưng</button>
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
                                <label class="text-dark"><b>Căn cước</b></label>
                                <input v-model="create.can_cuoc" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Mã sinh viên</b></label>
                                <input v-model="create.ma_sinh_vien" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Khoa</b></label>
                                <select v-model="create.khoa_id" class="form-control">
                                    <template v-for="(value, index) in list_khoa" :key="index">
                                        <option v-bind:value="value.id">{{ value.ten_khoa }}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label class="text-dark"><b>Thông tin chung</b></label>
                                <textarea v-model="create.thong_tin_chung" class="form-control" name=""
                                    rows="2"></textarea>
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
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
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
                                <label class="text-dark"><b>Căn cước</b></label>
                                <input v-model="editSV.can_cuoc" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Mã sinh viên</b></label>
                                <input v-model="editSV.ma_sinh_vien" class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Khoa</b></label>
                                <select v-model="editSV.khoa_id" class="form-control">
                                    <template v-for="(value, index) in list_khoa" :key="index">
                                        <option v-bind:value="value.id">{{ value.ten_khoa }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Trạng thái</b></label>
                                <select v-model="editSV.trang_thai" class="form-control">
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Tạm Ngưng</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label class="text-dark"><b>Thông tin chung</b></label>
                                <textarea v-model="editSV.thong_tin_chung" class="form-control" name=""
                                    rows="2"></textarea>
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
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
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
                    <button @click="delSinhVien()" type="button" class="btn btn-danger"
                        data-dismiss="modal">Xóa</button>
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
            create: {
                id: "",
                ho_va_ten: "",
                can_cuoc: "",
                email: "",
                so_dien_thoai: "",
                thong_tin_chung: "",
                trang_thai: "",
                ma_sinh_vien: "",
                khoa_id: "",
            },
            students: [],
            list_khoa: [],
            allsinhvien: [], // lưu bản gốc để lọc
            selectedKhoa: '', // giá trị khoa được chọn
            
            delSV: {
                ho_va_ten: "",
            },
            editSV: {
                id: "",
                ho_va_ten: "",
                can_cuoc: "",
                email: "",
                so_dien_thoai: "",
                thong_tin_chung: "",
                trang_thai: "",
                ma_sinh_vien: "",
                khoa_id: "",
            },
            search: {}
        }
    },
    mounted() {
        this.loadData();
        this.loadDataKhoa();
    },
    methods: {
        
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/sinh-vien/data")
                .then((res) => {
                    this.students = res.data.sinhvien;
                    this.allsinhvien = res.data.sinhvien; // lưu bản gốc để lọc
                })
                .catch((res) => {
                    const students = Object.values(res.response.data.errors);
                    students.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
        addSinhVien() {
            axios
                .post("http://127.0.0.1:8000/api/admin/sinh-vien/create", this.create)
                .then((res) => {
                    if (res.data.status) {
                        this.create = {
                            ho_va_ten: "",
                            email: "",
                            so_dien_thoai: "",
                            thong_tin_chung: "",
                            trang_thai: "",
                            ma_sinh_vien: "",
                            khoa_id: "",
                            can_cuoc: "",
                            ma_sinh_vien: "",
                            khoa_id: "",
                        };
                        this.loadData();
                        toast(res.data.message, {
                            type: "success",
                            position: "top-right",
                        });
                    }
                })
                .catch((res) => {
                    const students = Object.values(res.response.data.errors);
                    students.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
        editSinhVien() {
            axios
                .post("http://127.0.0.1:8000/api/admin/sinh-vien/update", this.editSV)
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
                    const students = Object.values(res.response.data.errors);
                    students.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
        delSinhVien() {
            axios
                .post("http://127.0.0.1:8000/api/admin/sinh-vien/delete", this.delSV)
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
                    const subjects = Object.values(res.response.data.errors);
                    subjects.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
        loadDataKhoa() {
            axios.get("http://127.0.0.1:8000/api/admin/khoa/data")
                .then((res) => {
                    this.list_khoa = res.data.data;
                })
                .catch((err) => {
                    toast.error("Lỗi khi load dữ liệu!", { position: "top-right" });
                });
        },
        doiTrangThai(value) {
            axios
                .post("http://127.0.0.1:8000/api/admin/sinh-vien/change-status", value)
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
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
        timKiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/sinh-vien/search", this.search)
                .then((res) => {
                    this.students = res.data.data
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
        filterByKhoa() {
            if (this.selectedKhoa === '') {
                this.students = this.allsinhvien; // nếu không chọn khoa nào => hiển thị lại tất cả
            } else {
                this.students = this.allsinhvien.filter((sv) => sv.khoa_id == this.selectedKhoa);
            }
        },
    },
}
</script>
<style></style>