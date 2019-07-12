<template>
  <div>
    <el-card>
      <el-table
        class="box-card"
        :data="tableData"
        style="width: 100%"
        @expand-change="getDetail">
        <!--<el-table-column type="expand">
          <template slot-scope="props">
            {{props.row.detail}}
            &lt;!&ndash;  <div v-for="(order, index) in props.data" :key="index">
                <span>{{order}}</span>
              </div>&ndash;&gt;
            &lt;!&ndash;<el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="訂單 ID">
                <span>{{ props.row.order_id }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.product_id }}</span>
              </el-form-item>
              <el-form-item label="商品名稱">
                <span>{{ props.row.product_name }}</span>
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
            </el-form>&ndash;&gt;
          </template>
        </el-table-column>-->
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
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="getDetail(scope.row)">Detail
            </el-button>
            <el-dialog title="訂單明細" :visible.sync="dialogTableVisible">
              <el-table :data="detailData">
                <el-table-column property="product_name" label="商品名稱"></el-table-column>
                <el-table-column property="price" label="價錢" width="150"></el-table-column>
                <el-table-column property="quantity" label="數量"></el-table-column>
                <el-table-column property="total_amount" label="總金額"></el-table-column>
              </el-table>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { orders, orders_detail } from '../api/api'

export default {
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      detailData:[]
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList(){
      let a = this;
      orders({}).then((res)=>{
        a.tableData=res.data.data;
        Object.keys(sessionStorage)
        console.log({});
       /* this.tableData.forEach(el => {
          el.detail = [];
        });*/
      });
    },
    getDetail(row){
      this.dialogTableVisible = true;
      console.log(row);
      let a = this;
      var id={order_id:row.id};
      orders_detail(id).then((res)=>{
        console.log(res.data);
        a.detailData = res.data.data;
      });
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
</style>
