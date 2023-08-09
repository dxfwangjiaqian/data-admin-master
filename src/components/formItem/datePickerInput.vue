<template>
    <DatePicker v-model="formModel[item.prop]" :format="item.format" :separator="item.separator" 
    :type="item.dateType" @on-change="onChange" :placement="item.placement" :placeholder="item.placeholder"  :options="item.options"
    :style="item.style"></DatePicker>
</template>

<script>
import baseFormMixins from './baseFormItemMixins';
export default {
    name: 'datePickerInput',
    mixins: [baseFormMixins],
}
</script>