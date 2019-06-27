<template>
  <div>
    <el-card>
      <el-table
        class="box-card"
        :data="tableData.data"
        style="width: 100%"
      @expand-change="getDetail">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="訂單 ID">
                <span>{{ props.row.order_id }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.product_id }}</span>
              </el-form-item>
              <el-form-item label="商品名稱">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="數量">
                <span>{{ props.row.quantity }}</span>
              </el-form-item>
              <el-form-item label="單價">
                <span>{{ props.row.price }}</span>
              </el-form-item>
              <el-form-item label="總金額">
                <span>{{ props.row.total_amount }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="訂單 ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="使用者"
          prop="user_id">
        </el-table-column>
        <el-table-column
          label="狀態"
          prop="status">
        </el-table-column>
        <el-table-column
          label="金額"
          prop="total_amount">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

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
</style>

<script>
import { orders,orders_detail } from '../api/api'

export default {
  data() {
    return {
      tableData: [],
    }
  },
  created(){
    this.getList();
  },
  methods: {
    getList(){
      var p = {user_uuid:sessionStorage.getItem('key')};
      orders(p).then(res=>{
        this.tableData=res.data;
        console.log(res.data);
      });
    },
    getDetail(row){
      console.log(row);
      var id={user_uuid:sessionStorage.getItem('key'),order_id:row.id};
      orders_detail(id).then(res=>{
        console.log(res.data);
      });
    }
  }
}
</script>
