Ext.define("TheOpenDoor.view.component.TimePickerField", {
    extend: "Ext.field.Text",
    xtype: "TimePickerField",
	config:{
			value:'',
			picker:'',
			readOnly:true,
			allowTap:true,
			listeners:{
				element:'element',
				tap:function(me, e, eOpts){
					if(me.getTarget().id == "timePickerId"){
					 this.getPicker().showBy(this,'tr-br?');
					}
					
				}
				
			}
	},
    constructor: function (config) {

        var i,
            stringVal,
			timeArray=[],
			stringArray,
            timePicker = this,
			pickerCls=config.pickerCls,
			pickerHeight=config.pickerHeight;

        this.picker = Ext.create("Ext.Picker", {
            hidden: true,
            zIndex: 9999,
			cls:pickerCls,
			height:pickerHeight,
			useTitles: true,
			hideOnMaskTap:true,
			showAnimation:'',
			hideAnimation:'',
			doneButton: false,
			cancelButton: false,
			id:'timePickerCreate',
    		slots : [{
	             name:'time',
	             store: Ext.getStore('TimeStore'),
	             displayField: 'start_time',
	             valueField:'start_time',
	             align:'center',
	             title: ' '
    		}],

            listeners: {
				
				painted:function(){
					var timeStore=Ext.getStore('TimeStore');
					timeStore.filter('available',true);
					var value=timePicker.getValue();
					this.setValue(value);
				},
                pick: function (picker, values) {
					timePicker.setValue(values.time);
					picker.hide();
					//Ext.Viewport.remove(picker);
                }
            }
        });
		
		var viewportPicker=Ext.Viewport.add(this.picker); 
		config.picker=viewportPicker;
		var me=this;
        this.callParent(arguments);
    }
});