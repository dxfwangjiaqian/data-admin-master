<template>
  <detail :content="content" @download="download" @review="review"></detail>
</template>

<script>
import Detail from "_c/detail/index.js";
export default {
  name: "data_detail_index",
  components: {Detail},
  data() {
    const self = this;
    return {
      content: {
        name: "桃新品系‘保佳俊’果肉抗褐化生理机制研究",
        catalog: [
          {
            title: "parent 1",
            expand: true,
            disabled: true,
            children: [
              {
                title: "parent 1-1",
                expand: true,
                disabled: true,
                children: [
                  {
                    title: "leaf 1-1-1",
                    disabled: true,
                  },
                  {
                    title: "leaf 1-1-2",
                    disabled: true,
                  },
                ],
              },
              {
                title: "parent 1-2",
                expand: true,
                disabled: true,
                children: [
                  {
                    title: "leaf 1-2-1",
                    disabled: true,
                  },
                  {
                    title: "leaf 1-2-1",
                    disabled: true,
                  },
                ],
              },
            ],
          },
        ],
        author:
          "张佳俊，曹洪波，贾浩，李丹，陈海江 (河北农业大学园艺学院，河北保定071000)",
        abstract:
          "研究‘保佳俊’果实抗褐化特性，选用‘保佳俊’及与其成熟期相近的8个白肉桃品种(‘霞晖6号’、 ‘大久保’、 ‘保佳红’、 ‘京玉’、 ‘阿部白桃’、 ‘大团蜜露’、 ‘红岗山’、 ‘燕红’)，研究其果肉褐化度及与果肉褐变相关的生理生化指标。结果表明：供试品种中‘霞晖6号’褐变度最高， ‘保佳俊’褐变度显著低于其他品种。抗褐变的‘保佳俊’与不抗褐变的‘霞晖6号’、中度褐变的‘大久保’相比果实中总酚、类黄酮、丙二醛含量较低，并具有较低水平的多酚氧化酶(PPO)、苯丙氨酸解氨酶(PAL)活性，具有较高水平的过氧化物酶(POD)、超氧化物歧化酶和过氧化氢酶活性。通过不同品种果实褐变度与相关指标的相关性分析表明，总酚含量、PPO、PAL活性与褐变度呈极显著正相关(P<0．01)，类黄酮、丙二醛含量以及POD活性与褐变度呈显著正相关(P<0.05)。",
        sortNumber: "中S662.1 ",
        documentCode: "A",
        articleCode: "1002—6630(2015)18—0247—0",
        keyword: "桃；果肉褐化；生理指标",
        tabs: [
          {
            label: "相似文献",
            tableConfig: {
              columns: [
                {
                  title: "序号",
                  key: "name",
                },
                {
                  title: "作者",
                  key: "name",
                },
                {
                  title: "标注分类",
                  key: "name",
                },
                {
                  title: "发表时间",
                  key: "name",
                },
                {
                  title: "操作",
                  slot: "action",
                  width: 150,
                  align: "center",
                },
              ]
            },
            tableData: [],
            tablePage:{
              total:100,
              page:'1',
              change(page,idx){
                self.changePage(page,idx)
              }
            }
          },
          {
            label: "关联资料",
            tableConfig: {
              columns: [
                {
                  title: "序号",
                  key: "name",
                },
                {
                  title: "作者",
                  key: "name",
                },
                {
                  title: "标注分类",
                  key: "name",
                },
                {
                  title: "发表时间",
                  key: "name",
                },
                {
                  title: "操作",
                  slot: "action",
                  width: 150,
                  align: "center",
                },
              ]
            },
            tableData: [],
            tablePage:{
              total:100,
              page:'1',
              change(page,idx){
                self.changePage(page,idx)
              }
            }
          },
          {
            label: "相关作者文献",
            tableConfig: {
              columns: [
                {
                  title: "序号",
                  key: "name",
                },
                {
                  title: "作者",
                  key: "name",
                },
                {
                  title: "标注分类",
                  key: "name",
                },
                {
                  title: "发表时间",
                  key: "name",
                },
                {
                  title: "操作",
                  slot: "action",
                  width: 150,
                  align: "center",
                },
              ]
            },
            tableData: [],
            tablePage:{
              total:100,
              page:'1',
              change(page,idx){
                self.changePage(page,idx)
              }
            }
          }
        ],
      }
    };
  },
  methods: {
    download() {
        this.$emit('download',{})
    },
    review() {
        this.$emit('downlreviewoad',{})
    },
    changePage(page,idx) {
      
    }
  },
  mounted() {},
};
</script>

<style>
</style>
