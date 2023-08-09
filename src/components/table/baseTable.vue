<template>
    <div >
        <Table 
        :class='config.class'  
        :columns="getShowColums(config.columns)" 
        :data="config.data" 
        :loading="loading" 
        :width="config.width"
        :style="config.style"
        :max-height="config['max-height']"
        @on-select-all-cancel="cancelAll"
        @on-select-all="selectAll"
        @on-select="select"
        @on-select-cancel="cancel"
        :ref="config.ref || 'tableRef'"
        >
            <template slot-scope="{ row }" :slot="column.slot" v-for="(column, index) in config.columns">
                <baseTableColumn :key="index" :component="column.component" :column="column" :row="row" ></baseTableColumn>
            </template>
        </Table>
        <div class="page-container" v-if="calPageControlShow(config.total)">
            <Page :total="config.total"  :show-elevator="config['show-elevator']" :show-sizer="config['show-sizer']"  
            :current="config.pageCurrent" :page-size ="config.pageSize" 
            @on-change="pageChange" @on-page-size-change="pageSizeChange"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseTable',
    props: {
        /**
         * 表格配置项
         * 数据结构：
         * 
         * 表格相关
         * columns      表格列数组
         * data         表格数据
         * class        表格样式
         * fetchData    表格获取数据方法
         * ...
         * 
         * 分页相关
         * total        数据总条数
         * current      当前页码
         * pageSize     单页数量
         * ...
        */
        config: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            //表格加载状态
            loading: false,     
        }
    },
    methods: {
        select(selection,row){
            if (this.config.select) {
                this.config.select(selection,row)
            }
        },
        cancel(selection,row){
            if (this.config.cancel) {
                this.config.cancel(selection,row)
            }
        },
        cancelAll(selection){
            if (this.config.cancelAll) {
                this.config.cancelAll(selection)
            }
        },
        selectAll(selection){
            if (this.config.selectAll) {
                this.config.selectAll(selection)
            }
        },
        //获取展现的列
        getShowColums(Colums){
            return Colums.filter(v=>{return v.hidden==undefined||!v.hidden})
        },
        // 判断分页展示
        calPageControlShow(total) {
            return total > 0;
        },
        // 页码变动
        pageChange(val) {
            if (this.config.fetchData) {
                this.config.pageCurrent = val;
                this.config.fetchData();
            }
        },
        // 单页数量变动
        pageSizeChange(val) {
            if (this.config.fetchData) {
                this.config.pageSize = val;
                this.config.fetchData();
            }
        },
        // 添加表格基础方法
        addBaseFuncs() {
            /**
             * 计算请求参数
             * formModel    表单绑定模型
            */
            let self = this;
            this.config.calFetchParams = function(formModel) {
                let params = {
                    ...formModel,
                    pageCurrent: self.config.pageCurrent,
                    pageSize: self.config.pageSize
                };
                return params;
            }
            this.config.startLoading = function() {
                self.loading = true;
            }
            this.config.endLoading = function() {
                self.loading = false;
            }
            this.config.getSels = function() {
                let sels = self.$refs.tableRef.getSelection();
                return sels;
            }
        }
    },
    mounted() {
        this.addBaseFuncs();
    }
}
</script>