<template>
    <div class="inputMultiple">
        <div v-for="(unit,i) in formModel[item.prop]" :key="i" :style="getStyle(i)">
            <Input v-model="formModel[item.prop][i]"  :placeholder="item.placeholder"  :style='item.style' :disabled="item.disabled"/>
            <Icon type="md-add-circle"  @click="add"  style="margin-right:10px;" :size="26" color="#2185f0" v-if="!item.disabled"/>
            <Icon type="md-remove-circle"  @click="remove(i)" v-if="getRemoveShow(i,item)" :size="26" color="#2185f0"/>
        </div>
    </div>
</template>
<script>
import baseFormMixins from './baseFormItemMixins';
export default {
    name: 'inputMultiple',
    mixins: [baseFormMixins],
    data(){
        return {
          
        }
    },
    methods:{
        getStyle(idx){
            return idx!==this.formModel[this.item.prop].length-1?'margin-bottom:10px;':''
        },
        getRemoveShow(idx,item){
            return idx!==0&&!item.disabled;
        },
        add(){
            this.formModel[this.item.prop].push("");
        },
        remove(i,unit){
            this.formModel[this.item.prop].splice(i,1);
        }
    }
}
</script>

<style lang="less" scoped>
   
        
</style>