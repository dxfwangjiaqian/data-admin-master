<template>
    <!-- 需要加的属性再进行绑定 -->
    <Input  v-model.trim="formModel[item.prop]" :placeholder="item.placeholder" :style="item.style" :type="item.inputType" :rows="item.rows" :search="item.search" :disabled="item.disabled" />
</template>

<script>
import baseFormMixins from './baseFormItemMixins';
export default {
    name: 'normalInput',
    mixins: [baseFormMixins]
}
</script>