<template>
    <span class="button-evnet-warpper">
        <Button  :type="item.type" @click="event(item)" :style="item.style"   :shape="item.shape" :icon="item.icon" :size="item.size" :disabled="getDisable(item)" :class="getBtnClass(item)" :title="item.title" v-if="show(item)&&getHidden(item)">{{getName(item)}}</Button>
        <Badge :count="Number(item.badgeCount)" v-if="item.haveBadge" class="badge"></Badge>
    </span>
</template>

<script>
import baseEventMixins from './baseEventMixins';
export default {
    /**
     * 按钮事件组件
    */
    name: 'buttonEvent',
    mixins: [baseEventMixins]
}
</script>

<style lang="less" scoped>
.button-evnet-warpper {
    position: relative;
    .badge {
        position: absolute;
        top: -10px;
        right: -10px;
    }
}
</style>