<template>
    <div class="progress">
        <p class="p_pro" :style="{'width':pro_length+'%'}"></p>
    </div>
</template>
<script>
export default {
    props:['pro_length']
}
</script>
<style scoped>
.progress{
    width: 90%;
    height: 5px;
    background: #bbbbbb;
    margin-top: 2px;
    position: relative;
    border-radius: 7px;
    overflow: hidden;
}
.p_pro{
    /* width: 50%; */
    height: 5px;
    background: blue;
    position: absolute;
    top: 0;
    left: 0;
     border-radius: 7px;
}
</style>

