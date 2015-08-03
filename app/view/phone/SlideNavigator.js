Ext.define("TheOpenDoor.view.phone.SlideNavigator", {
	extend: 'Ext.ux.slidenavigation.View',
	requires: [
	    'Ext.Container',
	    'Ext.MessageBox',
	    'Ext.Panel',
	    'Ext.Toolbar',
	    'Ext.ux.slidenavigation.View',
	    'Ext.event.publisher.Dom',
	],
	           slideNavigatorItemArray : [],
	           config: {
	        	   fullscreen: true,
	        	   slideSelector: false,
	        	   containerSlideDelay: 10,
	        	   selectSlideDuration: 200,
	        	   itemMask: true,
	        	   layout : 'fit',
	        	   slideButtonDefaults: {
	        		   selector: 'toolbar'
	        	   },
	        	   cls: 'slider-cls',
	        	   list: {
	        		   maxDrag: 250,
	        		   width: 250,

	        		   items: [{
	        			   xtype: 'toolbar',
	        			   itemId: 'sliderToolbar',
	        			   docked: 'top',
	        			   ui: 'plain',  
	        			   cls: 'slide-navigator-toolbar',
	        			   tpl: '<div><div class="user-logo-div"><img src="resources/images/user.png" class="slider-icon"></div><div class="user-label" style="line-height: 4rem; color: white; font-family: TheOpenDoorLight; display: inline">{userName}</div><div style="float: right;line-height: 4.5rem;margin-right: 0.5rem;"><img src="resources/images/icons/next.png" class="arrow-slider-image"></div></div>',
	        			   listeners:{
	        			   		tap: {
			                        element: 'element',
			                        fn: function() {
			                            Ext.Viewport.remove('SlideNavigator',true);
                        				Ext.Viewport.setActiveItem('ProfileView',true);

			                        }
			                    }
	        			   }   		   	
	        		   }]

	        	   },

	        	   listPosition: 'left',

	        	   items: []
	           },
	           
	           initialize: function(){
	        	   
	        	   var me = this;
	        	   
	        	   me.slideNavigatorItemArray = [
	        	   // {
	        		   
	        		  //  //title : '<div><div class="user-logo-div"><img src="resources/images/user.png" class="slider-icon"></div><div class="user-label" id="profileNameLabel" style="line-height: 4rem; color: white; font-family: TheOpenDoorLight; display: inline">'+{userName}+'</div><div style="float: right;line-height: 4.5rem;margin-right: 0.5rem;"><img src="resources/images/icons/next.png" class="arrow-slider-image"></div></div>',
	        		  //  title: "",
	        		  //  titlename : 'ProfilePage',
	        		  //  slideButton: true,
	        		  //  cls: 'newUI-header-style',
	        		  //  id: 'slideNavigatorItemArrayFirst',
	        		  //  items: [{
	        			 //   xtype: 'toolbar',
	        			 //   docked: 'top',
	        			 //   title: '<image src="resources/images/logo.png" class="center-toolbar-image">',
	        			 //   cls: 'home-slider-toolbar',
	        			 //   ui:'null'
	        		  //  	},{
	        			 //   xtype: 'ProfileView',
	        			 //   maskOnOpen: true
	        		  //  }]
	        	   // },
	        	   {
	        		   
	        		   title : '<div class="list-items"><img style="float: left;margin-left: 0.5rem;" src="resources/images/slider/all-orders.png" width="34"/></div><div class="slider-label"><span class="text">&nbsp;&nbsp;&nbsp Book Order</span></div>',
	        		   titlename : 'OrderPage',
	        		   slideButton: true,
	        		   cls: 'newUI-header-style',
	        		   items: [{
	        			   xtype: 'toolbar',
	        			   docked: 'top',
	        			   title: '<image src="resources/images/logo.png" class="center-toolbar-image">',
	        			   cls: 'home-slider-toolbar',
	        			   ui:'null'
	        		   	},{
	        			   xtype: 'OrderPageView',
	        			   maskOnOpen: true
	        		   }]
	        	   },{
	        	   		title : '<div class="list-items"><img style="float: left;margin-left: 0.5rem;" src="resources/images/slider/all-orders.png" width="34"/></div><div class="slider-label"><span class="text">&nbsp;&nbsp;&nbsp All Orders</span></div>',
	        		   titlename : 'All Orders',
	        		   slideButton: true,
	        		   cls: 'newUI-header-style',
	        		   items: [{
	        			   xtype: 'toolbar',
	        			   docked: 'top',
	        			   title: '<image src="resources/images/bulletpoint.jpg" class="center-toolbar-image">',
	        			   cls: 'home-slider-toolbar',
	        			   ui:'null'
	        		   },{
	        			   xtype: 'AllOrderView',
	        			   maskOnOpen: true
	        		   }]
	        	   },
	        	   {
	        	   		title : '<div class="list-items"><img style="float: left;margin-left: 0.5rem;" src="resources/images/slider/info.png" width="34"/></div><div class="slider-label"><span class="text">&nbsp;&nbsp;&nbsp About Us</span></div>',
	        		   titlename : 'About Us',
	        		   slideButton: true,
	        		   cls: 'newUI-header-style',
	        		   items: [{
	        			   xtype: 'toolbar',
	        			   docked: 'top',
	        			   title: '<image src="resources/images/bulletpoint.jpg" class="center-toolbar-image">',
	        			   cls: 'home-slider-toolbar',
	        			   ui:'null'
	        		   },{
	        			   xtype: 'ProfileView',
	        			   maskOnOpen: true
	        		   }]
	        	   },{
	        	   		title : '<div class="list-items"><img style="float: left;margin-left: 0.5rem;" src="resources/images/slider/call.png" width="34"/></div><div class="slider-label"><span class="text">&nbsp;&nbsp;&nbsp Contact Us</span></div>',
	        		   titlename : 'Contact Us',
	        		   slideButton: true,
	        		   cls: 'newUI-header-style',
	        		   items: [{
	        			   xtype: 'toolbar',
	        			   docked: 'top',
	        			   title: '<image src="resources/images/bulletpoint.jpg" class="center-toolbar-image">',
	        			   cls: 'home-slider-toolbar',
	        			   ui:'null'
	        		   },{
	        			   xtype: 'ProfileView',
	        			   maskOnOpen: true
	        		   }]
	        	   },{
	        		   title : '<div class="list-items"><img style="float: left;margin-left: 0.5rem;" src="resources/images/slider/logout.png" width="34"/></div><div class="slider-label"><span class="text">&nbsp;&nbsp;&nbsp Log Out</span></div>',
	        		   titlename : 'logout',
	        		   slideButton: true,
	        		   handler: function() {
	        			   var me = this;
	        			   Ext.Msg.confirm('', 'Are you sure you want to logout?',  function(btn,text)
	        				{
	        				   if(btn === 'yes')
	        				   {
	        					   this.fireEvent('logoutyes', this);
	        				   }else{
	        					   this.fireEvent('logoutno', this);
	        				   }
	        				}, this);	        			   
	        		   }
	        	   }];	        	   
	        	   me.addItems(me.slideNavigatorItemArray);
	        	   
	        	   me.callParent();
	        	   me.down('#sliderToolbar').setData({
	        		   userName: localStorage.getItem('userName')
	        	   });
	        	   
	           }
});
