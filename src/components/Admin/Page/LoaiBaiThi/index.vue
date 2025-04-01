<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-2">
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
            examType    : {
                ten_loai_bai_thi: "",
                trang_thai      : ""
            },
            examTypes   : [
                { id: 1, ten_loai_bai_thi: "Bài Thi Giữa Kỳ", trang_thai: 1 },
                { id: 2, ten_loai_bai_thi: "Bài Thi Cuối Kỳ", trang_thai: 1 },
                { id: 3, ten_loai_bai_thi: "Bài Kiểm Tra Thường Kỳ", trang_thai: 1 },
                { id: 4, ten_loai_bai_thi: "Bài Tập Về Nhà", trang_thai: 1 },
                { id: 5, ten_loai_bai_thi: "Bài Thi Thực Hành", trang_thai: 1 }
            ],
            delET: {},
        }
    },
    mounted() {
        
    },
    methods: {
        addExamType(){

        },
        editExamType(){

        },
        delExamType(){

        },
    },
}
</script>
<style>
    
</style>