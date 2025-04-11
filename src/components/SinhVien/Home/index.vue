<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="d-flex flex-wrap align-items-center ml-4">
                            <div class="btn-group mb-2 mr-5">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fa-solid fa-house-chimney"></i> HOME
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fas fa-star mr-1"></i> CS 353 BR (2025S)
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fas fa-star mr-1"></i> SE 445 C (2024F)
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fas fa-star mr-1"></i> SE 347 A (2024F)
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fas fa-star mr-1"></i> CS 462 E (2024F)
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fas fa-star mr-1"></i> CS 462 E (2024F)
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fas fa-star mr-1"></i> CS 462 E (2024F)
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fas fa-star mr-1"></i> CS 462 E (2024F)
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2">
                                <button type="button" class="btn btn-primary d-flex align-items-center">
                                    <i class="fas fa-star mr-1"></i> CS 462 E (2024F)
                                </button>
                            </div>
                            <div class="btn-group mr-4 mb-2 mb-2">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#"><i class="fas fa-star me-2"></i> CS 445 AG
                                            (2024F)</a>
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
$(document).ready(function() {
    // Xử lý active state cho các nút môn học
    $('.btn-group .btn').click(function() {
        $('.btn-group .btn').removeClass('active');
        $(this).addClass('active');
    });
});
export default {

}
</script>
<style></style>
