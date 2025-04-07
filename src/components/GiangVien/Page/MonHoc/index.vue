<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card bg-white mt-3">
                    <div class="card-header bg-white">
                        <div class="d-flex justify-content-between">
                            <h4 class="mb-0 mt-1"><b>Danh Sách Môn Học</b></h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover dataTable">
                                <thead class="table-primary text-center">
                                    <tr role="row">
                                        <th class="text-dark">#</th>
                                        <th class="text-dark">Tên Môn Học</th>
                                        <th class="text-dark">Mã Môn Học</th>
                                        <th class="text-dark">Mã Số Môn Học</th>
                                        <th class="text-dark">Số Tín Chỉ</th>
                                        <th class="text-dark">Trạng Thái</th>
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
                                                <button v-if="value.trang_thai == 1" class="btn btn-success">Đang Hoạt
                                                    Động</button>
                                                <button v-else class="btn btn-danger">Ngưng Hoạt Động</button>
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
                        <input class="form-control" type="number" min="0">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Số Tín Chỉ</b></label>
                        <input class="form-control" type="number" min="0">
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
    <div class="modal fade" id="editMonHoc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <input class="form-control" type="number" min="0">
                    </div>
                    <div class="mb-2">
                        <label class="text-dark"><b>Số Tín Chỉ</b></label>
                        <input class="form-control" type="number" min="0">
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
    <!-- Modal Del-->
    <div class="modal fade" id="delMonHoc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
export default {
    data() {
        return {
            subject: {
                ma_mon_hoc: "",
                ten_mon_hoc: "",
                ma_so_mon_hoc: "",
                so_tin_chi: "",
                trang_thai: "",
            },
            subjects: [
                { ten_mon_hoc: "Toán Cao Cấp", ma_mon_hoc: "MATH", ma_so_mon_hoc: 101, so_tin_chi: 3, trang_thai: 1 },
                { ten_mon_hoc: "Lập Trình Cơ Bản", ma_mon_hoc: "CS", ma_so_mon_hoc: 102, so_tin_chi: 4, trang_thai: 1 },
                { ten_mon_hoc: "Hóa Học Đại Cương", ma_mon_hoc: "CHEM", ma_so_mon_hoc: 103, so_tin_chi: 2, trang_thai: 0 },
                { ten_mon_hoc: "Vật Lý Đại Cương", ma_mon_hoc: "PHYS", ma_so_mon_hoc: 104, so_tin_chi: 3, trang_thai: 1 },
                { ten_mon_hoc: "Kỹ Thuật Số", ma_mon_hoc: "ENG", ma_so_mon_hoc: 105, so_tin_chi: 3, trang_thai: 1 },
                { ten_mon_hoc: "Cơ Sở Dữ Liệu", ma_mon_hoc: "DB", ma_so_mon_hoc: 106, so_tin_chi: 4, trang_thai: 1 },
                { ten_mon_hoc: "Hệ Điều Hành", ma_mon_hoc: "OS", ma_so_mon_hoc: 107, so_tin_chi: 3, trang_thai: 0 },
                { ten_mon_hoc: "Mạng Máy Tính", ma_mon_hoc: "NET", ma_so_mon_hoc: 108, so_tin_chi: 3, trang_thai: 1 },
                { ten_mon_hoc: "Trí Tuệ Nhân Tạo", ma_mon_hoc: "AI", ma_so_mon_hoc: 109, so_tin_chi: 4, trang_thai: 1 },
                { ten_mon_hoc: "Phân Tích Dữ Liệu", ma_mon_hoc: "DA", ma_so_mon_hoc: 110, so_tin_chi: 3, trang_thai: 1 }
            ],
        }
    },
}
</script>
<style></style>