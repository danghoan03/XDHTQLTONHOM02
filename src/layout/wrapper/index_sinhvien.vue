<template>
    <TopGiangVien></TopGiangVien>
    <div class="main-container" id="container">
        <div class="overlay"></div>
        <div class="search-overlay"></div>
        <MenuGiangVien></MenuGiangVien>
        <div id="content" class="main-content">
            <div class="layout-px-spacing">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import "../../assets/js/libs/jquery-3.1.1.min.js";
import "../../assets/bootstrap/js/bootstrap.min.js";
import "../../assets/js/app.js";
import TopSinhVien from "../components/TopSinhVien.vue";
import MenuSinhVien from "../components/MenuSinhVien.vue";
export default {
    name        :   "#app",
    components  :   {
        TopSinhVien,    MenuSinhVien
    }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap");
@import "../../assets/bootstrap/css/bootstrap.min.css";
@import "../../assets/css/plugins.css";
@import "../../assets/plugins/apex/apexcharts.css";
@import "../../assets/css/dashboard/dash_2.css";
</style>