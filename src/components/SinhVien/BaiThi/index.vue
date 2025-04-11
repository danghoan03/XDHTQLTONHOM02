<template>
    <div class="container-fluid">
        
    </div><div class="row">
        <div class="col-md-9"> <!-- Phần nội dung bài thi -->
            <div class="card">
                <div class="card-header bg-primary">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <h4 class="text-white mb-0">@{{ bai_thi.ten_bai_thi }}</h4>
                            <small class="text-white">Môn học: @{{ bai_thi.ten_mon_hoc }}</small>
                        </div>
                        <div class="col-md-4 text-end">
                            <button class="btn btn-warning p-2 btn-sm text-white">
                                <i class="fas fa-clock me-1"></i>
                                Thời gian còn lại: <b>@{{ thoi_gian_con_lai }}</b>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <!-- Phần trắc nghiệm -->
                    <div v-if="list_trac_nghiem.length > 0" class="mb-4">
                        <h5 class="border-bottom pb-2">
                            <i class="fas fa-check-circle text-primary me-2"></i>Phần 1: Trắc Nghiệm
                            <small class="text-danger">(@{{ config.trac_nghiem.diem.toFixed(2) }} điểm)</small>
                        </h5>
                        <div v-for="(cauhoi, index) in list_trac_nghiem" :key="index" class="mb-4">
                            <div class="question-box p-3 border rounded">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <div>
                                        <b>Câu @{{ index + 1 }}:</b> @{{ cauhoi.cau_hoi.ten_cau_hoi }}
                                    </div>
                                    <span class="badge bg-info">@{{ getDiemTracNghiem }} điểm</span>
                                </div>
                                <div class="ps-4">
                                    <template v-for="(dapan, i) in cauhoi.dap_an" :key="i">
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="radio"
                                                   :name="'cau_' + cauhoi.cau_hoi.id" v-model="cauhoi.cau_tra_loi" :value="dapan.id">
                                            <label class="form-check-label">@{{ dapan.noi_dung }}</label>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phần trả lời ngắn -->
                    <div v-if="list_tra_loi_ngan.length > 0" class="mb-4">
                        <h5 class="border-bottom pb-2">
                            <i class="fas fa-pen text-warning me-2"></i>Phần 2: Trả Lời Ngắn
                            <small class="text-danger">(@{{ config.tra_loi_ngan.diem.toFixed(2) }} điểm)</small>
                        </h5>
                        <div v-for="(cauhoi, index) in list_tra_loi_ngan" :key="index" class="mb-4">
                            <div class="question-box p-3 border rounded">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <div>
                                        <b>Câu @{{ list_trac_nghiem.length + index + 1 }}:</b> @{{ cauhoi.noi_dung }}
                                    </div>
                                    <span class="badge bg-warning">@{{ getDiemTraLoiNgan }} điểm</span>
                                </div>
                                <div class="ps-4">
                                    <input type="text" class="form-control" :placeholder="'Nhập câu trả lời của bạn...'" v-model="cauhoi.cau_tra_loi">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Phần tự luận -->
                    <div v-if="list_tu_luan.length > 0" class="mb-4">
                        <h5 class="border-bottom pb-2">
                            <i class="fas fa-edit text-success me-2"></i>Phần 3: Tự Luận
                            <small class="text-danger">(@{{ config.tu_luan.diem.toFixed(2) }} điểm)</small>
                        </h5>
                        <div v-for="(cauhoi, index) in list_tu_luan" :key="index" class="mb-4">
                            <div class="question-box p-3 border rounded">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <div>
                                        <b>Câu @{{ list_trac_nghiem.length + list_tra_loi_ngan.length + index + 1 }}:</b>
                                        @{{ cauhoi.noi_dung }}
                                    </div>
                                    <span class="badge bg-success">@{{ getDiemTuLuan }} điểm</span>
                                </div>
                                <div class="ps-4">
                                    <textarea class="form-control" rows="4"
                                              :placeholder="'Nhập câu trả lời của bạn...'" v-model="cauhoi.cau_tra_loi"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-3"> <!-- Phần thông tin và điều hướng -->
            <div class="card sticky-top" style="top: 140px">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Thông Tin Bài Thi</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <small class="text-muted d-block">Tổng số câu:</small>
                        <b>@{{ tongSoCau }} câu</b>
                    </div>
                    <div class="mb-3">
                        <small class="text-muted d-block">Tổng điểm:</small>
                        <b>10 điểm</b>
                    </div>
                    <div class="mb-3">
                        <small class="text-muted d-block">Thời gian:</small>
                        <b>@{{ tinhSoPhut(bai_thi.thoi_gian_bat_dau, bai_thi.thoi_gian_ket_thuc) }} phút</b>
                    </div>
                    <hr>
                    <button class="btn btn-primary w-100" @click="nopBai">
                        <i class="fas fa-paper-plane me-2"></i>Nộp Bài
                    </button>
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