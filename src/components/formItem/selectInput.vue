<template>
    <!-- 需要加的属性再进行绑定 -->
    <Select v-model="formModel[item.prop]"
     :multiple="item.multiple" 
     :filterable="item.filterable" 
     :remote="item.remote" 
     :remote-method="getRemoteMethod(item)" 
     :loading="item.loading" 
     :placeholder="item.placeholder" 
     :style="item.style" 
     :transfer="item.transfer"
     :disabled="item.disabled"
     :clearable="item.clearable"
     @on-change="onChange"
     :max-tag-count="item.maxTagCount">
        <Option v-for="(option, index) in item.choices" :key="index" :value="option.value">{{option.name}}</Option>
    </Select>
</template>

<script>

/**
 * 示例
 * {
        name: '时间',
        prop: 'time',
        type: 'selectInput',
        filterable: true,
        remote: true,
        loading: false,
        style: {
            width: '250px'
        },
        options: [],
        remoteMethod(query) {
            this.loading = true;
            if (query !== '') {
               this.loading = false;
               // todo: 获取this.options
            } else {
                this.options = [];
            }
        }
    }
 */
import baseFormMixins from './baseFormItemMixins';
export default {
    name: 'selectInput',
    mixins: [baseFormMixins]
}
</script>