<template>
    <div >
        <component v-for="(item, index) in events" :key="index" :is="item.component" :item="item" :eventBody="eventBody"></component>
    </div>
</template>

<script>
export default {
    /**
     * 基础事件区域（可包含多个事件组件）
    */
    name: 'baseEventArea',
    props: {
        /**
         * 事件数组
         * 
         * 数组对象数据结构
         * item: 事件对象
         * item.component    组件类型名称
        */
        events: {
            type: Array,
            required: true
        },
        /**
         * 事件主体，非必传  可在底层事件处理后进行回调
        */
        eventBody: {
            type: Object
        }
    }
}
</script>