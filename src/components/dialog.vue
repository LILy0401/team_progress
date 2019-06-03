<template>
    <div class="box">
        <div class="box_content">
            <div>
                this is dialog content
            </div>
            <button @click='comfirms'>确定</button>
            <button @click="cancle">取消</button>
        </div>
    </div>
</template>
<script>

export default {
    methods:{
        comfirms(){
           this.$el.parentNode.removeChild(this.$el)
           
        },
        cancle(){
            this.$el.parentNode.removeChild(this.$el)
        }
    }
}
</script>
<style scoped>
.box{
    width:100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
}
.box_content{
    width: 60%;
    height: 200px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    /* transform: translate(-50%,-50%); */
}
</style>

