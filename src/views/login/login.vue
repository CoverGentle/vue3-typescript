<template>
<div class="login-box">
<el-form
    ref="loginForm"
    :model="loginForm"
    status-icon
    :rules="rules"
    label-width="60px"
    class="loginForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input v-model="loginForm.username" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item> -->
  </el-form>
</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup () {
    const data = reactive({
      loginForm: {
        username: '',
        password: ''
      }
    })

    const rules = {
      username: [
        { required: true, message: '请输入账号', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ]
    }

    return {
      ...toRefs(data),
      rules
    }
  }
})
</script>
<style lang="less">
.login-box{
  .loginForm{
    width: 30%;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
}

</style>
