import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    //Route chính
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue'),
        meta :  {layout :   "default"}
    },
    //Route Đăng Nhập
    {
        path : '/login',
        component: ()=>import('../layout/wrapper/index_blank.vue'),
        meta :  {layout :   "blank"}
    },
    //NHÓM ROUTE CHO ADMIN
    {
        path : '/admin',
        component: ()=>import('../layout/wrapper/index.vue'),
        meta :  {layout :   "default"},
        children: [
            {path : 'homepage', component: ()=>import('../components/Admin/Page/HomePage/index.vue')},
            {path : 'giang-vien', component: ()=>import('../components/Admin/Page/GiangVien/index.vue')},
            {path : 'sinh-vien', component: ()=>import('../components/Admin/Page/SinhVien/index.vue')},
            {path : 'lop-hoc', component: ()=>import('../components/Admin/Page/LopHoc/index.vue')},
            {path : 'loai-bai-thi', component: ()=>import('../components/Admin/Page/LoaiBaiThi/index.vue')},
            {path : 'mon-hoc', component: ()=>import('../components/Admin/Page/MonHoc/index.vue')},
            {path : 'cau-hoi', component: ()=>import('../components/Admin/Page/CauHoi/index.vue')},
            {path : 'bai-thi', component: ()=>import('../components/Admin/Page/BaiThi/index.vue')},
        ]
    },
    //NHÓM ROUTE CHO GIẢNG VIÊN
    {
        path : '/giang-vien',
        component: ()=>import('../layout/wrapper/index_giangvien.vue'),
        meta :  {layout :   "giangvien"},
        children: [
            {path : 'homepage', component: ()=>import('../components/GiangVien/Page/Home/index.vue')},
            {path : 'lop-hoc', component: ()=>import('../components/GiangVien/Page/LopHoc/index.vue')},
            {path : 'loai-bai-thi', component: ()=>import('../components/GiangVien/Page/LoaiBaiThi/index.vue')},
            {path : 'mon-hoc', component: ()=>import('../components/GiangVien/Page/MonHoc/index.vue')},
            {path : 'cau-hoi', component: ()=>import('../components/GiangVien/Page/CauHoi/index.vue')},
            {path : 'bai-thi', component: ()=>import('../components/GiangVien/Page/BaiThi/index.vue')},
        ]
    },
    //NHÓM ROUTE CHO SINH VIÊN
    {
        path : '/sinh-vien',
        component: ()=>import('../layout/wrapper/index_sinhvien.vue'),
        meta :  {layout :   "sinhvien"},
        children: [
            {path : 'homepage', component: ()=>import('../components/SinhVien/Page/HomePage/index.vue')},
            {path : 'lop-hoc', component: ()=>import('../components/SinhVien/Page/LopHoc/index.vue')},
            {path : 'chi-tiet-lop-hoc', component: ()=>import('../components/SinhVien/Page/ChiTietLopHoc/index.vue')},
            {path : 'ket-qua', component: ()=>import('../components/SinhVien/Page/KetQua/index.vue')},
            {path : 'bai-thi', component: ()=>import('../components/SinhVien/Page/BaiThi/index.vue')},
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router