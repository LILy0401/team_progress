<template>
    <div class="wrap">
        <header>项目列表-班级</header>
         <p @click="openDialog">open</p>
        <section>
            <project-list :list='list'></project-list>
            <p class="add_project">
                <span v-on:click="create_project">创建项目</span>
            </p>
           
        </section>
        <footer>
            选择班级
            <span class="r_jian">></span>
        </footer>
        <alert-ele :isShow='isShow' 
        @confirm='confirm'
        @cancel='cancel'
        :title='title'
        >
        <input type="text" v-model="project_name" placeholder="请输入项目名称"/>
        <input type="text" v-model="project_discription" placeholder="添加项目介绍"/>
        </alert-ele>
    </div>
</template>

<script>
import ProjectList from '../components/projectList.vue';
import AlertEle from '../components/alertEle.vue';


import store from '../store';
export default {
    data(){
        return{
            isShow:false,
            title:'创建项目',
            project_name:'',
            project_discription:''
        }
    },
    computed:{
        list(){
            return store.state.list
        }
    },
    components:{
        ProjectList,
        AlertEle,
       
    },
    created(){
        store.commit('getlist');
       
    },
    methods:{
        create_project(){
            this.isShow=true; 
        },
        confirm(is){
            this.isShow=is;
            store.commit('confirm',{project_name:this.project_name,project_discription:this.project_discription})
            store.commit('getlist');
        },
        cancel(is){
            this.isShow=is;
        },
        
        openDialog(){
            // this.$dialog({
            //     title:'',
            //     callback(){
                    
            //     },
            //     content:'组件'
            // })
        }
    }
}
</script>
<style lang='scss'>
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background: #fff;
}
header{
    width: 100%;
    height: 50px;
    background: rgb(75, 118, 236);
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    line-height: 50px;
}
section{
    width: 100%;
    height: 100%;
    padding: 0 7px;
    overflow: auto;
    flex: 1;
}
.add_project{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 25px;
    &>span{
        font-size: 16px;
         background: rgb(75, 118, 236);
         color: #fff;
         font-weight: bold;
         padding: 4px 10px;
         border-radius: 5px;
    }
}
footer{
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 4px #ccc;
    line-height: 50px;
    text-align: center;
}
.r_jian{
    float: right;
    padding-right: 10px;
    font-size: 17px;
}
</style>
