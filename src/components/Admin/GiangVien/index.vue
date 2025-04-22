<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-lg-12">
                <div class="card bg-white mt-3">
                    <div class="d-flex justify-content-between align-items-center" style="margin-top: 10px;">
                        <h4 style="margin-left: 20px;" class="mb-0 mt-1"><b>Danh Sách Giảng Viên</b></h4>
                        <div class="d-flex align-items-center" style="margin-right: 20px;">
                            <select class=" form-control form-select mr-2" style="width: 200px; padding: 6px; height: auto;"
                                v-model="selectedKhoa" @change="filterByKhoa">
                                <option value="">-- Sắp xếp theo Khoa --</option>
                                <option v-for="khoa in list_khoa" :key="khoa.id" :value="khoa.id">
                                    {{ khoa.ten_khoa }}
                                </option>
                            </select>
                            <button style="border-radius: 5px;" class="btn btn-primary" data-toggle="modal"
                                data-target="#addGiangVien">
                                Thêm Giảng Viên
                            </button>
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
                                                <button v-on:click="timKiem()" class="btn btn-warning"
                                                    type="button">Tìm
                                                    Kiếm</button>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr role="row" class="table-primary text-center">
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Ảnh Đại Diện</th>
                                        <th class="text-dark">Tên Giảng Viên</th>
                                        <th class="text-dark">Số Căn Cước</th>
                                        <th class="text-dark">Mã Giảng Viên</th>
                                        <th class="text-dark">Email</th>
                                        <th class="text-dark">Số Điện Thoại</th>
                                        <th class="text-dark">Khoa</th>
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
                                                    <img v-bind:src="value.anh_dai_dien" width="100" height="100"
                                                        alt="avatar">

                                                </span>
                                            </td>
                                            <td class="align-middle">{{ value.ho_va_ten }}</td>
                                            <td class="align-middle">{{ value.can_cuoc }}</td>
                                            <td class="align-middle text-center">{{ value.ma_giang_vien }}</td>
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
                                                    <h4><i @click="Object.assign(editGV, value)"
                                                            class="bi bi-pencil-square text-info mr-2"
                                                            data-toggle="modal" data-target="#editGiangVien"></i></h4>
                                                    <h4><i @click="Object.assign(delGV, value)"
                                                            class="bi bi-trash3 text-danger" data-toggle="modal"
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
                                <label class="text-dark"><b>Ảnh đại diện</b></label>
                                <input type="file" class="form-control" @change="onFileChange($event, 'create')">
                            </div>
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
                            <div class="mb-2">
                                <label class="text-dark"><b>Khoa</b></label>
                                <select v-model="create.khoa_id" class="form-control">
                                    <template v-for="(value, index) in list_khoa" :key="index">
                                        <option v-bind:value="value.id">{{ value.ten_khoa }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label class="text-dark"><b>Trạng thái</b></label>
                                <select v-model="create.trang_thai" class="form-control">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Tạm ngưng</option>
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
                    <button @click="addGiangVien()" type="button" class="btn btn-primary" data-dismiss="modal">Thêm
                        Mới</button>
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
                                <label class="text-dark"><b>Ảnh đại diện</b></label>
                                <!-- Thêm input chọn ảnh trong modal update -->
                                <input type="file" class="form-control" @change="onFileChange($event)">


                            </div>

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
                                <label class="text-dark"><b>Khoa</b></label>
                                <select v-model="editGV.khoa_id" class="form-control">
                                    <template v-for="(value, index) in list_khoa" :key="index">
                                        <option :value="value.id">{{ value.ten_khoa }}</option>
                                    </template>
                                </select>
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
                                <textarea v-model="editGV.thong_tin_chung" class="form-control" name=""
                                    rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="editGiangVien()" type="button" class="btn btn-info"
                        data-dismiss="modal">Lưu</button>
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
                    <button @click="delGiangVien()" type="button" class="btn btn-danger"
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
                anh_dai_dien: "",
                ho_va_ten: "",
                can_cuoc: "",
                ma_giang_vien: "",
                email: "",
                password: "",
                so_dien_thoai: "",
                thong_tin_chung: "",
                trang_thai: ""
            },
            teachers: [],
            list_khoa: [],
            search: {},
            selectedKhoa: '',
            allTeachers: [], // Dữ liệu gốc chưa lọc
            delGV: {
                ho_va_ten: "",
            },
            editGV: {
                anh_dai_dien: "",
                ho_va_ten: "",
                can_cuoc: "",
                ma_giang_vien: "",
                email: "",
                password: "",
                so_dien_thoai: "",
                thong_tin_chung: "",
                trang_thai: ""
            }
        }
    },
    mounted() {
        this.loadData();
        this.KhoaData();
    },
    methods: {
        filterByKhoa() {
            if (this.selectedKhoa === '') {
                this.teachers = this.allTeachers; // nếu không chọn khoa nào => hiển thị lại tất cả
            } else {
                this.teachers = this.allTeachers.filter((gv) => gv.khoa_id == this.selectedKhoa);
            }
        },
        onFileChange(event, type = '') {
            const file = event.target.files[0];
            if (file) {
                if (type === 'create') {
                    this.create.anh_dai_dien = file; // Lưu tệp ảnh cho tạo mới
                } else {
                    this.editGV.anh_dai_dien = file; // Lưu tệp ảnh cho chỉnh sửa
                }
            }
        }, onFileChange(event, type = '') {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Cập nhật base64 cho phần chỉnh sửa ảnh nếu có
                    if (type === 'create') {
                        this.create.anh_dai_dien = e.target.result;
                    } else {
                        this.editGV.anh_dai_dien = e.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        }

        ,


        KhoaData() {
            axios.get("http://127.0.0.1:8000/api/admin/khoa/data", {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    this.list_khoa = res.data.data;
                })
                .catch((err) => {
                    toast.error("Lỗi khi load dữ liệu!", { position: "top-right" });
                });
        },
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/giang-vien/data",{
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    this.teachers = res.data.giangvien;
                    this.allTeachers = res.data.giangvien; // lưu bản gốc để lọc
                })
                .catch((res) => {
                    const teachers = Object.values(res.response.data.errors);
                    teachers.forEach((v, i) => {
                        toast.error(v[0]);
                    });
                });
        },
        addGiangVien() {
            const number = this.teachers.length + 1;  // Giả sử số giảng viên hiện tại là số lượng trong teachers
            const maGiangVien = "GV" + String(number).padStart(4, '0');  // Đảm bảo mã giảng viên có dạng "GV0001", "GV0002", ...

            // Gán mã giảng viên đã tạo cho create.ma_giang_vien
            this.create.ma_giang_vien = maGiangVien;
            axios
                .post("http://127.0.0.1:8000/api/admin/giang-vien/create", this.create,{
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.create = {
                            anh_dai_dien: "",
                            ho_va_ten: "",
                            can_cuoc: "",
                            ma_giang_vien: "",
                            email: "",
                            password: "",
                            so_dien_thoai: "",
                            thong_tin_chung: "",
                            trang_thai: ""
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
        editGiangVien() {

            axios
                .post("http://127.0.0.1:8000/api/admin/giang-vien/update", this.editGV,{
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
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
        delGiangVien() {
            axios
                .post("http://127.0.0.1:8000/api/admin/giang-vien/delete", this.delGV,{
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
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
        timKiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/giang-vien/search", this.search,{
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    this.teachers = res.data.data
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
        doiTrangThai(value) {
            axios
                .post("http://127.0.0.1:8000/api/admin/giang-vien/change-status", value,{
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
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
    },
}
</script>
<style></style>
