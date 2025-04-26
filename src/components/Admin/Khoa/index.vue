<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-3">
                    <div class="card-header bg-white">
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0 mt-1"><b>Quản Lý Khoa</b></h4>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addKhoa">Thêm Mới Khoa</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead class="table-primary text-center">
                                    <tr>
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Tên Khoa</th>
                                        <th class="text-dark">Mã Khoa</th>
                                        <th class="text-dark">Trạng Thái</th>
                                        <th class="text-dark">Ghi Chú</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in examTypes" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle">{{ value.ten_khoa }}</td>
                                            <td class="align-middle">{{ value.ma_khoa }}</td>
                                            <td class="align-middle text-center">
                                                <button  v-on:click="doiTrangThai(value)" v-if="value.trang_thai == 1" class="btn btn-success">Đang Hoạt Động</button>
                                                <button v-on:click="doiTrangThai(value)" v-else class="btn btn-warning">Ngưng Hoạt Động</button>
                                            </td>
                                            <td class="align-middle">{{ value.ghi_chu }}</td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center">
                                                    <h4>
                                                        <i @click="Object.assign(editET, value)" class="bi bi-pencil-square text-info mr-2" data-toggle="modal" data-target="#editKhoa"></i>
                                                    </h4>
                                                    <h4>
                                                        <i @click="Object.assign(delET, value)" class="bi bi-trash3 text-danger" data-toggle="modal" data-target="#delKhoa"></i>
                                                    </h4>
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

    <!-- Modal Add -->
    <div class="modal fade" id="addKhoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white"><b>Thêm Mới Khoa</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal"><span>&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="text-dark"><b>Tên Khoa</b></label>
                        <input v-model="createET.ten_khoa" class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Khoa</b></label>
                        <input v-model="createET.ma_khoa" class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Trạng Thái</b></label>
                        <select v-model="createET.trang_thai" class="form-control">
                            <option disabled value="">Chọn trạng thái...</option>
                            <option value="1">Đang Hoạt Động</option>
                            <option value="0">Ngưng Hoạt Động</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Ghi Chú</b></label>
                        <input v-model="createET.ghi_chu" class="form-control" type="text">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="addExamType" class="btn btn-primary" data-dismiss="modal">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Edit -->
    <div class="modal fade" id="editKhoa" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <h5 class="modal-title text-white"><b>Cập Nhật Khoa</b></h5>
                    <button class="close text-white" data-dismiss="modal"><span>&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="text-dark"><b>Tên Khoa</b></label>
                        <input v-model="editET.ten_khoa" class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Khoa</b></label>
                        <input v-model="editET.ma_khoa" class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Trạng Thái</b></label>
                        <select v-model="editET.trang_thai" class="form-control">
                            <option disabled value="">Chọn trạng thái...</option>
                            <option value="1">Đang Hoạt Động</option>
                            <option value="0">Ngưng Hoạt Động</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Ghi Chú</b></label>
                        <input v-model="editET.ghi_chu" class="form-control" type="text">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="editExamType" class="btn btn-info" data-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Delete -->
    <div class="modal fade" id="delKhoa" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white"><b>Xóa Khoa</b></h5>
                    <button class="close text-white" data-dismiss="modal"><span>&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning">
                        Bạn có chắc chắn muốn xóa khoa <b class="text-danger">"{{ delET.ten_khoa }}"</b> không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="delExamType" class="btn btn-danger" data-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { toast } from "vue3-toastify";

export default {
    data() {
        return {
            createET: {
                ten_khoa: "",
                ma_khoa: "",
                ghi_chu: "",
                trang_thai: ""
            },
            examTypes: [],
            delET: {
                id: "",
                ten_khoa: ""
            },
            editET: {
                id: "",
                ten_khoa: "",
                ma_khoa: "",
                ghi_chu: "",
                trang_thai: ""
            }
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get("http://127.0.0.1:8000/api/admin/khoa/data")
                .then((res) => {
                    this.examTypes = res.data.data;
                })
                .catch((err) => {
                    toast.error("Lỗi khi load dữ liệu!", { position: "top-right" });
                });
        },
        addExamType() {
            axios.post("http://127.0.0.1:8000/api/admin/khoa/create", this.createET)
                .then((res) => {
                    if (res.data.status) {
                        this.createET = { ten_khoa: "", ma_khoa: "", ghi_chu: "", trang_thai: "" };
                        this.loadData();
                        toast.success(res.data.message, { position: "top-right", autoClose: 3000 });
                    }
                })
                .catch((err) => {
                    const errors = Object.values(err.response.data.errors);
                    errors.forEach(v => toast.error(v[0], { position: "top-right" }));
                });
        },
        editExamType() {
            axios.post("http://127.0.0.1:8000/api/admin/khoa/update", this.editET)
                .then((res) => {
                    if (res.data.status) {
                        this.editET = { id: "", ten_khoa: "", ma_khoa: "", ghi_chu: "", trang_thai: "" };
                        this.loadData();
                        toast.success(res.data.message, { position: "top-right", autoClose: 3000 });
                    }
                })
                .catch((err) => {
                    const errors = Object.values(err.response.data.errors);
                    errors.forEach(v => toast.error(v[0], { position: "top-right" }));
                });
        },
        delExamType() {
            axios.post("http://127.0.0.1:8000/api/admin/khoa/delete", this.delET)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        toast.success(res.data.message, { position: "top-right", autoClose: 3000 });
                    }
                })
                .catch((err) => {
                    const errors = Object.values(err.response.data.errors);
                    errors.forEach(v => toast.error(v[0], { position: "top-right" }));
                });
        },
        doiTrangThai(value) {
            axios
                .post("http://127.0.0.1:8000/api/admin/khoa/change-status", value)
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
    }
}
</script>