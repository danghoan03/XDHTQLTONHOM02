<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <label class="text-dark"><b>Tìm Kiếm Bài Thi</b></label>
                                <input type="text" class="form-control" placeholder="Tìm kiếm bài thi...." aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="col-md-3">
                                <label class="text-dark"><b>Lọc Theo Môn Học</b></label>
                                <select class="placeholder form-control">
                                    <option>Tất cả môn học....</option>
                                    <!-- <option v-for="mon in dsMonHoc" :value="mon.id">
                                        @{{ mon.ten_id_mon_hoc }}
                                    </option> -->
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="text-dark"><b>Lọc Theo Loại Bài Thi</b></label>
                                <select class="placeholder form-control">
                                    <option>Tất cả loại bài thi....</option>
                                    <!-- <option v-for="mon in dsMonHoc" :value="mon.id">
                                        @{{ mon.ten_id_mon_hoc }}
                                    </option> -->
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
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addLopHoc">Thêm Mới Bài Thi</button>
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
                                        <th class="text-dark">Thời Gian</th>
                                        <th class="text-dark">Trạng Thái</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in exams" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle ">{{ value.ten_bai_thi }}</td>
                                            <td class="align-middle text-center">{{ value.id_mon_hoc }}</td>
                                            <td class="align-middle ">{{ value.id_lop_hoc }}</td>
                                            <td class="align-middle ">
                                                <table class="table table-bordered">
                                                    <tbody>
                                                        <tr class="text-center">
                                                            <td><b>Bắt đầu:</b> {{ formatDate(value.thoi_gian_bat_dau) }}</td>
                                                        </tr>
                                                        <tr class="text-center">
                                                            <td><b>Kết thúc:</b> {{ formatDate(value.thoi_gian_ket_thuc) }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td class="align-middle text-center">
                                                <button v-if="value.trang_thai == 1" class="btn btn-success">Hoạt Động</button>
                                                <button v-else class="btn btn-warning">Tạm Ngưng</button>
                                            </td>
                                            <td class="align-middle text-center text-nowrap">
                                                <div class="btn-group">
                                                    <h4><i class="bi bi-pencil-square text-info mr-2"
                                                        data-toggle="modal" data-target="#editBaiThi"></i></h4>
                                                    <h4><i class="bi bi-trash3 text-danger mr-2" data-toggle="modal"
                                                            data-target="#delBaiThi"></i></h4>
                                                    <h4><i class="bi bi-people-fill text-success mr-2" data-toggle="modal"
                                                        data-target="#listSV"></i></h4>
                                                    <h4><i class="bi bi-box-arrow-right text-warning" data-toggle="modal"
                                                        data-target="#enterBaiThi"></i></h4>
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
    <div class="modal fade" id="addBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Thêm Mới Môn Học</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="text-dark"><b>Tên Môn Học</b></label>
                        <input class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Môn Học</b></label>
                        <input class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Số Môn Học</b></label>
                        <input class="form-control" type="number">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Số Tín Chỉ</b></label>
                        <input class="form-control" type="number">
                    </div>
                    <div class="">
                        <label class="text-dark"><b>Trạng Thái</b></label>
                        <select class="placeholder form-control">
                            <option>Chọn trạng thái...</option>
                            <option value="1">Đang Hoạt Động</option>
                            <option value="0">Ngưng Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Edit-->
    <div class="modal fade" id="editBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Cập Nhật</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="text-dark"><b>Tên Môn Học</b></label>
                        <input class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Môn Học</b></label>
                        <input class="form-control" type="text">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Mã Số Môn Học</b></label>
                        <input class="form-control" type="number">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Số Tín Chỉ</b></label>
                        <input class="form-control" type="number">
                    </div>
                    <div class="">
                        <label class="text-dark"><b>Trạng Thái</b></label>
                        <select class="placeholder form-control">
                            <option>Chọn trạng thái...</option>
                            <option value="1">Đang Hoạt Động</option>
                            <option value="0">Ngưng Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info" data-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Enter-->
    <div class="modal fade" id="enterBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nhập Câu Hỏi Cho Bài Thi <b class="text-danger">Hello</b> của môn <b>Hi! I'm Fine</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <h5><b>Phần Trắc Nghiệm</b></h5>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-7">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-dark">Số câu hỏi</label>
                                                <input type="number" class="form-control" min="0">
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-dark">Tổng điểm</label>
                                                <input type="number" class="form-control" min="0" step="0.1" :max="10 - 0">
                                            </div>
                                        </div>
                                    </div>
                                    <span class="text-muted">
                                        Điểm mỗi câu: <b class="text-danger"></b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <h5><b>Phần Trả Lời Ngắn</b></h5>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-7">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-dark">Số câu hỏi</label>
                                                <input type="number" class="form-control" min="0">
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-dark">Tổng điểm</label>
                                                <input type="number" class="form-control" min="0" step="0.1" :max="10 - 0">
                                            </div>
                                        </div>
                                    </div>
                                    <span class="text-muted">
                                        Điểm mỗi câu: <b class="text-danger"></b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <h5><b>Phần Tự Luận</b></h5>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-7">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-dark">Số câu hỏi</label>
                                                <input type="number" class="form-control" min="0">
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-dark">Tổng điểm</label>
                                                <input type="number" class="form-control" min="0" step="0.1" :max="10 - 0">
                                            </div>
                                        </div>
                                    </div>
                                    <span class="text-muted">
                                        Điểm mỗi câu: <b class="text-danger"></b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-4 mb-0">
                            <div class="alert alert-warning" role="alert">
                                <i class="bi bi-exclamation-circle-fill mr-2"></i> Tổng điểm: <b>0/10</b>
                            </div>
                        </div>
                        <div class="col-md-4 mb-0">
                            <div class="d-flex justify-content-start">
                                <label class="switch s-icons s-outline s-outline-default mb-0 mr-2">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                </label>
                                <h6>Tạo đề tự động</h6>
                            </div>
                        </div>
                        <div class="col-md-4 mb-0">
                            <button class="btn btn-info w-100"><i class="bi bi-patch-plus mr-2"></i>Nhập Câu Hỏi</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info" data-dismiss="modal">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Del-->
    <div class="modal fade" id="delBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Xóa Môn Học</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        Bạn có chắc chắn muốn xóa môn học <b class="text-danger">""</b> không?
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
import moment from "moment";
export default {
    data() {
        return {
            exam: {
                ten_bai_thi: "",
                //id_loai_bai_thi: "",
                thoi_gian_bat_dau: "",
                thoi_gian_ket_thuc: "",
                // id_giang_vien: "",
                id_mon_hoc: "",
                id_lop_hoc: "",
                // mat_khau: "",
                trang_thai: "",
            },
            exams: [
                {
                    id: 1,
                    ten_bai_thi: "Bài Thi Giữa Kỳ",
                    //id_loai_bai_thi: 1, // ID loại bài thi
                    thoi_gian_bat_dau: "2025-04-10 08:00:00",
                    thoi_gian_ket_thuc: "2025-04-10 10:00:00",
                    //id_giang_vien: 1, // ID giảng viên
                    id_mon_hoc: 1, // ID môn học
                    id_lop_hoc: 1, // ID lớp học
                    //mat_khau: "123456",
                    trang_thai: 1 // 1: Hoạt động, 0: Ngừng hoạt động
                },
                {
                    id: 2,
                    ten_bai_thi: "Bài Thi Cuối Kỳ",
                    //id_loai_bai_thi: 2,
                    thoi_gian_bat_dau: "2025-05-20 13:00:00",
                    thoi_gian_ket_thuc: "2025-05-20 15:00:00",
                    //id_giang_vien: 2,
                    id_mon_hoc: 2,
                    id_lop_hoc: 2,
                    //mat_khau: "abcdef",
                    trang_thai: 1
                },
                {
                    id: 3,
                    ten_bai_thi: "Bài Kiểm Tra 15 Phút",
                    //id_loai_bai_thi: 3,
                    thoi_gian_bat_dau: "2025-04-15 09:00:00",
                    thoi_gian_ket_thuc: "2025-04-15 09:15:00",
                    //id_giang_vien: 3,
                    id_mon_hoc: 3,
                    id_lop_hoc: 3,
                    //mat_khau: "qwerty",
                    trang_thai: 0
                },
                {
                    id: 4,
                    ten_bai_thi: "Bài Kiểm Tra 1 Tiết",
                    //id_loai_bai_thi: 4,
                    thoi_gian_bat_dau: "2025-04-18 10:00:00",
                    thoi_gian_ket_thuc: "2025-04-18 11:00:00",
                    //id_giang_vien: 4,
                    id_mon_hoc: 4,
                    id_lop_hoc: 4,
                    //mat_khau: "zxcvbn",
                    trang_thai: 1
                },
                {
                    id: 5,
                    ten_bai_thi: "Bài Thi Thực Hành",
                    //id_loai_bai_thi: 5,
                    thoi_gian_bat_dau: "2025-04-25 14:00:00",
                    thoi_gian_ket_thuc: "2025-04-25 16:00:00",
                    //id_giang_vien: 5,
                    id_mon_hoc: 5,
                    id_lop_hoc: 5,
                    //mat_khau: "pass123",
                    trang_thai: 1
                }
            ],
        }
    },
    mounted() {
        
    },
    methods: {
        formatDate(date) {
            return moment(date).format('DD/MM/YYYY HH:mm:ss');
        },
    },
}
</script>
<style>
    
</style>