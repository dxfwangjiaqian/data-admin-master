<style scoped>
    .title{
      text-align: center;
      padding:20px;
    }
    /deep/.ivu-tree-arrow-disabled{
      display: none;
    }
    /deep/.ivu-tree-title:hover{
      background-color:#fff;
    }
    /deep/.ivu-layout-sider{
      background: #fff;
    }
    .line{
      margin:10px 20px;
    }
    .article-line span{
      font-weight: bold;
    }
    .table-box .table-page-box{
        margin:20px 0 ;
        text-align: center;
    }
    .detail-operation{
      position:absolute;
      right:30px;
      top:30px;
    }
</style>
<template>
    <div style="position:relative">
        <Card >
            <h3 class="title">{{ content.name }}</h3>
            <Layout>
                <Sider  hide-trigger>
                <h4>文章目录</h4>
                <Tree :data="content.catalog"></Tree>
                </Sider>
                <Content>
                    <div class="line article-line"><span>作者：</span>{{ content.author }}</div>
                    <div class="line article-line"><span>摘要：</span>{{ content.abstract }}</div>
                    <div class="line article-line"> 
                        <Row :gutter="10">
                            <Col span="8">
                                <div class="article-line"><span>图分类号：</span>{{ content.sortNumber }}</div>
                            </Col>
                            <Col span="6">
                                <div class="article-line"><span>文献标识码：</span>{{ content.documentCode }}</div>
                            </Col>
                            <Col span="10">
                                <div class="article-line"><span>文章编号码：</span>{{ content.articleCode }}</div>
                            </Col>
                        </Row>
                    </div>
                    <div class="line article-line"><span>关键词：</span>{{ content.keyword }}</div>
                    <Tabs  class="table-box">
                        <TabPane :label="tab.label" v-for="(tab, pidx) in content.tabs" :key="tab.label">
                            <Table :columns="tab.tableConfig.columns" :data="tab.tableConfig.data">
                                <template #action="{row, cidx}">
                                    <Button type="primary" size="small" @click="show(pidx,cidx)">查看</Button>
                                </template>
                            </Table>
                            <div class="table-page-box" v-if="content.pageConfig && content.pageConfig.total>0">
                                <Page :total="content.pageConfig.total" v-model="content.pageConfig.page" @on-change="(page)=>{content.pageConfig.change && content.pageConfig.change(pidx,page)}" class="table-page" />
                            </div>
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
            <div class="detail-operation"> 
            <Tooltip content="下载" placement="top-start">
                <Button size="large" icon="ios-download-outline" type="primary" shape="circle" @click="download()"></Button>
            </Tooltip>
            <Tooltip content="预览" placement="top-start">
                <Button size="large" icon="ios-book" type="primary" shape="circle" style="margin-left:20px" @click="review()"></Button>
            </Tooltip>
            </div>
        </Card>
    </div>
</template> 
<script>
/**
 * content:{
 *     name: string // 标题 
 *     catalog: Array<object> // 目录 树结构
 *     author: string  // 作者
 *     abstract: string // 摘要
 *     sortNumber: string // 图分类号
 *     documentCode: string // 文献标识码
 *     articleCode: string // 文章编号码
 *     keyword: string // 关键词
 *     tabs: Array<tabObject>
 * }
 * tabObject:{
 *     label: string 
 *     tableConfig: {
 *     },
 *     pageConfig: {
 *         total: 
 *     }
 * }
 */
export default {
  name: 'Detail',
  props: {
    content:{
        type: Object,
        value:{
            name: '标题',
            catalog: [],
            author: '',
            abstract: '',
            sortNumber: '',
            documentCode: '',
            articleCode: '',
            keyword:'',
            tabs: []
        }
    }
  },
  methods: {
    show(pidx,cidx) {
        function skip(){
            const currentData = this.content.tableConfig.data[pidx] || [];
            const url = currentData[cidx].url || '';
            this.$router.push({name:url});
        }
        try{
            skip()
        }catch(err){
            console.log(err)
        }
    },
    download() {
        this.$emit('download',{})
    },
    review() {
        this.$emit('downlreviewoad',{})
    }
  },
  mounted () {

   
  }
}
</script>
