
Ext.onReady(function() {
			Ext.QuickTips.init();
			Ext.form.Field.prototype.msgTarget = 'side';
			Ext.BLANK_IMAGE_URL = '../../../../global/lib/ext2.0/resources/images/default/s.gif';
			Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

			
			//select��option
			var deviceTypeStore = new Ext.data.SimpleStore({
				id: 'id',
				fields: [
						 {name: 'text'},
						 {name: 'type'}
						 ]
			});
			var deviceTypeData = [
								  ['MySQL���ݿ�','type1'],
								  ['Orcal���ݿ�','type2']
								  ];
			deviceTypeStore.loadData(deviceTypeData);
			
			
			//�տ�ʼ���ص�����Դ
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
							   [1,'�豸1','��ȫ��������','type1','1.1.1.1',2555,1,2,3,4],
							   [2,'�豸2','��ȫ��������','type1','1.1.1.1',2555,1,2,3,4]];
		DeviceAssetStore_store.loadData(deviceAssetData);

		
		
		
		
		
			var resetButton1 = new Ext.Action({
				text : '����',
				handler : this.onReset,
				scope : this
			});	
			
			var updateButton1 = new Ext.Action({
			text : '��ѯ',			
			handler : this.onUpdate,
			scope : this
				
			});
			
				
			var panel = new Ext.FormPanel(
		{ 
//          title : 'ƽ̨������Ϣ',  
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
	              //  title : '�������', 
	                
	                layout : 'column',
	                autoHeight: true,
	              	items : [{xtype:'panel',columnWidth: 1, layout: 'column',border:false,defaults:{
						xtype : 'textfield',
					   	msgTarget : 'side'
					   	
					}, items: [{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:75, items:[
					{ 
	              	
					   id: 'name1',
	               	   xtype : 'textfield',
	                   fieldLabel : 'ͬ��������',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:60, items:[
					{ 
	              	
					   id: 'name2',
	               	   xtype : 'textfield',
	                   fieldLabel : 'ϵͳ����',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:50, items:[
					{ 
	              	
					   id: 'name3',
	               	   xtype : 'textfield',
	                   fieldLabel : 'IP��ַ',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:35, items:[
					{ 
	              	
					   id: 'name4',
	               	   xtype : 'textfield',
	                   fieldLabel : '�˿�',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]}
					
							/*,{xtype:'panel', columnWidth: 0.08, layout: 'form', border:false, items:[{  
							  xtype : 'button', 
							  text : '����',
							
							
						//	  width : '80%'
	 
	               }]},{xtype:'panel', columnWidth: 0.08, layout: 'form', border:false, items:[{  
							  xtype : 'button', 
							  text : '��ѯ',
							
						//	  width : '80%'
	 
	               }]}*/
           
				   ]},{xtype:'panel',columnWidth: 1, layout: 'column',border:false,defaults:{
						xtype : 'textfield',
					   	msgTarget : 'side'
					   	
					}, items: [{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:75, items:[
					{ 
	              	
					   id: 'name11',
	               	   xtype : 'textfield',
	                   fieldLabel : '�û���',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:60, items:[
					{ 
	              	
					   id: 'name21',
	               	   xtype : 'textfield',
	                   fieldLabel : '����',
					  anchor : '90%',
	                   name : 'name'
				
	 
	               }]},{xtype:'panel', columnWidth: 0.25, layout: 'form', border:false, labelWidth:75, items:[{  
	               	 
					   xtype : 'combo',
					   readOnly: true,
						anchor : '90%',
						msgTarget : 'side',
						allowBlank: false,
						emptyText : '<--��ѡ��-->',
						fieldLabel: '���ݿ�����',
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
							  text : '����',
								columnWidth: 0.2
							
							
						//	  width : '80%'
	 
	               },{  
							  xtype : 'button', 
							  text : '����',
								  columnWidth: 0.2
							
							
						//	  width : '80%'
	 
	               },{  
							  xtype : 'button', 
							  text : '��������',
								  columnWidth: 0.2
							
							
						//	  width : '80%'
	 
	               },{  
							  xtype : 'button', 
							  text : '����ͬ��',
								  columnWidth: 0.2
							
							
						//	  width : '80%'
	 
	               }
				   ]}
		
				   ]}]
          		}]
		});
			
		var grid = new Ext.grid.GridPanel({
		store : DeviceAssetStore_store,
		title : '���ݿ���Ϣ�б�',

		columns : [
		           new Ext.grid.RowNumberer(),
		           {
		        	   header : '���',
		        	   dataIndex : 'id',
		        	   sortable : true,
		        	   hidden : true
		           }, {
		        	   header : 'ͬ��������',
		        	   dataIndex : 'conectName',
		        	   sortable : true
		           }, {
		        	   header : '���ݿ���',
		        	   dataIndex : 'DBname',
		        	   /*renderer : function(value){
			return storeText(deviceType,value);
		},*/
		        	   sortable : true
		           }, {
		        	   header : '���ݿ�����',
		        	   dataIndex : 'DBtype',
		        	   sortable : true
		           }, {
		        	   header : 'IP��ַ',
		        	   dataIndex : 'IP',
		        	   sortable : true
		           }, {
		        	   header : '�˿�',
		        	   dataIndex : 'port',
		        	   sortable : true
		           },{
		        	   header : '�û���',
		        	   dataIndex : 'user',
		        	   sortable : true
		           },{
		        	   header : '����',
		        	   dataIndex : 'password',
		        	   sortable : true
		           },{
		        	   header : '����ʱ��',
		        	   dataIndex : 'createTime',
		        	   sortable : true
		           },{
		        	   header : '����ʱ��',
		        	   dataIndex : 'updateTime',
		        	   sortable : true
		           }]
		          
	});
			
			
			
			// ����
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