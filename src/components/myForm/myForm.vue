<style scoped>
    .table-form{
        background-color:#f7f8f9;
        padding:20px;
        margin-bottom:20px;
    }
</style>
<template>
    <div >
       <Row>
            <Col span="8">
                <baseForm  :formModel="form.formModel" :formConfig="form.formConfig" :formColumns="form.formColumns"></baseForm>
            </Col>
            <Col span="8" offset="1">
                <baseEventArea :events="events" ></baseEventArea>
            </Col>
        </Row>
        <div class="table-form" v-if="showMore">
            <baseForm  :formModel="form.formModel" :formConfig="form.moreFormConfig" :formColumns="form.moreFormColumns"></baseForm>
            <baseEventArea :events="form.moreEvents.concat(moreEvents)" ></baseEventArea>
        </div>
    </div>
</template> 
<script>
export default {
  name: 'myForm',
  props: {
    form: {
        type: Object,
        required: true,
        value: {
            showMore:false
        }
    }
  },
  computed: {
    
  },
  data(){
    const self = this;
    return {
        showMore:false,
        events: [
            {
                component: 'buttonEvent',
                name: '高级筛选',
                type: "text",
                shape: "circle",
                icon: "md-funnel",
                size: "large",
                event() {   
                    self.toggleMore()
                }
            }
        ],
        moreEvents: [
            {
                component: 'buttonEvent',
                name: '收起',
                shape: "circle",
                icon: "ios-arrow-up",
                style: {'margin-right':'20px'},
                event() {   
                    self.toggleMore(false)
                }
            }
        ]
    }
  },
  methods: {
    toggleMore(value){
        if(typeof value !=='undefined'){
            this.showMore = value;
        }else {
            this.showMore = !this.showMore
        }
    }
  }
}
</script>
