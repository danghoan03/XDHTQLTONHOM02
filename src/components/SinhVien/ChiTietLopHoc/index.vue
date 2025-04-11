<template>
    <div class="container-fluid">
        <div class="row">
    <div class="col-lg-12 col-md-12">
        <!-- Thông tin lớp học -->
        <div class="card mb-3">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="mt-2 mb-0">Thông Tin Lớp Học</h4>
                <span class="badge p-2" :class="lop_hoc.trang_thai == 1 ? 'bg-success' : 'bg-danger'">
                    @{{ lop_hoc.trang_thai == 1 ? 'Đang học' : 'Đã kết thúc' }}
                </span>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <table class="table table-borderless">
                            <tr>
                                <td width="30%"><small class="text-muted">Tên lớp:</small></td>
                                <td><strong class="text-primary">@{{ lop_hoc.ten_lop }}</strong></td>
                            </tr>
                            <tr>
                                <td><small class="text-muted">Mã lớp:</small></td>
                                <td><strong>@{{ lop_hoc.ma_lop }}</strong></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-4">
                        <table class="table table-borderless">
                            <tr>
                                <td><small class="text-muted">Giảng viên:</small></td>
                                <td><i><strong class="text-secondary">@{{ lop_hoc.ten_giang_vien }}</strong></i></td>
                            </tr>
                            <tr>
                                <td width="30%"><small class="text-muted">Môn học:</small></td>
                                <td><strong>@{{ lop_hoc.ten_mon_hoc }}</strong></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-4">
                        <table class="table table-borderless">
                            <tr>
                                <td width="30%"><small class="text-muted">Mã môn:</small></td>
                                <td><strong>@{{ lop_hoc.ma_mon_hoc }} @{{ lop_hoc.ma_so_mon_hoc }}</strong></td>
                            </tr>
                            <tr>
                                <td><small class="text-muted">Số tín chỉ:</small></td>
                                <td>
                                    <i class="fas fa-graduation-cap"></i>
                                    <strong class="text-danger">@{{ lop_hoc.so_tin_chi }}</strong> TC
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Danh sách bài kiểm tra -->
        <div class="card">
            <div class="card-header">
                <h4 class="mt-2 mb-0">Danh Sách Bài Kiểm Tra</h4>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Bài Kiểm Tra</th>
                                <th class="text-center">Loại</th>
                                <th class="text-center">Thời Gian</th>
                                <th class="text-center">Số Câu</th>
                                <th class="text-center">Trạng Thái</th>
                                <th class="text-center">Điểm</th>
                                <th class="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(bai_thi, index) in list_bai_thi" :key="index">
                                <tr>
                                    <th class="text-center align-middle">@{{ index + 1 }}</th>
                                    <td>@{{ bai_thi.ten_bai_thi }}</td>
                                    <td class="align-middle">@{{ bai_thi.ten_loai_bai_thi }}</td>
                                    <td class="text-center align-middle">@{{ tinhSoPhut(bai_thi.thoi_gian_bat_dau, bai_thi.thoi_gian_ket_thuc) }} phút</td>
                                    <td class="text-center align-middle">@{{ bai_thi.so_cau }}</td>
                                    <td class="text-center align-middle">
                                        <button class="btn btn-sm w-75" :class="getBadgeClass(bai_thi.trang_thai)">
                                            @{{ getTrangThai(bai_thi.trang_thai) }}
                                        </button>
                                    </td>
                                    <td class="text-center align-middle">
                                        <span v-if="bai_thi.diem" class="text-danger fw-bold">
                                            @{{ bai_thi.diem }}
                                        </span>
                                        <span v-else>-</span>
                                    </td>
                                    <td class="text-center align-middle">
                                        <button v-if="bai_thi.trang_thai == 1"
                                                class="btn btn-sm btn-primary w-75"
                                                @click="vaoBaiThi(bai_thi.id)">
                                            <i class="fas fa-edit"></i> Làm bài
                                        </button>
                                        <button v-else
                                                class="btn btn-sm btn-info w-75"
                                                @click="xemKetQua(bai_thi.id)">
                                            <i class="fas fa-eye"></i> Xem kết quả
                                        </button>
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
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>