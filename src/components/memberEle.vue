<template>
    <div class="dl-d">
        <dl class="dls" @click="go_task_page(item.mid)" v-for="(item) in memberList" :key="item.mid">
            <dt class="dt_d">
                <img>
            </dt>
            <dd class="dd_d">
                <p>{{item.member_name}}</p>
                <p>
                    {{item.identity==1?'组员':'组长'}}
                    <span class="jian_r">></span>
                </p>
            </dd>
        </dl>

    </div>
</template>
<script>

export default {
    props:{
        memberList:Array
    },
    components:{
      
    },
    methods:{
        go_task_page(mid){
            this.$router.push({path:'/task',query:{mid:mid}});
        },
        
    }
}
</script>
<style scoped lang='scss'>
.dl-d{
    width: 100%;
}   
.dls{
    width: 100%;
    height: 80px;
    margin-bottom: 2px;
    background: #fff;
    display: flex;
    padding: 5px 7px;
}
.dt_d{
    flex: 3;
    background: #ccc;
}
.dt_d>img{
    width: 100%;
    height: 100%;
}
.dd_d{
    flex: 7;
    padding-left: 10px;
    &>p{
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    &>p:nth-child(1){
        font-size: 16px;
        font-weight: bold;
    }
     &>p:nth-child(2){
        position: relative;
        font-size: 14px;
        color: #666;
    }
}
.jian_r{
    position: absolute;
    right: 10px;
    color: #666;
}

</style>
