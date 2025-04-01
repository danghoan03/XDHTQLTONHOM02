<template>
    <Top></Top>
    <div class="main-container" id="container">
        <div class="overlay"></div>
        <div class="search-overlay"></div>
        <Menu></Menu>
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
import Top from "../components/Top.vue";
import Menu from "../components/Menu.vue";
export default {
    name        :   "#app",
    components  :   {
        Top,    Menu
    }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
@import "../../assets/bootstrap/css/bootstrap.min.css";
@import "../../assets/css/plugins.css";
@import "../../assets/plugins/apex/apexcharts.css";
@import "../../assets/css/dashboard/dash_2.css";
</style>