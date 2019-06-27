<template>
  <div>
    <div class="feature">
      <el-button  class="addbtn"
                  type="primary"
                  @click="dialogFormVisible = true" icon="el-icon-plus">新增</el-button>
      <el-dialog title="新增" :visible.sync="dialogFormVisible">
        <el-form :model="newValue" :rules="rules" ref="tableData">
          <el-form-item label="商品名稱" prop="name" :label-width="formLabelWidth">
            <el-input v-model="newValue.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="價錢"  prop="price" :label-width="formLabelWidth">
            <el-input v-model="newValue.price" autocomplete="off" onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="handleAdd">確定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="talbe">
      <el-card>
          <el-table
            :data="tableData"
            style="width: 100%"
            validate-event="true">
            <el-table-column  label="商品名稱">
              <template slot-scope="scope">
                <template v-if="scope.row.editing">
                  <el-form :rules="rules" :model="scope.row">
                    <el-form-item prop="name">
                      <el-input class="edit-input" v-model="scope.row.name" placeholder="商品名稱"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column  label="價錢">
              <template slot-scope="scope">
                <template v-if="scope.row.editing">
                  <el-form :rules="rules" :model="scope.row">
                    <el-form-item prop="price">
                      <el-input class="edit-input" v-model="scope.row.price" placeholder="價錢" onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.price}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="editing" label="操作">
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  v-if="!scope.row.editing"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.$index)">刪除
                </el-button>
                <el-button
                  type="primary"
                  v-if="!scope.row.editing"
                  icon="el-icon-edit"
                  v-model="scope.$index"
                  @click="handleEdit(scope.row)">編輯
                </el-button>
                <div v-else>
                  <el-button
                    type="info"
                    icon="el-icon-close"
                    v-model="scope.$index"
                    @click="handleCancel(scope.row)">取消
                  </el-button>
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    @click="saveModify(scope.row)">儲存
                  </el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
      </el-card>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'TestWorld',
    data() {
      return {
        tableData: [
          {
            name: 'orange',
            price: 100,
            editing: false,
            saving: false
          },
          {
            name: 'grape',
            price: 100,
            editing: false,
            saving: false
          },
          {
            name: 'banana',
            price: 100,
            editing: false,
            saving: false
          }
        ],
        rules: {
	        name: [
		        { type: "string", required: true, message: '請輸入商品名稱', trigger: 'blur' }
	        ],
	        price: [
		        { required: true, message: '請輸入商品價錢', trigger: 'blur' }
	        ],
        },
        prevValue: {},
        dialogFormVisible: false,
        newValue: {
          name: '',
          price: '',
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      handleDelete(index) { //刪除行數
        this.tableData.splice(index, 1)
      },
      handleEdit(row) {  //編輯
        row.editing = true;
        this.prevValue = JSON.parse(JSON.stringify(row));
      },
      handleCancel(row) {  //取消
        row.editing = false;
        let prevContentName = this.prevValue.name;
        let prevContentPrice = this.prevValue.price;
        this.$set(row, "name", prevContentName);
	      this.$set(row, "price", prevContentPrice);
      },
      saveModify(row) {               //保存
	     /* if (this.row.name !== null && this.row.price !== null){
	      	alert('新增成功');
	        row.editing = false
	        row.saving = true;
        }
	      else {
	       alert('商品名稱及價錢不能是空的');
        }*/
	      row.editing = true;
	      row.saving = false;
        console.log(JSON.stringify(this.tableData))
      },
      clearInput() {
        this.newValue.name = '';
        this.newValue.price = ''
      },
      handleAdd() {
	      const checkAdd = (this.newValue.name !== '') && (this.newValue.price !== '')
	      if (checkAdd === true){
	        alert('新增成功');
        }
      	else {
	        console.log('error submit!!');
	        alert('商品名稱及價錢不能是空的');
	        return false;
        }
	      this.tableData.push({name: this.newValue.name, price: this.newValue.price, editing: false, saving: true}); //新增
	      this.dialogFormVisible = false;
        this.clearInput();
      },
	    /*handleInput(event) {
	      return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )
      }*/

    }
  }
</script>
<style>
.feature {
  margin: -10px 0px 10px 10px;
  width: 100%;
  height: 40px;
}
.addbtn {
  position: absolute;
  left: 220px;
}
.talbe {
  width: 100%;
}
</style>
