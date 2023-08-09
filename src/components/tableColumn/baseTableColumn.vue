<template>
    <component :is="component" :column="column" :row="row" ></component>
</template>

<script>
export default {
    // 基础表格列组件
    name: 'baseTableColumn',
    props: {
        // 组件类型名称
        component: {
            type: String,
            required: true
        },
        // 表格列配置
        column: {
            type: Object,
            required: true
        },
        // 表格行对象
        row: {
            type: Object,
            required: true
        }
        
    }
}
</script>