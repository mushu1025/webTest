<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="230px">
      <el-divider>Header</el-divider>
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
        <el-col :span="8"><el-form-item label="Work-Stream-Name">
          <el-input v-model="form.wsn" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label=" Language-Preference-Code">
          <el-input v-model="form.lpc" />
        </el-form-item></el-col>
      </el-row>
      <el-divider>Body</el-divider>
      <el-row>
        <el-col :span="8"><el-form-item label="contentEncoding">
          <el-input v-model="form.cn" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="sender">
          <el-input v-model="form.ser" />
        </el-form-item></el-col>
        <el-col :span="8"><el-form-item label="customerIdentificationNumber">
          <el-input v-model="form.cin" />
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="smsContent">
            <el-input v-model="form.smsc" type="textarea" :rows="3"></el-input>
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
        cgm: 'HSBC',
        cgcc: 'IN',
        gbgf: 'RBWM',
        det: 'NTF',
        rci: '101',
        wsn: 'NA',
        lpc: 'ENG',
        cn: 'UTF-8',
        ser: 'VM-HSBC',
        cin: '1234565433232',
        smsc: 'TEST ICCM SHP TC SMS iB2B MESSAGE'
      },
      sessionform: ''
    }
  },
  created() {
    this.sessionform = sessionStorage.getItem('tcsmsib2b')
    if (this.sessionform !== null) {
      this.form = JSON.parse(this.sessionform)
    }
  },
  methods: {
    onSubmit() {
      sessionStorage.setItem('tcsmsib2b', JSON.stringify(this.form))
      this.$message('Apply success!')
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
