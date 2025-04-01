<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="search-input-group-style input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Tìm kiếm lớp học...." aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <select class="placeholder form-control">
                                    <option>Chọn Môn Học....</option>
                                    <!-- <option v-for="mon in dsMonHoc" :value="mon.id">
                                        @{{ mon.ten_id_mon_hoc }}
                                    </option> -->
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
                            <h4 class="mb-0 mt-1"><b>Danh Sách Lớp Học</b></h4>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#addLoaiBaiThi">Thêm Lớp Học</button>
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
                                            <td class="align-middle ">{{ value.id_mon_hoc }}</td>
                                            <td class="align-middle ">{{ value.id_giang_vien }}</td>
                                            <td class="align-middle text-center">
                                                <button v-if="value.trang_thai == 1" class="btn btn-success">Hoạt Động</button>
                                                <button v-else class="btn btn-warning">Tạm Ngưng</button>
                                            </td>
                                            <td class="align-middle text-center">
                                                <div class="d-flex justify-content-center">
                                                    <h4><i class="bi bi-pencil-square text-info mr-2"
                                                            data-toggle="modal" data-target="#editLoaiBaiThi"></i></h4>
                                                    <h4><i class="bi bi-trash3 text-danger" data-toggle="modal"
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
    <div class="modal fade" id="editLoaiBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    <!-- Modal Del-->
    <div class="modal fade" id="delLoaiBaiThi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            classes: [
                { 
                    id: 1, 
                    ten_lop: "Lớp Toán 1", 
                    ma_lop: "L001", 
                    id_mon_hoc: "Toán Cao Cấp", 
                    id_giang_vien: "ThS. Nguyễn Thị Hồng", 
                    trang_thai: 1 
                },
                { 
                    id: 2, 
                    ten_lop: "Lớp Lập Trình 1", 
                    ma_lop: "L002", 
                    id_mon_hoc: "Lập Trình Cơ Bản", 
                    id_giang_vien: "ThS. Trần Văn Minh", 
                    trang_thai: 1 
                },
                { 
                    id: 3, 
                    ten_lop: "Lớp Hóa Học 1", 
                    ma_lop: "L003", 
                    id_mon_hoc: "Hóa Học Đại Cương", 
                    id_giang_vien: "ThS. Lê Thị Lan", 
                    trang_thai: 0 
                },
                { 
                    id: 4, 
                    ten_lop: "Lớp Vật Lý 1", 
                    ma_lop: "L004", 
                    id_mon_hoc: "Vật Lý Đại Cương", 
                    id_giang_vien: "ThS. Phạm Văn Hùng", 
                    trang_thai: 1 
                },
                { 
                    id: 5, 
                    ten_lop: "Lớp Kỹ Thuật Số", 
                    ma_lop: "L005", 
                    id_mon_hoc: "Kỹ Thuật Số", 
                    id_giang_vien: "ThS. Hoàng Thị Mai", 
                    trang_thai: 1 
                },
                { 
                    id: 6, 
                    ten_lop: "Lớp Cơ Sở Dữ Liệu", 
                    ma_lop: "L006", 
                    id_mon_hoc: "Cơ Sở Dữ Liệu", 
                    id_giang_vien: "ThS. Nguyễn Văn Tâm", 
                    trang_thai: 1 
                },
                { 
                    id: 7, 
                    ten_lop: "Lớp Hệ Điều Hành", 
                    ma_lop: "L007", 
                    id_mon_hoc: "Hệ Điều Hành", 
                    id_giang_vien: "ThS. Trần Thị Hoa", 
                    trang_thai: 0 
                },
                { 
                    id: 8, 
                    ten_lop: "Lớp Mạng Máy Tính", 
                    ma_lop: "L008", 
                    id_mon_hoc: "Mạng Máy Tính", 
                    id_giang_vien: "ThS. Lê Văn Phúc", 
                    trang_thai: 1 
                },
                { 
                    id: 9, 
                    ten_lop: "Lớp Trí Tuệ Nhân Tạo", 
                    ma_lop: "L009", 
                    id_mon_hoc: "Trí Tuệ Nhân Tạo", 
                    id_giang_vien: "ThS. Phạm Thị Ngọc", 
                    trang_thai: 1 
                },
                { 
                    id: 10, 
                    ten_lop: "Lớp Phân Tích Dữ Liệu", 
                    ma_lop: "L010", 
                    id_mon_hoc: "Phân Tích Dữ Liệu", 
                    id_giang_vien: "ThS. Nguyễn Văn Hòa", 
                    trang_thai: 1 
                }
            ]
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
}
</script>
<style>
    
</style>