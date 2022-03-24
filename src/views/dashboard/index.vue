<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" icon="el-icon-add" @click="execute">Live Testing</el-button>
      </div>
      <el-table
        v-loading="listLoading"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :row-class-name="tableRowClassName">
        <el-table-column
          type="selection"
          align="right"
          v-model="mutipleSelection"
          width="50">
        </el-table-column>
        <el-table-column type="expand" >
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="response">
                <span>{{ props.row.detail }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="id"
          width="120"
          v-if="false"
          prop="id">
        </el-table-column>
        <el-table-column
          label="Status"
          width="120"
          prop="status">
        </el-table-column>
        <el-table-column
          label="API Name"
          prop="apiname">
        </el-table-column>
        <el-table-column
          label="Phone Number/Email Address"
          prop="receiver">
        </el-table-column>
        <el-table-column
          label="detail"
          v-if="false"
          prop="detail">
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="Setup Phone and Email" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Phone Number" >
          <el-input v-model="form.sms" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email Address" >
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelDialogForm">Cancel</el-button>
        <el-button type="primary" @click="confirmDialogForm">Apply</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { callAPIs } from '@/api/callAPIs'

export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status === 'success') {
        return 'success-row'
      } else if (row.status === 'error') {
        return 'danger-row'
      }
      return ''
    },
    execute() {
      if (this.mutipleSelection.length === 0) {
        this.$message({
          message: 'You need to select at least one API',
          type: 'warning'
        })
        return
      }
      this.listLoading = true
      this.requestParams.apis = this.mutipleSelectionAPI
      this.requestParams.sms = sessionStorage.getItem('sms')
      this.requestParams.email = sessionStorage.getItem('email')

      callAPIs(this.requestParams).then(response => {
        debugger
        console.log('========================')
        console.log(response)
        this.tableData = response.data
        this.listLoading = false
      }).catch(reason => {
        debugger
        this.listLoading = false
        return false
      })
    },
    handleSelectionChange(val) {
      this.mutipleSelectionAPI = ''
      this.mutipleSelection = val
      this.mutipleSelection.forEach((item, i) => {
        this.mutipleSelectionAPI += item.apiname + ','
      })
    },
    initData() {
      this.form.sms = sessionStorage.getItem('sms')
      this.form.email = sessionStorage.getItem('email')
      this.loadTableData()
    },
    loadTableData() {
      this.tableData[0].receiver = this.form.sms
      this.tableData[1].receiver = this.form.sms
      this.tableData[2].receiver = this.form.email
      this.tableData[3].receiver = this.form.email
      this.tableData[4].receiver = this.form.sms
      this.tableData[5].receiver = this.form.sms
      this.tableData[6].receiver = this.form.sms
      this.tableData[7].receiver = this.form.email
      this.tableData[8].receiver = this.form.email
      this.tableData[9].receiver = this.form.email
    }
  },
  created() {
    this.initData()
  },
  data() {
    return {
      listLoading: false,
      tableData: [{
        id: 0,
        apiname: 'TC SMS-iB2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 1,
        apiname: 'TC SMS-C2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 2,
        apiname: 'TC Email-iB2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 3,
        apiname: 'TC Email-C2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 4,
        apiname: 'Online SMS-iB2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 5,
        apiname: 'Online SMS-eB2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 6,
        apiname: 'Online SMS-C2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 7,
        apiname: 'Online Email-iB2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 8,
        apiname: 'Online Email-eB2B',
        status: 'Waiting Test',
        receiver: ''
      }, {
        id: 9,
        apiname: 'Online Email-C2B',
        status: 'Waiting Test',
        receiver: ''
      }],
      mutipleSelection: [],
      mutipleSelectionAPI: '',
      form: {
        sms: '',
        email: ''
      },
      requestParams: {
        apis: '',
        sms: '',
        email: ''
      }
    }
  }
}
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table .danger-row {
  background: #F56C6C;
}
.handle-box {
  margin-bottom: 20px;
}
</style>
