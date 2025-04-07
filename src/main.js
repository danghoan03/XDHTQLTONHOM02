import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import Blank from './layout/wrapper/index_blank.vue'
import GiangVien from './layout/wrapper/index_giangvien.vue'
import SinhVien from './layout/wrapper/index_sinhvien.vue'
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css"; // Import CSS
import Toaster from "@meforma/vue-toaster";
const app = createApp(App)

app.use(router)
app.use(Vue3Toastify, { autoClose: 1000 }); // Tuỳ chọn thời gian mặc định 1s
app.use(Toaster, {
position: "top-right",
});
app.component("default-layout", Default);
app.component("blank-layout", Blank);
app.component("giangvien-layout", GiangVien);
app.component("sinhvien-layout", SinhVien);
app.mount("#app")
app.mount("#login")