<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
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
                                        <th class="text-dark">Câu Hỏi</th>
                                        <th class="text-dark">Môn Học</th>
                                        <th class="text-dark">Loại Câu Hỏi</th>
                                        <th class="text-dark">Đáp Án</th>
                                        <th class="text-dark">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in questions" :key="index">
                                        <tr>
                                            <th class="align-middle text-center">{{ index + 1 }}</th>
                                            <td class="align-middle">{{ value.ten_cau_hoi }}</td>
                                            <td class="align-middle">{{ value.id_mon_hoc }}</td>
                                            <td class="align-middle text-center">
                                                <button v-if="value.loai_cau_hoi == 1" class="btn btn-primary w-75">Trắc
                                                    Nghiệm</button>
                                                <button v-else-if="value.loai_cau_hoi == 2"
                                                    class="btn btn-info w-75">Trả
                                                    Lời Ngắn</button>
                                                <button v-else class="btn btn-success w-75">Tự Luận</button>
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
    <!-- Modal Add-->
    <div class="modal fade" id="addCauHoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Thêm Mới Câu Hỏi</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Câu Hỏi</label>
                                <input class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label>Loại Câu Hỏi</label>
                                <select class="placeholder form-control">
                                    <option>Chọn loại câu hỏi...</option>
                                    <option value="0">Trắc Nghiệm</option>
                                    <option value="1">Trả Lời Ngắn</option>
                                    <option value="2">Tự Luận</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Môn Học</label>
                                <input class="form-control" type="text">
                            </div>
                            <div class="mb-2">
                                <label>Số Lượng Đáp Án</label>
                                <input class="form-control" type="text">
                            </div>
                        </div>
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
    <div class="modal fade" id="editCauHoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Cập Nhật Câu Hỏi</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info" data-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Del-->
    <div class="modal fade" id="delCauHoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><b>Xóa Câu Hỏi</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        Bạn có chắc chắn muốn xóa câu hỏi <b class="text-danger">""</b> không?
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
            question: {
                ten_cau_hoi: "",
                id_mon_hoc: "",
                loai_cau_hoi: "",
                so_luong_dap_an: "",
            },
            questions: [
                { id: 1, ten_cau_hoi: "Câu hỏi 1: Định nghĩa của đạo hàm?", id_mon_hoc: 1, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 2, ten_cau_hoi: "Câu hỏi 2: Ý nghĩa của tích phân?", id_mon_hoc: 1, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 3, ten_cau_hoi: "Câu hỏi 3: Lập trình là gì?", id_mon_hoc: 2, loai_cau_hoi: 0, so_luong_dap_an: 0 },
                { id: 4, ten_cau_hoi: "Câu hỏi 4: Các loại biến trong lập trình?", id_mon_hoc: 2, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 5, ten_cau_hoi: "Câu hỏi 5: Công thức hóa học của nước?", id_mon_hoc: 3, loai_cau_hoi: 2, so_luong_dap_an: 4 },
                { id: 6, ten_cau_hoi: "Câu hỏi 6: Nguyên tố nào có số hiệu nguyên tử là 1?", id_mon_hoc: 3, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 7, ten_cau_hoi: "Câu hỏi 7: Định luật Newton thứ nhất là gì?", id_mon_hoc: 4, loai_cau_hoi: 0, so_luong_dap_an: 0 },
                { id: 8, ten_cau_hoi: "Câu hỏi 8: Công thức tính lực?", id_mon_hoc: 4, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 9, ten_cau_hoi: "Câu hỏi 9: Hệ nhị phân là gì?", id_mon_hoc: 5, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 10, ten_cau_hoi: "Câu hỏi 10: Các cổng logic cơ bản?", id_mon_hoc: 5, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 11, ten_cau_hoi: "Câu hỏi 11: SQL là gì?", id_mon_hoc: 6, loai_cau_hoi: 2, so_luong_dap_an: 0 },
                { id: 12, ten_cau_hoi: "Câu hỏi 12: Các loại khóa trong cơ sở dữ liệu?", id_mon_hoc: 6, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 13, ten_cau_hoi: "Câu hỏi 13: Hệ điều hành là gì?", id_mon_hoc: 7, loai_cau_hoi: 0, so_luong_dap_an: 0 },
                { id: 14, ten_cau_hoi: "Câu hỏi 14: Các loại hệ điều hành phổ biến?", id_mon_hoc: 7, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 15, ten_cau_hoi: "Câu hỏi 15: IP là gì?", id_mon_hoc: 8, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 16, ten_cau_hoi: "Câu hỏi 16: Các tầng trong mô hình OSI?", id_mon_hoc: 8, loai_cau_hoi: 1, so_luong_dap_an: 4 },
                { id: 17, ten_cau_hoi: "Câu hỏi 17: Trí tuệ nhân tạo là gì?", id_mon_hoc: 9, loai_cau_hoi: 0, so_luong_dap_an: 0 },
                { id: 18, ten_cau_hoi: "Câu hỏi 18: Các ứng dụng của AI?", id_mon_hoc: 9, loai_cau_hoi: 1, so_luong_dap_an: 4 },
            ],
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style></style>