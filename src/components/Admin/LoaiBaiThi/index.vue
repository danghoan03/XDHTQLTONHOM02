<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-3">
                    <div class="card-header bg-white">
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0 mt-1"><b>Quản Lý Loại Bài Thi</b></h4>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addLoaiBaiThi">Thêm Loại Bài Thi</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hove">
                                <thead class="table-primary text-center">
                                    <tr>
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Tên Loại Bài Thi</th>
                                        <th class="text-dark">Trạng Thái</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in examTypes" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle ">{{ value.ten_loai_bai_thi }}</td>
                                            <td class="align-middle text-center">
                                                <button v-if="value.trang_thai == 1" class="btn btn-success">Đang Hoạt Động</button>
                                                <button v-else class="btn btn-warning">Ngưng Hoạt Động</button>
                                            </td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center">
                                                    <h4><i @click="Object.assign(editET, value)" class="bi bi-pencil-square text-info mr-2"
                                                            data-toggle="modal" data-target="#editLoaiBaiThi"></i></h4>
                                                    <h4><i @click="Object.assign(delET, value)" class="bi bi-trash3 text-danger" data-toggle="modal"
                                                            data-target="#delLoaiBaiThi"></i></h4>
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
    <div class="modal fade" id="addLoaiBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Thêm Mới Loại Bài Thi</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="text-dark"><b>Tên Loại Bài Thi</b></label>
                        <input v-model="createET.ten_loai_bai_thi" class="form-control" type="text">
                    </div>
                    <div class="">
                        <label class="text-dark"><b>Trạng Thái</b></label>
                        <select v-model="createET.trang_thai" class="placeholder form-control">
                            <option>Chọn trạng thái...</option>
                            <option value="1">Đang Hoạt Động</option>
                            <option value="0">Ngưng Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="addExamType()" type="button" class="btn btn-primary" data-dismiss="modal">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Edit-->
    <div class="modal fade" id="editLoaiBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Cập Nhật Loại Bài Thi</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="text-dark"><b>Tên Loại Bài Thi</b></label>
                        <input v-model="editET.ten_loai_bai_thi" class="form-control" type="text">
                    </div>
                    <div class="">
                        <label class="text-dark"><b>Trạng Thái</b></label>
                        <select v-model="editET.trang_thai" class="placeholder form-control" disabled>
                            <option>Chọn trạng thái...</option>
                            <option value="1">Đang Hoạt Động</option>
                            <option value="0">Ngưng Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="editExamType()" type="button" class="btn btn-info" data-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Del-->
    <div class="modal fade" id="delLoaiBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Xóa Loại Bài Thi</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        Bạn có chắc chắn muốn xóa môn học <b class="text-danger">"{{ delET.ten_loai_bai_thi }}"</b> không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="delExamType()" type="button" class="btn btn-danger" data-dismiss="modal">Xóa</button>
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
                ten_loai_bai_thi: "",
                trang_thai      : ""
            },
            examTypes   : [],
            delET: {
                ten_loai_bai_thi: "",
            },
            editET: {
                ten_loai_bai_thi: "",
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
                .get("http://127.0.0.1:8000/api/admin/loai-bai-thi/data")
                .then((res) => {
                    this.examTypes = res.data.loaibaithi;
                })
                .catch((res) => {
                    const examTypes = Object.values(res.response.data.errors);
                    examTypes.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
        addExamType(){
            axios
                .post("http://127.0.0.1:8000/api/admin/loai-bai-thi/create", this.createET)
                .then((res) => {
                    if (res.data.status) {
                        this.create = {
                            ten_loai_bai_thi: "",
                            trang_thai      : ""
                        };
                        this.loadData();
                        this.$toast.success(res.data.message, {
                            position: "top-right",
                            autoClose: 1000, // Đóng sau 1 giây
                        });
                    }
                })
                .catch((res) => {
                    const examTypes = Object.values(res.response.data.errors);
                    examTypes.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
        editExamType(){
            axios
                .post("http://127.0.0.1:8000/api/admin/loai-bai-thi/update", this.editET)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.$toast.success(res.data.message, {
                            position: "top-right",
                            autoClose: 1000, // Đóng sau 1 giây
                        });
                    }
                })
                .catch((res) => {
                    const examTypes = Object.values(res.response.data.errors);
                    examTypes.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
        delExamType(){
            axios
                .post("http://127.0.0.1:8000/api/admin/loai-bai-thi/delete", this.delET)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.$toast.success(res.data.message, {
                            position: "top-right",
                            autoClose: 1000, // Đóng sau 1 giây
                        });
                    }
                })
                .catch((res) => {
                    const examTypes = Object.values(res.response.data.errors);
                    examTypes.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
    },
}
</script>
<style>
    
</style>