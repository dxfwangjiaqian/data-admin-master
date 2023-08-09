<template>
    <Select  v-model="formModel[item.prop]" filterable @on-query-change="selectInputChange" remote clearable :placeholder="item.placeholder"
            :remote-method="item.getSelect" :loading="item.isSelectLoading" :style="item.style" >
        <Option v-for="(choice, index) in item.choices" :value="choice.value" :key="index">{{choice.label}}</Option>
    </Select>
</template>

<script>
import baseFormMixins from './baseFormItemMixins';
export default {
    name: 'inputSelect',
    mixins: [baseFormMixins],
}
</script>