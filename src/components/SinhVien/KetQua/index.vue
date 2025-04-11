<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="row align-items-end">
                            <div class="col-md-3">
                                <div class="form-group mb-0">
                                    <label>Tìm Kiếm</label>
                                    <input type="text" class="form-control"
                                        placeholder="Nhập từ khóa tìm kiếm...">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group mb-0">
                                    <label>Lọc Theo Môn Học</label>
                                    <select class="form-control">
                                        <option value="">Tất cả môn học</option>
                                        <template>
                                            <option></option>
                                        </template>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group mb-0">
                                    <label>Lọc Theo Lớp</label>
                                    <select class="form-control">
                                        <option value="">Tất cả lớp học</option>
                                        <template>
                                            <option></option>
                                        </template>
                                    </select>
                                </div>
                            </div>
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
<style></style>