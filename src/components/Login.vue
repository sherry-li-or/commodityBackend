<template>
  <div>
    <el-card class="box-card" shadow="always">
      <h2>Login</h2>
      <el-form label-position="top">
        <div>
          <el-form-item label="帳號：">
            <el-input type="text"
                      id="account"
                      placeholder="account"
                      v-model="user.account"></el-input>
          </el-form-item>
          <el-form-item label="密碼：">
            <el-input type="password"
                      id="password"
                      placeholder="password"
                      v-model="user.password"
                      show-password></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="loginbtn">
        <el-button type="primary"
                   @click="login">Login
        </el-button>
        <el-button @click="dialogFormVisible = true">注冊</el-button>
        <el-dialog title="注冊" :visible.sync="dialogFormVisible">
          <el-form :model="reguser" :rules="rules">
            <el-form-item label="帳號" prop="account" :label-width="formLabelWidth">
              <el-input v-model="reguser.account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密碼"  prop="password" :label-width="formLabelWidth">
              <el-input v-model="reguser.password" autocomplete="off" type="password" show-password></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="">確定</el-button>
          </div>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script>
import { login } from '../api/api'

export default {
	name: 'Login',
	data () {
		return {
			user: {
				account: '',
				password: ''
			},
      reguser: {
	      account: '',
	      password: ''
      },
      rules: {
        account: [
          { type: "string", required: true, message: '帳號不可空白', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密碼不可空白', trigger: 'blur' }
        ],
      },
		  dialogFormVisible: false,
		  formLabelWidth: '120px'
		}
	},
	methods: {
	  login () {
		  const form = {
			  account: this.user.account,
			  password: this.user.password
		  }
			  /*console.log(form);
			  login(form).then(res => {
				  console.log(res.data.key);
          if (res.data.key) {
	          alert('登入成功')
            this.$router.push("/Home");
          }
          if (!res.data.key) {
            this.user.account = "";
            this.user.password = "";
            alert('請填入帳號或密碼')
          }
			  })*/
	    if ( this.user.account === '' && this.user.password === '') {
		    alert('帳號或密碼錯誤')
	    }
	    else {
		    alert('登入成功')
		    this.$router.push('/Home')
	    }

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  width: 480px;
  margin: 0px auto;
}

h2 {
  margin: 0px 42%;
}

.loginbtn {
  margin: 10px 35%;
  display: inline-flex;
}
</style>
