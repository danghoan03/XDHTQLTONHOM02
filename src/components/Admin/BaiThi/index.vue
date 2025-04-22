<template>
    <div class="wrapper">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <label class="text-dark"><b>Tìm Kiếm Bài Thi</b></label>
                                <input type="text" class="form-control" placeholder=" Tên bài thi...."
                                    aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="col-md-3">
                                <label class="text-dark"><b>Lọc Theo Môn Học</b></label>

                                <select class=" placeholder form-control form-select mr-2" v-model="selectedMon"
                                    @change="filterByMonHoc">
                                    <option value="" class="placeholder">-- Chọn môn học --</option>
                                    <option v-for="mon in subjects" :key="mon.id" :value="mon.id">
                                        {{ mon.ten_mon_hoc }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="text-dark "><b>Lọc Theo Loại Bài Thi</b></label>
                                <select class="form-control" v-model="selectedLoaiBaiThi" @change="filterByLoaiBaiThi">
                                    <option value="">Tất cả loại bài thi</option>
                                    <option v-for="loai in examTypes" :key="loai.id" :value="loai.id">

                                        {{ loai.ten_loai_bai_thi }}
                                    </option>
                                </select>

                            </div>
                            <div class="col-md-3">
                                <label class="text-dark"><b>Lọc Theo Trạng Thái</b></label>
                                <select class="placeholder form-control">
                                    <option>Tất cả trạng thái....</option>
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Tạm Dừng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-2">
                    <div class="card-header bg-white">
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0 mt-1"><b>Danh Sách Bài Thi</b></h4>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addBaiThi">Thêm Mới Bài
                                Thi</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hove">
                                <thead class="table-primary text-center">
                                    <tr>
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Tên Bài Thi</th>
                                        <th class="text-dark">Môn Học</th>
                                        <th class="text-dark">Lớp</th>
                                        <th class="text-dark">Thời Gian Bắt đầu</th>
                                        <th class="text-dark">Thời Gian Kết Thúc</th>
                                        <th class="text-dark">Thời Gian Thi</th>
                                        <th class="text-dark">Loại Bài Thi</th>

                                        <th class="text-dark">Trạng Thái</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in exams" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle ">{{ value.ten_bai_thi }}</td>
                                            <td class="align-middle text-center">{{ value.ten_mon_hoc }}</td>

                                            <td class="align-middle text-center">{{ value.ten_lop }}</td>

                                            <td class="align-middle ">
                                                <table class="table table-bordered">
                                                    <tbody>
                                                        <td><b>Bắt đầu:</b> {{ formatDate(value.ngay_bat_dau) }}</td>
                                                        <td><b>Kết thúc:</b> {{ formatDate(value.ngay_ket_thuc) }}</td>

                                                    </tbody>
                                                </table>
                                            </td>
                                            <td class="align-middle text-center">{{ value.thoi_gian_thi }}</td>
                                            <td class="align-middle text-center">
                                                <button v-if="value.trang_thai == 1" class="btn btn-success">Hoạt
                                                    Động</button>
                                                <button v-else class="btn btn-warning">Tạm Ngưng</button>
                                            </td>
                                            <td class="align-middle text-center text-nowrap">
                                                <div class="btn-group">
                                                    <h4><i class="bi bi-pencil-square text-info mr-2"
                                                            data-toggle="modal" data-target="#editBaiThi"></i></h4>
                                                    <h4><i class="bi bi-trash3 text-danger mr-2" data-toggle="modal"
                                                            data-target="#delBaiThi"></i></h4>
                                                    <h4><i class="bi bi-people-fill text-success mr-2"
                                                            data-toggle="modal" data-target="#listSV"></i></h4>
                                                    <h4><i class="bi bi-box-arrow-in-right text-warning"
                                                            data-toggle="modal" data-target="#enterBaiThi"></i></h4>
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
            <div class="modal fade" id="addBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-primary">
                            <h5 class="modal-title text-white" id="exampleModalLabel"><b>Thêm Mới Bài Thi</b></h5>
                            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Tên Bài Thi</b></label>
                                        <input class="form-control" type="text" v-model="create.ten_bai_thi">

                                    </div>
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Lớp Học</b></label>
                                        <select class="placeholder form-control" v-model="create.id_lop_hoc">
                                            <option disabled value="">Chọn lớp hoc...</option>
                                            <option v-for="lop in class" :value="lop.id">{{ lop.ten_lop }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Thời Gian Bắt Đầu</b></label>
                                        <input class="form-control" type="datetime-local"
                                            v-model="create.thoi_gian_bat_dau">

                                    </div>
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Thời Gian Kết Thúc</b></label>
                                        <input class="form-control" type="datetime-local"
                                            v-model="create.thoi_gian_ket_thuc">

                                    </div>
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Thời Gian Thi</b></label>
                                        <input class="form-control" type="number" placeholder="Thời gian thi"
                                            v-model="create.thoi_gian_thi">

                                    </div>
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Mật Khẩu</b> (nếu có)</label>
                                        <input     v-model="create.mat_khau" class="form-control"  type="number">
                                    </div>

                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Môn Học</b></label>
                                        <select class="placeholder form-control" v-model="create.id_mon_hoc">
                                            <option disabled value="">Chọn môn học...</option>
                                            <option v-for="mon in subjects" :value="mon.id">{{ mon.ten_mon_hoc }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Loại Bài Thi</b></label>
                                        <select class="placeholder form-control" v-model="create.id_loai_bai_thi">
                                            <option disabled value="">Chọn loại bài thi...</option>
                                            <option v-for="loai in examTypes" :value="loai.id">{{ loai.ten_loai_bai_thi
                                            }}</option>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label class="text-dark"><b>Trạng Thái</b></label>
                                        <select class="form-control" v-model="create.trang_thai">
                                            <option value="1">Đang Hoạt Động</option>
                                            <option value="0">Ngưng Hoạt Động</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary" v-on:click="addBaiThi()">Thêm Mới</button>

                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal Edit-->

        </div>

    </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import { toast } from "vue3-toastify";


export default {
    data() {
        return {
            create: {
                ten_bai_thi: "",
                id_loai_bai_thi: "",
                thoi_gian_bat_dau: "",
                thoi_gian_ket_thuc: "",
                thoi_gian_thi: "",
                id_giang_vien: "",
                id_mon_hoc: "",
                id_lop_hoc: "",
                mat_khau: "",
                trang_thai: "",
            },
            update: {
                ten_bai_thi: "",
                id_loai_bai_thi: "",
                thoi_gian_bat_dau: "",
                thoi_gian_ket_thuc: "",
                id_giang_vien: "",
                id_mon_hoc: "",
                id_lop_hoc: "",
                mat_khau: "",
                trang_thai: "",
            },
            del: {
                ten_bai_thi: "",
            },
            exams: [],
            subjects: [],
            allExams: [],
            examTypes: [],
            selectedMon: "",
            selectedLoaiBaiThi: "",
            class: [],
        }
    },
    mounted() {
        this.loadData();
        this.loadDataMonHoc();
        this.loadDataLoaiBaiThi();
        this.loadDataLopHoc();

    },
    methods: {
        filterByLoaiBaiThi() {
            if (this.selectedLoaiBaiThi === '') {
                this.exams = this.allExams;
            } else {
                this.exams = this.allExams.filter((loaibt) => loaibt.id_loai_bai_thi == this.selectedLoaiBaiThi);
            }
        },
        filterByMonHoc() {
            if (this.selectedMon === '') {
                this.exams = this.allExams;
            } else {
                this.exams = this.allExams.filter((mon) => mon.id_mon_hoc == this.selectedMon);
            }
        },
        filterExams() {
            this.exams = this.allExams.filter((exam) => {
                const monHocMatch = this.selectedMon ? exam.id_mon_hoc == this.selectedMon : true;
                const loaiBaiThiMatch = this.selectedLoaiBaiThi ? exam.id_loai_bai_thi == this.selectedLoaiBaiThi : true;
                return monHocMatch && loaiBaiThiMatch;
            });
        },
        formatDate(date) {
            return moment(date).format('DD/MM/YYYY HH:mm:ss');
        },
        loadDataLoaiBaiThi() {
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
        loadDataMonHoc() {
            axios
                .get("http://127.0.0.1:8000/api/admin/mon-hoc/data-open")
                .then((res) => {
                    this.subjects = res.data.monhoc;
                })
                .catch((res) => {
                    const subjects = Object.values(res.response.data.errors);
                    subjects.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        loadDataLopHoc() {
            axios
                .get("http://127.0.0.1:8000/api/admin/lop-hoc/data-open")
                .then((res) => {
                    this.class = res.data.lophoc;
                })
                .catch((res) => {
                    const subjects = Object.values(res.response.data.errors);
                    subjects.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/bai-thi/data")
                .then((res) => {
                    this.exams = res.data.baithi;
                    this.allExams = res.data.baithi;
                })
                .catch((res) => {
                    const exams = Object.values(res.response.data.errors);
                    exams.forEach((v) => {
                        toast.error(v[0]);
                    });
                });
        },
        addBaiThi() {
            axios
                .post("http://127.0.0.1:8000/api/admin/bai-thi/create", this.create)
                .then((res) => {
                    if (res.data.status) {
                        this.create = {
                            ten_bai_thi: "",
                            thoi_gian_bat_dau: "",
                            thoi_gian_ket_thuc: "",
                            thoi_gian_thi: "",
                            id_mon_hoc: "",
                            id_lop_hoc: "",
                            id_loai_bai_thi: "",
                            trang_thai: "",
                        };
                        this.loadData();
                        toast.success(res.data.message, {
                            position: "top-right",
                        });
                    }
                })
                .catch((res) => {
                    if (res.response && res.response.data.errors) {
                        const errors = Object.values(res.response.data.errors);
                        errors.forEach((v) => {
                            toast.error(v[0]);
                        });
                    } else {
                        toast.error('Có lỗi xảy ra, vui lòng thử lại.');
                    }
                });
        },

    },
}
</script>
<style></style>