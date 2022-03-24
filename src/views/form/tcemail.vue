<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-divider>Header</el-divider>
      <el-row>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-divider>Body</el-divider>
      <el-row>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item></el-col>
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

