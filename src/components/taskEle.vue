<template>
    <ul class="uls">
        <li class="lis" v-for="(item) in taskList" :key="item.tid">
            <p class="tasks">
                 <span>{{item.task_name}}</span>
            </p>
            <p :style="{'display':type==2?'none':'block'}">
                <span @click="checks(1,item.tid,item.mid)">开始</span>|<span @click="checks(2,item.tid,item.mid)">完成</span>|<span>创建时间</span>
            </p>
            <span class="alter" :style="{'display':type==2?'none':'block'}" @click="updates">修改</span>
           
            <p class="confirm" :style="{'display':type==2?'block':'none'}">
                <span>创建时间</span>|<span>{{item.task_checked?'已确认':'未确认'}}</span>
            </p>
            <span class="confirm_alter" :style="{'display':type==2?'block':'none'}" @click="confirm_btn(item.tid,item.mid)">确认</span>
        </li>
        
    </ul>
</template>
<script>
import store from '../store.js';
export default {
    // props:['type','taskList'],
    props:{
        type:Number,
        taskList:Array
    },
    data(){
        return{
          
        }
    },
    methods:{
        updates(){
            this.$emit('updates','修改任务')
        },
        confirm_btn(tid,mid){
            this.$emit('confirm_btn','添加任务已完成',tid,mid);
        },
        checks(status,tid,mid){
            store.commit('checks',{status:status,tid:tid})
            store.commit('getTask',mid);
        }
    }
}
</script>
<style scoped lang='scss'>
.uls{
    width: 100%;
    margin-top: 15px;
  
}
.lis{
    width: 100%;
    height: 85px;
    position: relative;
    background: #fff;
    border-bottom: 2px solid #eee;
    &>p{
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
    }
   
    &>p:nth-child(2),.confirm{
        font-size: 15px;
        color: #666;
        span{
            padding: 0 5px;
            color: #666;
        }
    }
}

.tasks{
    font-size: 16px;
    font-weight: bold;
    
}
.confirm_alter{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 60px;
    text-align: center;
    line-height: 28px;
    height: 28px;
    font-size: 14px;
    color: #fff;
    font-weight: normal;
    background: rgb(75, 118, 236);
    font-weight: bold;
    font-size: weight;
    border-radius: 5px;
}
.alter{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 60px;
    text-align: center;
    line-height: 28px;
    height: 28px;
    background: #eee;
    font-size: 14px;
    color: #666;
    font-weight: normal;
}
</style>

