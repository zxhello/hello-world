
Ext.onReady(function() {
			Ext.QuickTips.init();
			Ext.form.Field.prototype.msgTarget = 'side';
			Ext.BLANK_IMAGE_URL = '../../../../global/lib/ext2.0/resources/images/default/s.gif';
			Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

			
			//select的option
			var deviceTypeStore = new Ext.data.SimpleStore({
				id: 'id',
				fields: [
						 {name: 'text'},
						 {name: 'type'}
						 ]
			});
			var deviceTypeData = [
								  ['MySQL数据库','type1'],
								  ['Orcal数据库','type2']
								  ];
			deviceTypeStore.loadData(deviceTypeData);
			
			
			//刚开始加载的数据源
			var DeviceAssetStore_store = new Ext.data.SimpleStore({
			id: 'id',
			fields: [
			   {name: 'id'},
			   {name: 'conectName'},
			   {name: 'DBname'},
			   {name: 'DBtype'},
			   {name: 'IP'},
			   {name: 'port'},
			   {name: 'user'},
			   {name: 'password'},
			   {name: 'createTime'},
			   {name: 'updateTime'}
			]
		});
			
		
		var deviceAssetData = [
							   [1,'设备1','安全接入网关','type1','1.1.1.1',2555,1,2,3,4],
							   [2,'设备2','安全接入网关','type1','1.1.1.1',2555,1,2,3,4]];
		DeviceAssetStore_store.loadData(deviceAssetData);

		
		
		
		
		
			var resetButton1 = new Ext.Action({
				text : '重置',
				handler : this.onReset,
				scope : this
			});	
			
			var updateButton1 = new Ext.Action({
			text : '查询',			
			handler : this.onUpdate,
			scope : this
				
			});
			
				
			var panel = new Ext.FormPanel(
		{ 
//          title : '平台基本信息',  
          border : false,  
          bodyStyle : 'padding: 5px5px5px5px; background-color: transparent;margin:5px5px5px5px;',  
          labelAlign : 'center',  
          buttonAlign:'center',
          layout: 'fit',
		  height:400,
          msgTarget : 'side',          
          buttons : [
			
			//	resetButton1,updateButton1
			],
          items : [{
	           		xtype : 'fieldset',
	              //  title : '基本情况', 
	                
	                layout : 'column',
	                autoHeight: true,
	              	items : [{xtype:'panel',columnWidth: 1, layout: 'column',border:false,defaults:{
						xtype : 'textfield',
					   	msgTarget : 'side'
					   	
					}, items: [{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:75, items:[
					{ 
	              	
					   id: 'name1',
	               	   xtype : 'textfield',
	                   fieldLabel : '同步连接名',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:60, items:[
					{ 
	              	
					   id: 'name2',
	               	   xtype : 'textfield',
	                   fieldLabel : '系统库名',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:50, items:[
					{ 
	              	
					   id: 'name3',
	               	   xtype : 'textfield',
	                   fieldLabel : 'IP地址',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:35, items:[
					{ 
	              	
					   id: 'name4',
	               	   xtype : 'textfield',
	                   fieldLabel : '端口',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]}
					
							/*,{xtype:'panel', columnWidth: 0.08, layout: 'form', border:false, items:[{  
							  xtype : 'button', 
							  text : '重置',
							
							
						//	  width : '80%'
	 
	               }]},{xtype:'panel', columnWidth: 0.08, layout: 'form', border:false, items:[{  
							  xtype : 'button', 
							  text : '查询',
							
						//	  width : '80%'
	 
	               }]}*/
           
				   ]},{xtype:'panel',columnWidth: 1, layout: 'column',border:false,defaults:{
						xtype : 'textfield',
					   	msgTarget : 'side'
					   	
					}, items: [{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:75, items:[
					{ 
	              	
					   id: 'name11',
	               	   xtype : 'textfield',
	                   fieldLabel : '用户名',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:60, items:[
					{ 
	              	
					   id: 'name21',
	               	   xtype : 'textfield',
	                   fieldLabel : '密码',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:75, items:[{  
	               	 
					   xtype : 'combo',
					   readOnly: true,
						anchor : '90%',
						msgTarget : 'side',
						allowBlank: false,
						emptyText : '<--请选择-->',
						fieldLabel: '数据库类型',
						hiddenName: 'type',
						store : deviceTypeStore,
						valueField : 'type',
						displayField : 'text',
						mode : 'local',						
						triggerAction: 'all',
					//	value  : deviceType,
						 
						id : 'status'
	 
	               }]}
		
				   ]},{xtype:'panel',columnWidth: 1, layout: 'border',border:false, bodyStyle : ' background-color: transparent;',   items: [
					{ xtype:'panel',layout: 'column',
						 items:[{  
							  xtype : 'button', 
							  text : '更新',
								columnWidth: 0.2
							
							
						//	  width : '80%'
	 
	               },{  
							  xtype : 'button', 
							  text : '重置',
								  columnWidth: 0.2
							
							
						//	  width : '80%'
	 
	               },{  
							  xtype : 'button', 
							  text : '测试连接',
								  columnWidth: 0.2
							
							
						//	  width : '80%'
	 
	               },{  
							  xtype : 'button', 
							  text : '数据同步',
								  columnWidth: 0.2
							
							
						//	  width : '80%'
	 
	               }
				   ]}
		
				   ]}]
          		}]
		});
			
		var grid = new Ext.grid.GridPanel({
		store : DeviceAssetStore_store,
		title : '数据库信息列表',

		columns : [
		           new Ext.grid.RowNumberer(),
		           {
		        	   header : '编号',
		        	   dataIndex : 'id',
		        	   sortable : true,
		        	   hidden : true
		           }, {
		        	   header : '同步连接名',
		        	   dataIndex : 'conectName',
		        	   sortable : true
		           }, {
		        	   header : '数据库名',
		        	   dataIndex : 'DBname',
		        	   /*renderer : function(value){
			return storeText(deviceType,value);
		},*/
		        	   sortable : true
		           }, {
		        	   header : '数据库类型',
		        	   dataIndex : 'DBtype',
		        	   sortable : true
		           }, {
		        	   header : 'IP地址',
		        	   dataIndex : 'IP',
		        	   sortable : true
		           }, {
		        	   header : '端口',
		        	   dataIndex : 'port',
		        	   sortable : true
		           },{
		        	   header : '用户名',
		        	   dataIndex : 'user',
		        	   sortable : true
		           },{
		        	   header : '密码',
		        	   dataIndex : 'password',
		        	   sortable : true
		           },{
		        	   header : '创建时间',
		        	   dataIndex : 'createTime',
		        	   sortable : true
		           },{
		        	   header : '更新时间',
		        	   dataIndex : 'updateTime',
		        	   sortable : true
		           }]
		          
	});
			
			
			
			// 布局
			var mainLayout = new Ext.Viewport( {
				layout : "fit",
				items : [ {
					layout : 'border',
					border : false,
					bodyStyle : 'background-color:#d9ede8',
					items : [{
						region : 'north',
						height:110,
						split : true,
						layout : "fit",
						items : [

						panel ]

					}, {
						region : 'center',

						split : true,
						layout : "fit",
						items : [

						grid ]

					} ]
				} ]
			});
			
			
		/*	
			var mainLayout = new Ext.Viewport( {
	
	
			
			layout : 'border',
			items : [{
				region : 'center',
				layout : 'border',
				items : [panel,grid]
			}]

});*/
		
			
});					