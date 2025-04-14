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
        meta :  {layout :   "blank"},
        children: [
            {path : 'admin', component: ()=>import('../components/Admin/Login/index.vue')},
            {path : 'giang-vien', component: ()=>import('../components/GiangVien/Login/index.vue')},
            {path : 'sinh-vien', component: ()=>import('../components/SinhVien/Login/index.vue')},
        ]
    },
    //NHÓM ROUTE CHO ADMIN
    {
        path : '/admin',
        component: ()=>import('../layout/wrapper/index.vue'),
        meta :  {layout :   "default"},
        children: [
            {path : 'homepage', component: ()=>import('../components/Admin/HomePage/index.vue')},
            {path : 'giang-vien', component: ()=>import('../components/Admin/GiangVien/index.vue')},
            {path : 'sinh-vien', component: ()=>import('../components/Admin/SinhVien/index.vue')},
            {path : 'lop-hoc', component: ()=>import('../components/Admin/LopHoc/index.vue')},
            {path : 'loai-bai-thi', component: ()=>import('../components/Admin/LoaiBaiThi/index.vue')},
            {path : 'mon-hoc', component: ()=>import('../components/Admin/MonHoc/index.vue')},
            {path : 'cau-hoi', component: ()=>import('../components/Admin/CauHoi/index.vue')},
            {path : 'bai-thi', component: ()=>import('../components/Admin/BaiThi/index.vue')},
            {path : 'khoa', component: ()=>import('../components/Admin/Khoa/index.vue')},
        ]
    },
    //NHÓM ROUTE CHO GIẢNG VIÊN
    {
        path : '/giang-vien',
        component: ()=>import('../layout/wrapper/index_giangvien.vue'),
        meta :  {layout :   "giangvien"},
        children: [
            {path : 'homepage', component: ()=>import('../components/GiangVien/Home/index.vue')},
            {path : 'lop-hoc', component: ()=>import('../components/GiangVien/LopHoc/index.vue')},
            {path : 'loai-bai-thi', component: ()=>import('../components/GiangVien/LoaiBaiThi/index.vue')},
            {path : 'mon-hoc', component: ()=>import('../components/GiangVien/MonHoc/index.vue')},
            {path : 'cau-hoi', component: ()=>import('../components/GiangVien/CauHoi/index.vue')},
            {path : 'bai-thi', component: ()=>import('../components/GiangVien/BaiThi/index.vue')},
        ]
    },
    //NHÓM ROUTE CHO SINH VIÊN
    {
        path : '/sinh-vien',
        component: ()=>import('../layout/wrapper/index_sinhvien.vue'),
        meta :  {layout :   "sinhvien"},
        children: [
            {path : 'homepage', component: ()=>import('../components/SinhVien/Home/index.vue')},
            {path : 'lop-hoc', component: ()=>import('../components/SinhVien/LopHoc/index.vue')},
            {path : 'chi-tiet-lop-hoc', component: ()=>import('../components/SinhVien/ChiTietLopHoc/index.vue')},
            {path : 'ket-qua', component: ()=>import('../components/SinhVien/KetQua/index.vue')},
            {path : 'bai-thi', component: ()=>import('../components/SinhVien/BaiThi/index.vue')},
            {path : 'profile', component: ()=>import('../components/SinhVien/Profile/index.vue')},
            {path : 'mat-khau', component: ()=>import('../components/SinhVien/MatKhau/index.vue')},
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router