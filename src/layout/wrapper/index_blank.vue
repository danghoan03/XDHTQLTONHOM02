<template>
    <div class="main-container" id="container">
        <div class="overlay"></div>
        <div class="search-overlay"></div>
        <div id="content" class="main-content">
            <div class="layout-px-spacing">
                <div class="row layout-top-spacing">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "../../assets/js/libs/jquery-3.1.1.min.js";
import "../../assets/bootstrap/js/bootstrap.min.js";
import "../../assets/js/app.js";
export default {
    name        :   "#app",
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap");
@import "../../assets/bootstrap/css/bootstrap.min.css";
@import "../../assets/css/plugins.css";
@import "../../assets/plugins/apex/apexcharts.css";
@import "../../assets/css/dashboard/dash_2.css";
</style>