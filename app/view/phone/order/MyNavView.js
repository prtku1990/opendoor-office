Ext.define('TheOpenDoor.view.phone.order.MyNavView', {
    extend: 'Ext.Container',
    requires: [
    	'TheOpenDoor.view.phone.order.DateTimeView'
    ],
    config: {
        layout : 'fit',
        id: "OpenDoorMyNavView",
        items:[{
        	xtype: 'BaseNavigationView',
        	itemId: 'orderStart',
        	startView: 'DateTimeView'
        }]           
    }
});
