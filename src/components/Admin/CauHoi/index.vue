<template>
    <div class="wrapper">
        <div class="row">
            <div class="col-lg-6">
                <div class="card bg-white mt-3">
                    <div class="card-header bg-white">
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0 mt-1"><b>Quản Lý Câu Hỏi</b></h4>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addCauHoi">Thêm
                                Câu Hỏi</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead class="table-primary text-center">
                                    <tr role="row">
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Môn Học</th>
                                        <th class="text-dark">Mã Môn Học</th>
                                        <th class="text-dark">Xem Câu Hỏi</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in questions" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle">{{ value.ten_mon_hoc }}</td>
                                            <td class="align-middle">{{ value.ma_mon_hoc }}</td>
                                            <td class="align-middle text-center">
                                                <button class="btn btn-info" data-toggle="modal"
                                                    data-target="#viewCauHoi">Xem</button>
                                            </td>
                                            <td class="align-middle"></td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center">
                                                    <h4><i class="bi bi-pencil-square text-info mr-2"
                                                            data-toggle="modal" data-target="#editCauHoi"></i></h4>
                                                    <h4><i class="bi bi-trash3 text-danger" data-toggle="modal"
                                                            data-target="#delCauHoi"></i></h4>
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
<div class="modal fade" id="addCauHoi" tabindex="-1" aria-labelledby="addCauHoiLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="addCauHoiLabel"><b>Thêm Mới Câu Hỏi</b></h5>
                <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="mb-2">
                            <label>Tên Câu Hỏi</label>
                            <input class="form-control" type="text" v-model="create.ten_cau_hoi">
                        </div>
                        <div class="mb-2">
                            <label>Loại Câu Hỏi</label>
                            <select class="form-control" v-model="create.loai_cau_hoi">
                                <option value="">Chọn loại câu hỏi...</option>
                                <option value="0">Trắc Nghiệm</option>
                                <option value="1">Trả Lời Ngắn</option>
                                <option value="2">Tự Luận</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label>Môn Học</label>
                            <select class="form-control" v-model="create.id_mon_hoc">
                                <option value="">Chọn môn học...</option>
                                <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
                                    {{ subject.ten_mon_hoc }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="mb-2">
                            <label>Đáp Án A</label>
                            <input class="form-control" type="text" v-model="create.dap_an_a">
                        </div>
                        <div class="mb-2">
                            <label>Đáp Án B</label>
                            <input class="form-control" type="text" v-model="create.dap_an_b">
                        </div>
                        <div class="mb-2">
                            <label>Đáp Án C</label>
                            <input class="form-control" type="text" v-model="create.dap_an_c">
                        </div>
                        <div class="mb-2">
                            <label>Đáp Án D</label>
                            <input class="form-control" type="text" v-model="create.dap_an_d">
                        </div>
                        <div class="mb-2">
                            <label>Đáp Án Đúng</label>
                            <input class="form-control" type="text" v-model="create.dap_an_dung">
                        </div>
                        <div class="mb-2">
                            <label>Nội Dung Trả Lời</label>
                            <textarea class="form-control" v-model="create.noi_dung_tra_loi"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary" @click="addCauHoi">Thêm Mới</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { toast } from "vue3-toastify";
import axios from 'axios';

export default {
    data() {
        return {
            create: {},
            update: {},
            del: {},
            subjects: [],
            questions: [], // Thêm biến questions vào đây
        };
    },
    mounted() {
        this.loadData();
        this.loadDataMonHoc();
    },
    methods: {
        loadDataMonHoc() {
            axios
                .get("http://127.0.0.1:8000/api/admin/mon-hoc/data")
                .then((res) => {
                    this.subjects = res.data.monhoc;
                })
                .catch((error) => {
                    const subjects = Object.values(error.response.data.errors);
                    subjects.forEach((v) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/cau-hoi/data")
                .then((res) => {
                    this.questions = res.data.data; // Đảm bảo res.data.data có định dạng đúng
                })
                .catch((error) => {
                    const questions = Object.values(error.response.data.errors);
                    questions.forEach((v) => {
                        toast.error(v[0]);
                    });
                });
        },
        addCauHoi() {
            axios
                .post("http://127.0.0.1:8000/api/admin/cau-hoi/create", this.create)
                .then((res) => {
                    if (res.data.status) {
                        this.create = {
                            id_mon_hoc: "",
                            ten_cau_hoi: "",
                            dap_an_dung: "",
                            dap_an_a: "",
                            dap_an_b: "",
                            dap_an_c: "",
                            dap_an_d: "",
                            noi_dung_tra_loi: "",
                            loai_cau_hoi: "",
                            chuan_dau_ra: "",
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
        editCauHoi() {
            // Thêm logic cho chỉnh sửa câu hỏi
        },
        delCauHoi() {
            // Thêm logic cho xóa câu hỏi
        },
    },
}
</script>

<style></style>