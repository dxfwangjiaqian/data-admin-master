<template>
    <!-- 需要加的属性再进行绑定 -->
    <Dropdown :trigger="item.trigger" @on-click="handleClick" :style="item.style" v-if="showDropDown(item)">
        <!-- link -->
        <a href="javascript:void(0)" v-if="item.type === 'link'">
            {{item.name}}
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <!-- buton -->
        <Button :type="item.buttonType" v-if="item.type === 'button'">
            {{item.name}}
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <template v-for="(option, index) in item.choices">
                <DropdownItem  :key="index" :name="option.name" v-if="show(option)">{{option.value}}</DropdownItem>
            </template>
        </DropdownMenu>
    </Dropdown>
</template>

<script>

import baseEventMixins from './baseEventMixins';
export default {
    name: 'dropDownEvent',
    mixins: [baseEventMixins],
    methods: {
        handleClick(name) {
           if (this.item.handleClick) {
                this.item.handleClick(name);
            }
        }
    }
}
</script>