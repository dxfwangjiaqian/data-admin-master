<template>
    <!-- 需要加的属性再进行绑定 -->
    <Select 
    v-model="formModel[item.prop]" 
    :filterable="item.filterable" 
    :multiple="item.multiple" 
    :style="item.style"  
    :disabled="item.disabled"
    :max-tag-count="item.maxTagCount"
    :placeholder="item.placeholder" >
        <Option v-for="option in item.treeChoices" :value="option.value" :key="option.value" style="display:none">{{ option.name }}</Option>
        <Tree :data="item.treeList" @on-select-change="item.handleSelectChange"></Tree>
    </Select>
     <!-- <Select v-model="formModel[item.prop]"
     :multiple="item.multiple " 
     :filterable="item.filterable" 
     :remote="item.remote" 
     :remote-method="getRemoteMethod(item)" 
     :loading="item.loading" 
     :placeholder="item.placeholder" 
     :style="item.style" 
     :transfer="item.transfer"
     :disabled="item.disabled"
     :clearable="item.clearable"
     @on-change="onChange">
        <Option v-for="(option, index) in item.choices" :key="index" :value="option.value">{{option.name}}</Option>
    </Select> -->
</template>

<script>
import baseFormMixins from './baseFormItemMixins';
export default {
    name: 'selectTree',
    mixins: [baseFormMixins]
}
</script>