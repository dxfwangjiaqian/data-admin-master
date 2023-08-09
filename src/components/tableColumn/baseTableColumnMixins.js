export default {
    props: {
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
    },
    methods:{
        getDot(item){
            return item.dot;
        },
    }
}