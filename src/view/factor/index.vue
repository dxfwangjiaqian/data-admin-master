<style scoped>
    .table-box .table-page-box{
        margin-top:20px;
        text-align: center;
    }
    h4{
    margin-bottom: 10px;;
    }
</style>
<template>
  <div>
    <Card class="table-box">
        <Form :model="formItem" :label-width="0">
            <FormItem >
                <Col span="10">
                    <Input v-model="formItem.name3" placeholder="请输入" search></Input>
                </Col>
            </FormItem>
            <FormItem label="">
                <CheckboxGroup v-model="formItem.checkbox">
                    <Checkbox label="1">树形</Checkbox>
                    <Checkbox label="2">栽培密度</Checkbox>
                </CheckboxGroup>
            </FormItem>
        </Form>
        <Row :gutter="20" style="margin-top: 10px;">
            <i-col :md="24" :lg="12" style="margin-bottom: 20px;">
                <Card shadow>
                    <chart-pie style="height: 300px;" :value="pieData" text="研究频次分析"></chart-pie>
                </Card>
            </i-col>
            <i-col :md="24" :lg="12" style="margin-bottom: 20px;">
                <Card shadow>
                    <chart-bar style="height: 300px;" :value="barData" text="近三年研究趋势分析"/>
                </Card>
            </i-col>
        </Row>
        <Card shadow title="分析结果">
                关于搜索内容的结论性展示。问题类型展示最接近结论；标注检索展示标注相关领域分析结果，包括研究频次、分布，不同细分方向影响因素及定性分析，最新研究方向展示
        </Card> 
        <Card shadow title="关联详情">
            <Table border :columns="columns" :data="tableData">
                <template #action="{ row, index }">
                    <Button type="primary" size="small"  @click="show(index)">查看详情</Button>
                </template>
            </Table>
            <div class="table-page-box">
                <Page :total="100" show-sizer class="table-page"/>
            </div>
        </Card>
    </Card>
  </div>
</template>

<script>
import { ChartPie, ChartBar } from '_c/charts'
export default {
  name: 'factor_mining_page',
  components: {
    ChartPie,
    ChartBar
  },
  data () {
    return {
      formConfig:[
        {
            label:'关键字',
            valuename:'name2'
        },
        {
            label:'作者',
            valuename:'name4'
        },
        {
            label:'文献来源',
            valuename:'name5'
        },
        {
            label:'摘要',
            valuename:'name6'
        },
        {
            label:'发表时间',
            valuename:'name8'
        },
        {
            label:'标准分类',
            valuename:'name7'
        }
      ],
      formItem: {
        name: "",
        checkbox:['1']
      },
      columns: [
        { title: '序号', key: 'name1', sortable: true },
        { title: '文献名称', key: 'name2' },
        { title: '实验材料', key: 'name3' },
        { title: '核心结果', key: 'name4' },
        { title: '核心结论', key: 'name5' },
        {
            title: '操作',
            slot: 'action',
            width: 200,
            align: 'center'
        }
      ],
      tableData: [],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  methods: {
    show (){
        this.$router.push({
            name:'knowledge_detail_index'
        })
    }
  },
  mounted () {
    this.tableData = [{name1:"name1",name2:"name2",name3:"name3",name4:"name4",name5:"name5",name6:"name6",name7:"name7",name8:"name8"}]

    
  }
}
</script>

<style>

</style>
