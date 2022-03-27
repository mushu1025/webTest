<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Phone Number">
        <el-input v-model="form.sms" />
      </el-form-item>
      <el-form-item label="Email Address">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Apply</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        sms: '',
        email: ''
      }
    }
  },
  created() {
    this.form.sms = sessionStorage.getItem('sms')
    this.form.email = sessionStorage.getItem('email')
  },
  methods: {
    onSubmit() {
      sessionStorage.setItem('sms', this.form.sms)
      sessionStorage.setItem('email', this.form.email)
      this.$message('Apply success!')
    },
    onCancel() {
      this.form.sms = sessionStorage.getItem('sms')
      this.form.email = sessionStorage.getItem('email')
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

