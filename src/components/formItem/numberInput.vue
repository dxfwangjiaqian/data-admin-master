<template>
    <!-- 需要加的属性再进行绑定 -->
    <InputNumber :min="1" v-model.trim="formModel[item.prop]" :placeholder="item.placeholder" :style="item.style" :type="item.inputType" :disabled="item.disabled"/>
</template>

<script>
import baseFormMixins from './baseFormItemMixins';
export default {
    name: 'normalInput',
    mixins: [baseFormMixins]
}
</script>