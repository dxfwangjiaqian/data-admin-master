export default {
    props: {
        formModel: {   // 表单绑定模型
            type: Object,
            required: true
        },
        item: {     //子组件对象内容
            type: Object,
            required: true
        },
    },
    methods: {
        onChange(val) {
            if (this.item.onChange) {
                this.item.onChange(val);
            }
        },
        fetchData() {
            if (this.item.fetchData) {
                this.item.fetchData();
            }
        },
        bindEL() {
            this.item.el = this.$children[0];
        },
        getRemoteMethod(item){
            if(item.remoteMethod){
               return item.remoteMethod.bind(item);
            }
        }
    },
    mounted() {
        this.fetchData();
        this.bindEL();
    }
}