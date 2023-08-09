<template>
    <Form :model="formModel" :inline="formConfig.inline" :rules="formConfig.rules" 
        :label-position="formConfig['label-position']" :label-width="formConfig['label-width']"
        :show-message="formConfig['show-message']" :autocomplete="formConfig.autocomplete" >
        <FormItem  v-for="(item, index) in formColumns" :key="index" :label="item.name" :prop="item.prop" :label-width="item.labelWidth"  :style="item.formStyle">
            <div class="form-item">
                <div class="required-icon" v-if="getRequired(item)">
                    <span style="color:red;" >*</span>
                </div>
                <baseItem :is="item.type" :formModel="formModel" :item="item" ></baseItem>
            </div>
        </FormItem>
    </Form>
</template>

<script>
export default {
    /**
     * 基础表单
    */
    name: 'baseForm',
    props: {
        /**
         * 表单绑定对象
        */
        formModel: {
            type: Object,
            required: true
        },
        /**
         * 表单配置
        */
        formConfig: {
            type: Object,
            required: true
        },
        /**
         * 表单子项数组
        */
        formColumns: {
            type: Array,
            required: true
        }
    },
    methods: {
        /**
         * 获取*展示状态
        */
        getRequired(item) {
            return item.required||item.styleRequired
        },
        // 初始化正则相关
        initRules() {
            let self = this;
            this.formColumns.filter(column => { return column.rule; }).map(column => {
                // 获取包含正则的部分
                let obj = {};
                obj[column.prop] = column.rule;
                Object.assign(this.formConfig.rules, obj);
            })
            /**
             * 表单正则校验
             * 通过时回调表单模型对象
            */
            this.formConfig.validate = (ok) => {
                // 表单组件
                self.$children[0].validate((valid) => {
                    if (valid) {
                        ok(self.formModel);
                    }
                })
            }
        },
    },
    mounted() {
        this.initRules();
    }
}
</script>

<style lang="less" scoped>
.form-item {
    display: flex;
    .required-icon {
        width: 15px;
    }
   
}
/deep/.ivu-form-item-content {
     .ivu-form-item-error-tip{
        left:15px;
    }
}
</style>

