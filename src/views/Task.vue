<template>
    <div class="wrap">
        <header>
            任务表
            <progresss :pro_length='pro_length'></progresss>
        </header>
        <section>
            <p class="tab_p">
                <span :class="indexs===index?'col':''" v-for="(item,index) in list" :key="index" @click="checkevery(index)">{{item}}</span>
            </p>
            <task-ele :taskList='taskList' :type="indexs" @updates='updates' @confirm_btn='confirm_btn'></task-ele>
            <p class="add_project">
                <span v-on:click="create_project">添加任务</span>
            </p>
        </section>
         <alert-ele
            :isShow='isShow'
            @confirm='confirm' 
            @cancel='cancel'
            :title='title'
            >
             <input type="text" v-model="task_name" :placeholder="project_describe"/>
            </alert-ele>
    </div>
</template>
<script>
import TaskEle from '../components/taskEle.vue';
import AlertEle from '../components/alertEle.vue';
import Progresss from '../components/progress.vue';
import store from '../store.js';
export default {
    data(){
        return{
            list:['todo','doing','done'],
            indexs:0,
            isShow:false,
            task_name:'',
            title:'添加任务',
            project_describe:'',
            tid:'',
            mid:null,
            flag:8,
            pro_length:40
    
        }
    },
    computed:{
        taskList(){
            return store.state.taskList
        }
    },
    components:{
        TaskEle,
         AlertEle,
         Progresss
    },
    created(){
       
        store.commit('getTask',this.$route.query.mid);
    },
    methods:{
        create_project(){
            this.isShow = true;
             this.title = '添加任务';
             this.project_describe='请输入任务描述'
        },
        //修改
        updates(title){
             this.isShow = true;
             this.title = title;
             this.project_describe='任务名称';
        
        },
        checkevery(index){
            this.indexs = index;   
            store.commit('checkevery',index)
            
        },
        confirm(is){
            this.isShow=is;
            if(this.flag === 9){
                store.commit('taskCheck',{tid:this.tid,task_name:this.task_name,mid:this.$route.query.mid})
          }else{
                 store.commit('addTask',{
                    task_name:this.task_name,
                    mid:this.$route.query.mid
                })
               store.commit('getTask',this.$route.query.mid);
            }
           
            this.flag = 8;
        },
        cancel(is){
            this.isShow=is;
        },
        confirm_btn(title,tid,mid){
            this.mid = mid;
            this.tid = tid;
            this.isShow = true;
            this.title = title;
            this.flag = 9;
            this.project_describe='请输入检查人'
        }
    }
}
</script>
<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    background: rgb(247, 244, 244);
}
.section{
    width: 100%;
    height: 100%;
    padding: 0 10px;;
}
.tab_p{
    width: 100%;
    height: 35px;
    margin-top: 20px;
    border-radius: 3px;
    background: #fff;
    display: flex;
    border: 1px solid  rgb(75, 118, 236);
}
.tab_p>span{
    width: 33.3%;
    height: 100%;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    font-weight: bold;
    color: rgb(75, 118, 236);
}
.tab_p>.col{
    background: rgb(75, 118, 236);
    color: #fff;
}
</style>


