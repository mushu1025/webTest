<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="230px">
      <el-divider >Header</el-divider>
      <el-row>
        <el-col :span="8"><el-form-item label="Source-System-Id">
          <el-input v-model="form.ssi" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Source-System-Name">
          <el-input v-model="form.ssn" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Chnl-Group-Member">
          <el-input v-model="form.cgm" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="Chnl-Group-CountryCode">
          <el-input v-model="form.cgcc" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="GBGF">
          <el-input v-model="form.gbgf" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="Deliverable-Type">
          <el-input v-model="form.det" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="Request-Correlation-Id">
          <el-input v-model="form.rci" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label=" Language-Preference-Code">
          <el-input v-model="form.lpc" />
        </el-form-item></el-col>
      </el-row>
      <el-divider>Body</el-divider>
      <el-row>
        <el-col :span="8"><el-form-item label="subjectEncoding">
          <el-input v-model="form.se" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="sender">
          <el-input v-model="form.ser" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="customerIdentificationNumber">
          <el-input v-model="form.cin" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><el-form-item label="fromEmailAddress">
          <el-input v-model="form.fea" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="emailContentType">
          <el-input v-model="form.ect" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="16"><el-form-item label="subject">
          <el-input v-model="form.subj" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col ><el-form-item label="emailContent">
          <el-input
            type="textarea"
            :rows="3"
            v-model="form.ec"/>
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
        ssi: '9052553',
        ssn: 'DSP',
        cgm: 'HBAP',
        cgcc: 'IN',
        gbgf: 'RBWM',
        det: 'NTF',
        rci: 'time_critical_email',
        lpc: 'ENG',
        se: 'UTF-8',
        ser: 'ICCM SHP Testing',
        cin: '0005412884022497117',
        fea: 'ADRESTEST-SVC-ICCMSA@adrestest.addev.hsbc',
        ect: 'text/html;charset=\"UTF-8\"',
        subj: 'TC EMAIL iB2B',
        ec: 'TEST ICCM SHP TC EMAIL C2B MESSAGE'
      },
      sessionform: {}
    }
  },
  created() {
    this.sessionform = sessionStorage.getItem('tcemailc2b')
    if (this.sessionform !== null) {
      this.form = JSON.parse(this.sessionform)
    }
  },
  methods: {
    onSubmit() {
      sessionStorage.setItem('tcemailc2b', JSON.stringify(this.form))
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
