Ext.define('TheOpenDoor.view.phone.order.AddressView', {
	extend: 'Ext.dataview.DataView',
	requires:['TheOpenDoor.view.phone.order.AddressItem'],
    config: {
    	itemId: 'addressView',
        id: "OpenDoorAddressView",
    	defaultType: 'AddressItem',
        store: 'AddressGetStore',
        scrollable: null,
        useComponents : true,
        inline: {
            wrap: true
        },
    }
    // config: {
    //     layout : {
    //         type : 'vbox',
    //         align : 'center',
    //         pack : 'center'
    //     },
    //     cls: 'order-view',
    //     items:[{
    //         xtype: 'container',
    //         layout : {
    //             type : 'vbox',
    //             align : 'center',
    //             pack : 'center'
    //         },
    //         cls: 'dataview-outercontainer',
    //         items:[{
    //             xtype: 'dataview',
    //             itemId: 'addressDataView',
    //             width: '100%',
    //             height: '100%',
    //             scrollable: true,
    //             cls: '',
    //             store: 'AddressGetStore',
    //             itemTpl: new Ext.XTemplate('<tpl>',
    //                     '<div>',
                            
    //                     '</div>',
    //                 '</tpl>')
    //         }]
    //     }]           
    // }
});
