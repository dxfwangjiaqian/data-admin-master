export default {
    props: {
        // 事件对象
        item: {
            type: Object,
            required: true
        },
        
        /**
         * 事件主体，非必传  可在底层事件处理后进行回调
        */
        eventBody: {
            type: Object
        }
    },
    computed: {
        authArr () {
          return this.$store.getters.buttonList;
        },
    },
    methods: {
    
        showDropDown(item){
            return item.choices.some(option=>{
                return this.show(option)
            })
        },
        show(item){
            if(item.showUrl!==undefined){
                return  this.authArr.some(v=>v==item.showUrl);
            }else{
                return true
            }
        },
        getName(item){
            if (item.calNameFuc) {
                return item.calNameFuc(this.eventBody);
            }
            if(item.stateBtn){
                return this.eventBody.trueName?this.eventBody.trueName:item.name;
            }else{
                return item.name;
            }
        },
        getDisable(item){
            if(item.switchEnabledDisabled){
                if(item.disabledName){
                    return  this.eventBody[item.disabledName]
                }else{
                    return this.eventBody.disabled;
                }
            }else{
                return false;
            }
        },
        getBtnClass(item){
            return item.class?item.class:'td-btn-shadow';
        },
        event(item) {
            if (this.eventBody) {   // 如果有事件主体，将主体携带进参数
                item.event(this.eventBody);
                return;
            }
            item.event();
        },
        getShowHidden(){

        },
        getHidden(item){
            if(item.switchHiddenShow){
                return this.eventBody.isShow
            }else{
                return item.hidden!==undefined?!item.hidden:true;
            }
            
        },
    },
    mounted() {
        if(this.item.fetchBadgeCount) {
            this.item.fetchBadgeCount();
        }
    }
}