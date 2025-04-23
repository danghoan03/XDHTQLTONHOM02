import axios from "axios";

export default function(from, to, next) {
    axios
        .get("http://127.0.0.1:8000/api/sinh-vien/checklogin", {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("key_sinhvien")
            }
        })
        .then((res) => {
            if (res.data.status) {
                next();
            } else {
                next("/sinh-vien/login");
                this.$toast.error("Bạn cần đăng nhập trước!!!!");

            }
        });
}