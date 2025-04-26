<template>
    <div class="profile-container" style="margin-top: 10%; background-color: #d8d8e9;">
        <div class="profile-header">
            <h2>Thông tin cá nhân</h2>
        </div>
        <div class="profile-content">
            <form @submit.prevent="updateProfile">
                <div class="form-group">
                    <label for="name">Họ và tên:</label>
                    <input type="text" id="name" v-model="user.name" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="user.email" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="phone">Số điện thoại:</label>
                    <input type="text" id="phone" v-model="user.phone" class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                phone: ''
            }
        };
    },
    mounted() {
        this.loadUserProfile();
    },
    methods: {
        async loadUserProfile() {
            // Lấy thông tin từ localStorage cho name và email
            const storedName = localStorage.getItem('username');
            const storedEmail = localStorage.getItem('email');

            this.user.name = storedName || '';
            this.user.email = storedEmail || '';

            // Giả sử bạn gọi API để lấy thông tin số điện thoại
          
        },

       
    }
}
</script>

<style scoped>
.profile-container {
    padding: 20px;
    max-width: 600px;

    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-header {
    text-align: center;
    margin-bottom: 20px;
}

.profile-content {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: rgb(4, 4, 9);
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    margin-top: 10px;
}
h2{
    color: rgb(231, 35, 35);
}
</style>