import eventBus from"../core/utils/event-bus";Component({externalClasses:["l-class","l-disabled-class"],properties:{checked:{type:null,optionalTypes:[Boolean,String,Number],value:!1},size:{type:String,value:"38rpx"},color:{type:String,value:"#fff"},selectColor:{type:String,value:"#3963BC"},activeValue:{type:null,value:!0},inactiveValue:{type:null,value:!1},disabled:{type:Boolean,value:!1}},methods:{onClick(){const{activeValue:e,inactiveValue:t,disabled:a}=this.data;if(a)return;const l=this.data.checked===e?t:e;this.setData({checked:l}),this.triggerEvent("linchange",{checked:l}),eventBus.emit("lin-form-change-"+this.id,this.id)},getValues(){return this.data.checked},reset(){this.setData({checked:this.data.inactiveValue})}}});