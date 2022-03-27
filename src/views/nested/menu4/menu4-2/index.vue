<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="230px">
      <el-divider >Header</el-divider>
      <el-row>
        <el-col :span="8"><el-form-item label="Source-System-Id">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Source-System-Name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Chnl-Group-Member">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="GBGF">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Deliverable-Type">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Request-Correlation-Id">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="Work-Stream-Name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label=" Language-Preference-Code">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-divider>Body</el-divider>
      <el-row>
        <el-col :span="8"><el-form-item label="contentEncoding">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="sender">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="customerIdentificationNumber">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="mobileNumber">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col ><el-form-item label="smsContent">
          <el-input
            type="textarea"
            :rows="3"
            v-model="form.name"/>
        </el-form-item>
        </el-col>
      </el-row>
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
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
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

