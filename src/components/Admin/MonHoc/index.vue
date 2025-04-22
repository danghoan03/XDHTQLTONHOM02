<template>
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-lg-12">
                <div class="card bg-white mt-3">
                    <div class="d-flex justify-content-between align-items-center" style="margin-top: 10px;">
                        <h4 style="margin-left: 20px;" class="mb-0 mt-1"><b>Quản Lý Môn Học</b></h4>
                        <div class="d-flex align-items-center" style="margin-right: 20px;">
                            <select class=" form-control form-select mr-2"
                                style="width: 200px; padding: 6px; height: auto;" v-model="selectedMon"
                                @change="filterByMon">
                                <option value="">-- Sắp xếp theo môn--</option>
                                <option v-for="mon in subjects" :key="mon.id" :value="mon.id">
                                    {{ mon.ma_mon_hoc }}
                                </option>
                            </select>
                            <button style="border-radius: 5px;" class="btn btn-primary" data-toggle="modal"
                                data-target="#addMonHoc">
                                Thêm Môn Học
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover dataTable">
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
                                    <tr role="row">
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Tên Môn Học</th>
                                        <th class="text-dark">Mã Môn Học</th>
                                        <th class="text-dark">Mã Số Môn Học</th>
                                        <th class="text-dark">Số Tín Chỉ</th>
                                        <th class="text-dark">Trạng Thái</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in subjects" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle">{{ value.ten_mon_hoc }}</td>
                                            <td class="align-middle text-center">{{ value.ma_mon_hoc }}</td>
                                            <td class="align-middle text-center">{{ value.ma_so_mon_hoc }}</td>
                                            <td class="align-middle text-center">{{ value.so_tin_chi }}</td>
                                            <td class="align-middle text-center">
                                                <button v-on:click="doiTrangThai(value)" v-if="value.trang_thai == 1" class="btn btn-success">Đang Hoạt
                                                    Động</button>
                                                <button v-on:click="doiTrangThai(value)" v-else class="btn btn-danger">Ngưng Hoạt Động</button>
                                            </td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center">
                                                    <h4><i @click="Object.assign(edit, value)"
                                                            class="bi bi-pencil-square text-info mr-2"
                                                            data-toggle="modal" data-target="#editMonHoc"></i></h4>
                                                    <h4><i @click="Object.assign(del, value)"
                                                            class="bi bi-trash3 text-danger" data-toggle="modal"
                                                            data-target="#delMonHoc"></i></h4>
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
    <div class="modal fade" id="addMonHoc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Thêm Mới Môn Học</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="text-dark"><b>Tên Môn Học</b></label>
                        <input v-model="create.ten_mon_hoc" class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Môn Học</b></label>
                        <input v-model="create.ma_mon_hoc" class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Số Môn Học</b></label>
                        <input v-model="create.ma_so_mon_hoc" class="form-control" type="number" min="0">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Số Tín Chỉ</b></label>
                        <input v-model="create.so_tin_chi" class="form-control" type="number" min="0">
                    </div>
                    <div class="">
                        <label class="text-dark"><b>Trạng Thái</b></label>
                        <select v-model="create.trang_thai" class="placeholder form-control">
                            <option>Chọn trạng thái...</option>
                            <option value="1">Đang Hoạt Động</option>
                            <option value="0">Ngưng Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="addMonHoc()" type="button" class="btn btn-primary" data-dismiss="modal">Thêm
                        Mới</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Edit-->
    <div class="modal fade" id="editMonHoc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Cập Nhật</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="text-dark"><b>Tên Môn Học</b></label>
                        <input v-model="edit.ten_mon_hoc" class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Môn Học</b></label>
                        <input v-model="edit.ma_mon_hoc" class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Số Môn Học</b></label>
                        <input v-model="edit.ma_so_mon_hoc" class="form-control" type="number" min="0">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Số Tín Chỉ</b></label>
                        <input v-model="edit.so_tin_chi" class="form-control" type="number" min="0">
                    </div>
                    <div class="">
                        <label class="text-dark"><b>Trạng Thái</b></label>
                        <select v-model="edit.trang_thai" class="placeholder form-control">
                            <option>Chọn trạng thái...</option>
                            <option value="1">Đang Hoạt Động</option>
                            <option value="0">Ngưng Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="updateMonHoc()" type="button" class="btn btn-info" data-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Del-->
    <div class="modal fade" id="delMonHoc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Xóa Môn Học</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        Bạn có chắc chắn muốn xóa môn học <b class="text-danger">"{{ del.ten_mon_hoc }}"</b> không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button @click="delMonHoc()" type="button" class="btn btn-danger" data-dismiss="modal">Xóa</button>
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
            create: {
                ma_mon_hoc: "",
                ten_mon_hoc: "",
                ma_so_mon_hoc: "",
                so_tin_chi: "",
                trang_thai: "",
            },
            del: {
                ten_mon_hoc: "",
            },
            edit: {
                ma_mon_hoc: "",
                ten_mon_hoc: "",
                ma_so_mon_hoc: "",
                so_tin_chi: "",
                trang_thai: "",
            },
            subjects: [],
            search: {},
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        filterByMon() {
            if (this.selectedMon === '') {
                this.subjects = this.allSubjects; // Nếu không chọn môn nào => hiển thị lại tất cả
            } else {
                // Lọc các môn học theo id đã chọn
                this.subjects = this.allSubjects.filter((mon) => mon.id === this.selectedMon);
            }
        },
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/mon-hoc/data")
                .then((res) => {
                    this.subjects = res.data.monhoc;
                    this.allSubjects = res.data.monhoc;
                })
                .catch((res) => {
                    const subjects = Object.values(res.response.data.errors);
                    subjects.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        addMonHoc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/mon-hoc/create", this.create)
                .then((res) => {
                    if (res.data.status) {
                        this.create = {
                            ma_mon_hoc: "",
                            ten_mon_hoc: "",
                            ma_so_mon_hoc: "",
                            so_tin_chi: "",
                            trang_thai: "",
                        };
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
        updateMonHoc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/mon-hoc/update", this.edit)
                .then((res) => {
                    if (res.data.status) {
                        this.create = {
                            ma_mon_hoc: "",
                            ten_mon_hoc: "",
                            ma_so_mon_hoc: "",
                            so_tin_chi: "",
                            trang_thai: "",
                        };
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
        delMonHoc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/mon-hoc/delete", this.del)
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
        timKiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/mon-hoc/search", this.search)
                .then((res) => {
                    this.subjects = res.data.monhoc
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
                .post("http://127.0.0.1:8000/api/admin/mon-hoc/change-status", value)
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