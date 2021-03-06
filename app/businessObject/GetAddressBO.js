
Ext.define('TheOpenDoor.businessObject.GetAddressBO', {
	extend: 'TheOpenDoor.businessObject.BaseBO',
	requires: [
	           'Ext.Ajax'
	     ],

	controllerObj: null,
	successCb: null,
	userId: null,
	failureCb: null,
	inputDetails: null,

	constructor: function (cObj) {
		if (Ext.isDefined (cObj)) {
			this.controllerObj = cObj;
		}
		return this;
	},
	doGetAddress: function(successCb, failureCb){
        this.successCb = successCb;
        this.failureCb = failureCb;
        this.inputDetails = {
        };
        this.doGetAddressAjaxRequest();
	},

	doGetAddressAjaxRequest: function () {
    	/* Call Login API */
        if(!isOnLine()) {
            hideSpinner();
            AppMessage.showMessageBox(4,null,null,localeString.noInternetConnection);
            return;
        }
        this.doSendAjax({
            url:BaseUrl.baseUrl+'users/'+window.user_Id+'/address',
            //url:BaseUrl.baseUrl+'users/5/address',
            method:'GET',
			disableCaching: false ,
            jsonData: this.inputDetails,
            success: this.onGetAddressSuccess,
            failure: this.onGetAddressFailure,
            scope: this
        });        
    },

    onGetAddressSuccess: function(responseObj, opts){
    	try{
        	var addressGetStore = Ext.getStore('AddressGetStore');
        	var decodedObj = (responseObj.responseText && responseObj.responseText.length) ?  Ext.decode (responseObj.responseText) : null;
            if (Ext.isObject(decodedObj)&& decodedObj.addresses != null) {
                addressGetStore.removeAll();
                addressGetStore.addToStore(decodedObj.addresses);
                TheOpenDoor.app.getController('OrderStartController').handleGetAddressSucess();
                hideSpinner(); 	
    	    }
    	}catch(e){
			var errorText = localeString.errorMsg_defaultFailure;
			hideSpinner();
			//Display Error Message
			showErrorDialog(false, false, errorText);
            hideSpinner();
		}
    },

    onGetAddressFailure: function(responseObj, opts){
    	var decodedObj = (responseObj.statusText);
        errorHandled = genericErrorCheck(responseObj, false);
        if(!errorHandled){
            var errorText = "Error";
            AppMessage.showMessageBox(4,null,null,localeString.errorInGettingResponse);
            hideSpinner();
        }
        hideSpinner();
    }
});
