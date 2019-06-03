<template>
  <div class="Dw">
    <div class="Dilog">
      <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="班级名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="教室号" :label-width="formLabelWidth">
            <el-select v-model="form.room" placeholder="教室号">
            <el-option v-for='(item) in tableData2' :key="item.grade_id" :label="item.room_text" :value="item.room_id"></el-option>
      </el-select>
            <!-- <el-input v-model="form.className" auto-complete="off"></el-input> -->
          </el-form-item>
           <el-form-item label="课程名" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="课程名">
            <el-option v-for='(item) in tableData2' :key="item.grade_id" :label="item.subject_text" :value="item.subject_id"></el-option>
      </el-select>
    </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="ckFn(flage,arr)">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import store from '../store'
export default {
  //  控制遮罩层的开关
  props: {
    title: String,
    flage:Number,
    arr:Object,
    tableData2:Array
  },
  data() {
    return {
      flag: true,
      dialogFormVisible: false,
      form: {
        name: "", //班级名称
        className: "", //教室号
        kcName: "", //课程名称
        type: [],
        region:'',//课程id
        room:''
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    // this.dialogFormVisible = true;
    this.$bus.$on('ck',res=>{
        this.dialogFormVisible=res;
           
    })
  },
  updated(){
   if(this.arr.grade_name){
      this.form.name=this.arr.grade_name
    }
  },
  methods:{
      ckFn(flag,arr=''){
        let that = this;
          if(flag==2){
              console.log('添加班级')
              console.log(that)
            store.dispatch('addClassFn',that)
              this.dialogFormVisible= false
          }else if(flag==1){
              console.log('修改班级')
              // console.log(arr)
              this.$http({
                  method:'put',
                  url:'/manger/grade/update',
                  data:{
                    'grade_id':arr.grade_id,
                    'grade_name':arr.grade_name,
                    'subject_id':arr.subject_id,
                    'room_id':arr.room_id
                  }
              }).then(res=>{
                console.log(res)
              })
              this.dialogFormVisible= false
          }
      }
  }
};
</script>
<style>
</style>
