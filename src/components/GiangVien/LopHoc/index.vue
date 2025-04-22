<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="search-input-group-style input-group">
                                    <div class="input-group-prepend">
                                        <span v-on:click="timKiem()" type="text" class="input-group-text"
                                            id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-search">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg></span>
                                    </div>
                                    <input v-on:keyup.enter="timKiem()" v-model="search.noi_dung" type="text"
                                        class="form-control" placeholder="Tìm kiếm lớp học...." aria-label="Username"
                                        aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <select class=" placeholder form-control form-select mr-2" v-model="selectedMon"
                                    @change="filterByMonHoc">
                                    <option class="placeholder">-- Chọn môn học --</option>
                                    <option v-for="mon in subjects" :key="mon.id" :value="mon.id">
                                        {{ mon.ten_mon_hoc }}
                                    </option>
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
                            <h4 class="mb-0 mt-1"><b>Danh Sách Lớp Học Đang Dạy</b></h4>
                           
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hove">
                                <thead class="table-primary text-center">
                                    <tr>
                                        <th class="text-dark">STT</th>
                                        <th class="text-dark">Tên Lớp</th>
                                        <th class="text-dark">Mã Lớp</th>
                                        <th class="text-dark">Môn Học</th>
                                        <th class="text-dark">Giảng Viên</th>
                                        <th class="text-dark">Trạng Thái</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in classes" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle ">{{ value.ten_lop }}</td>
                                            <td class="align-middle text-center">{{ value.ma_lop }}</td>
                                            <td class="align-middle ">{{ value.ten_mon_hoc }}</td>
                                            <td class="align-middle ">{{ value.ho_va_ten }}</td>

                                            <td class="align-middle text-center">
                                                <button v-on:click="doiTrangThai(value)" v-if="value.trang_thai == 1"
                                                    class="btn btn-success">Hoạt
                                                    Động</button>
                                                <button v-on:click="doiTrangThai(value)" v-else
                                                    class="btn btn-warning">Tạm Ngưng</button>
                                            </td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-between">

                                                    <button class="btn btn-warning" data-toggle="modal"
                                                        data-target="#phanLopModal">
                                                        <i class="bi bi-person-fill-add mr-1"></i>Phân Lớp
                                                    </button>

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
 
    <!-- Modal Phân Lớp -->
    <div class="modal fade" id="phanLopModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title text-white"><b>Phân Lớp Sinh Viên</b></h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Danh sách sinh viên chưa phân lớp</h6>
                            <div class="list-group">
                                <!-- <a href="#" class="list-group-item list-group-item-action"
                                   v-for="sv in dsSinhVienChuaPhanLop"
                                   @click="chonSinhVien(sv)">
                                    @{{ sv.ho_va_ten }}
                                </a> -->
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h6>Danh sách sinh viên đã chọn</h6>
                            <div class="list-group">
                                <!-- <a href="#" class="list-group-item list-group-item-action"
                                   v-for="sv in dsSinhVienDaChon"
                                   @click="huyChonSinhVien(sv)">
                                    @{{ sv.ho_va_ten }}
                                </a> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Lưu Phân Lớp</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Del-->
 
</template>
<script>
import axios from "axios";
import { toast } from "vue3-toastify";
export default {
    data() {
        return {
            classes: [],
            subjects: [],
            teachers: [],
            search: {
                noi_dung: ""
            },
            selectedMon: '',
            allClasses: [],

        }
    },
    mounted() {
        this.loadData();
        this.loadDataMonHoc();
        this.loadDataGiangVien();
    },
    methods: {
        getGiangVienName(id) {
            const gv = this.teachers.find(gv => gv.id === id);
            return gv && gv.trang_thai == 1 ? gv.ho_va_ten : '—';
        },

        filterByMonHoc() {
            if (this.selectedMon === '') {
                this.classes = this.allClasses;
            } else {
                this.classes = this.allClasses.filter((lop) => lop.id_mon_hoc == this.selectedMon);
            }
        },

        loadDataMonHoc() {
            axios
                .get("http://127.0.0.1:8000/api/admin/mon-hoc/data")
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
        loadDataGiangVien() {
            axios
                .get("http://127.0.0.1:8000/api/admin/giang-vien/data-open")
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
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/giang-vien/lop-hoc/data")
                .then((res) => {
                    this.classes = res.data.lophoc;
                    this.allClasses = res.data.lophoc; // lưu bản gốc để lọc
                })
                .catch((res) => {
                    const classes = Object.values(res.response.data.errors);
                    classes.forEach((v, i) => {
                        toast(v[0], {
                            type: "error",
                            position: "top-right",
                        });
                    });
                });
        },
        timKiem() {
            axios
                .post("http://127.0.0.1:8000/api/giang-vien/lop-hoc/search", this.search)
                .then((res) => {
                    this.classes = res.data.data
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
                .post("http://127.0.0.1:8000/api/giang-vien/lop-hoc/change-status", value)
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