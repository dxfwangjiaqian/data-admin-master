<template>
    <!-- 需要加的属性再进行绑定 -->
    <CheckboxGroup v-model="formModel[item.prop]" :style="item.style" :size="item.size">
        <Checkbox v-for="(choice, index) in item.choices" :key="index" :label="choice.value" :disabled="item.disabled">{{choice.name}}</Checkbox>
    </CheckboxGroup>
</template>

<script>
import baseFormMixins from './baseFormItemMixins';
export default {
    name: 'checkBoxInput',
    mixins: [baseFormMixins]
}
</script>