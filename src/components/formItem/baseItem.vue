<template>
    <div>
        <component :is="is" :formModel="formModel" :item="item" ></component>
    </div>
</template>

<script>
export default {
    /**
     * 基础表单子项容器
    */
    name: 'baseItem',
    props: {
        is: {   // 子组件类型
            type: String,
            required: true
        },
        formModel: {   // 表单绑定模型
            type: Object,
            required: true
        },
        item: {     //子组件对象内容
            type: Object,
            required: true
        }
    }
}
</script>