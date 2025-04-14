<template>
    <div class="container mt-5">
      <div class="card p-4 shadow-sm">
        <h5 class="text-danger mb-4">
          <i class="bi bi-lock-fill"></i> THAY ĐỔI MẬT KHẨU
        </h5>
  
        <div class="row">
          <!-- Form đổi mật khẩu -->
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">Nhập Mật khẩu cũ:</label>
              <input type="password" class="form-control" v-model="form.oldPassword" />
            </div>
  
            <div class="mb-3">
              <label class="form-label">Nhập Mật khẩu mới:</label>
              <input type="password" class="form-control" v-model="form.newPassword" />
              <small class="text-muted">(Độ dài mật khẩu tối thiểu là 8 ký tự!)</small>
            </div>
  
            <div class="mb-3">
              <label class="form-label">Xác nhận Mật khẩu mới:</label>
              <input type="password" class="form-control" v-model="form.confirmPassword" />
            </div>
  
            <!-- Buttons -->
            <div class="d-flex gap-3 mt-4" style="justify-content: center; gap: 16px;">
              <button class="btn btn-primary" @click="capNhat">CẬP NHẬT</button>
              <button class="btn btn-secondary" @click="huyBo">HỦY BỎ</button>
            </div>
  
            <!-- Điều kiện mật khẩu -->
</div>
          <!-- Hình khóa -->
          <div class="col-md-6 text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Lock" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DoiMatKhau",
    data() {
      return {
        form: {
          oldPassword: "",
          newPassword: "",
          confirmPassword: ""
        }
      };
    },
    methods: {
      capNhat() {
        if (this.form.newPassword !== this.form.confirmPassword) {
          alert("Mật khẩu mới và xác nhận không khớp!");
          return;
        }
        // Validate thêm nếu muốn
        alert("Mật khẩu đã được cập nhật!");
        console.log("Dữ liệu gửi:", this.form);
      },
      huyBo() {
        this.form.oldPassword = "";
        this.form.newPassword = "";
        this.form.confirmPassword = "";
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    padding-top: 60px;
    border-radius: 10px;
  }
  .container {
    padding-top: 30px;
  }
  label {
    font-weight: bold;
  }img {
   max-height: 55%;
  }
  
  </style>
  