<style scoped>
    .upload{
        position: absolute;
        right:40px;
        top:20px;
    }
</style>

<template>
  <div>
    <Card style="position:relative">
        <div class="upload">
            <Upload
                :before-upload="handleUpload"
                :on-success="onSuccess"
                :on-error="onError"
                action="//jsonplaceholder.typicode.com/posts/">
                <Button   icon="md-cloud-uploa" type="primary" shape="circle">资料上传</Button>
            </Upload>
        </div>
        <myForm :form="form"></myForm>
        <baseTable :config="tableConfig" ></baseTable>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'data_management_page',
  data () {
    const self = this;
    return {
       
        // 表单
        form: {
            // 表单配置
            formConfig: {
                inline: false,
                'label-position':'left',
                rules: {}
            },
            moreFormConfig: {
                inline: true,
                'label-width': 60,
                'label-position':'right',
                rules: {}
            },
            // 表单绑定对象
            formModel: {
                name1: ''
            },
            // 表单子项数组
            formColumns: [
                {
                    name: '',
                    prop: 'name1',
                    type: 'normalInput',
                    labelWidth: 0,
                    search: true,
                    placeholder: '请输入标题搜索',
                }
            ],
            moreFormColumns: [
                {
                    name: '关键字',
                    prop: 'name2',
                    type: 'normalInput',
                    placeholder: ''
                },
                {
                    name: '作者',
                    prop: 'name3',
                    type: 'normalInput',
                    placeholder: ''
                },
                {
                    name: '文献来源',
                    prop: 'name4',
                    type: 'normalInput',
                    placeholder: ''
                },
                {
                    name: '摘要',
                    prop: 'name5',
                    type: 'normalInput',
                    placeholder: ''
                },
                {
                    name: '发表时间',
                    prop: 'name6',
                    type: 'datePickerInput',
                    placeholder: ''
                },
                {
                    name: '标准分类',
                    prop: 'name7',
                    type: 'checkBoxInput',
                    placeholder: '',
                    choices:[{name:"邮件",value:'3'},{name:"短信",value:'1'},{name:"企业微信",value:'2'},{name:"语音",value:'4'}],
                    size:"large",
                }
            ],
            moreEvents: [
                {
                    component: 'buttonEvent',
                    name: '查询',
                    type: "primary",
                    shape: "circle",
                    style: {'margin-right':'20px'},
                    event() {   
                    }
                },
                {
                    component: 'buttonEvent',
                    name: '取消',
                    shape: "circle",
                    style: {'margin-right':'20px'},
                    event() {   
                    }
                }
            ]
        },

         // 表格配置
        tableConfig: {
            'max-height':"360",
            // 表格列数组
            columns: [
                {
                    title: '序号',
                    key: 'num',
                    width: 70,
                    render: (h, params) => {
                        return h('span', params.index + (self.tableConfig.pageCurrent - 1) * self.tableConfig.pageSize + 1);
                    }
                },
                { title: '关键字', key: 'name2' },
                { title: '标题', key: 'name3' },
                { title: '作者', key: 'name4' },
                { title: '文献来源', key: 'name5' },
                { title: '摘要', key: 'name6' },
                { title: '标准分类', key: 'name7' },
                { title: '发表时间', key: 'name8' },
                {
                    title: '操作',
                    slot: 'operate',
                    key: 'operate',
                    width: 200,
                    align: 'center',
                    component: 'buttonsColumn',
                    events: [
                        {
                            component: 'buttonEvent',
                            name: '查看',
                            type: 'text',
                            size: 'small',
                            class: 'table-textbtn-color',
                            event(row) {
                                self.$router.push({
                                    name:'data_detail_index'
                                })
                            }
                        },
                        {
                            component: 'buttonEvent',
                            size: 'small',
                            name: '删除',
                            type: 'text',
                            class: 'table-textbtn-dele',
                            event(row) {
                                
                            }
                        },
                        {
                            component: 'buttonEvent',
                            size: 'small',
                            name: '标注',
                            type: 'text',
                            class: 'table-textbtn-color',
                            event(row) {
                                self.$router.push({
                                    name:'data_dimension_index'
                                })
                                
                            }
                        }
                    ]
                }
            ],
            pageCurrent: 1,
            pageSize: 10,
            total: 0,
            // 数据
            data: [{name3:"1",name2:'2'}],
            // 请求数据
            async fetchData() {
                
            },
            // 数据赋值给页面
            assignData(resp) {
                
            }
        }
    }
  },
  methods: {
    handleUpload (file) {
        // 上传弹窗
        return false;
    },
    onSuccess (){

    },
    onError () {

    },
    upload () {
        // 上传请求
        // this.loadingStatus = true;
        // setTimeout(() => {
        //     this.file = null;
        //     this.loadingStatus = false;
        //     this.$Message.success('Success')
        // }, 1500);
    }
    
  },
  mounted () {
    this.tableData = [{name1:"name1",name2:"name2",name3:"name3",name4:"name4",name5:"name5",name6:"name6",name7:"name7",name8:"name8"}]

    // getTableData().then(res => {
    //   this.tableData = res.data
    // })
  }
}
</script>

<style>

</style>
