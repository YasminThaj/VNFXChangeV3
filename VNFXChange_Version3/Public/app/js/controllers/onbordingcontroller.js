routerApp.controller('onbordingcontroller',['$scope', '$sce','$http',function(scope,sce,http)
{
	/* $scope.url = $sce.trustAsResourceUrl('http://10.168.255.252:8080/VNF_AUTO_KVM/displayVm.action');
    $scope.changeIt = function () 
	{
        $scope.url = $sce.trustAsResourceUrl('https://www.google.co.in/');
	} */
	
	scope.diskformat='';
	scope.container='';
	scope.protocol='';
	scope.direction='';
	scope.onbrdimgName='';
	scope.groupName='';
	scope.ether='';
	scope.availablezone='';
	scope.imagename='';
	scope.servertype='';
	scope.filename='';
	scope.offboardvtype='';
	scope.oppathname='Core VNF Onboard';
	scope.onpath='vnfgonboard.html';
	scope.vnfNames='';
	scope.vtype='';
	scope.offboardMessage='';
	scope.gotoonbrd=function(valoh){
		scope.onpath=valoh;		
		if(valoh=='vnfgonboard.html'){scope.oppathname="Core VNF Onboard"}else{scope.oppathname="Core VNF Onboard"}
		
	}
	scope.gotofun1=function(onpath){
		console.log("onpath---------------"+ onpath)
	scope.nval=true;
	scope.isDisabled = false;
		scope.onpath=onpath;

scope.viewDisplay = false;		
	}
	scope.onvnftypechange=function(vtype){

		console.log(vtype);
		scope.vtype=vtype;
		var cvtype=vtype.split(',');
		console.log("df--"+scope.vtype)
	}
	scope.servrtypechange=function(servertype){
		scope.servertype=servertype;
	console.log("df--"+scope.servertype)		
	}
	
	scope.onimntypechange=function(ignam){
		scope.onbrdimgName=ignam;
	console.log("df--"+scope.onbrdimgName)		
	}
	
	scope.ongrptypechange=function(grpnam){
		scope.groupName=grpnam;
	console.log("df--"+scope.groupName)		
	}
	
	scope.diskformatchange=function(diskformat){
		scope.diskformat=diskformat;
	console.log("df--"+scope.diskformat)		
	}
	scope.containertypechange=function(container){
		scope.container=container;
	console.log("df--"+scope.container)		
	}
	scope.Protocolchange=function(protocol){
		scope.protocol=protocol;
	console.log("df--"+scope.protocol)		
	}
	scope.Directiontypechange=function(direction){
		scope.direction=direction;
	console.log("df--"+scope.direction)		
	}
	scope.Etherftypechange=function(ether){
		scope.ether=ether;
	console.log("df--"+scope.ether)		
	}
	scope.availablezonetypechange=function(availablezone){
		scope.availablezone=availablezone;
	console.log("df--"+scope.availablezone)		
	}
	scope.uploadImage = function(){ 
       scope.imagename = event.target.files[0].name;
	}
	scope.uploadfile=function(){
	   scope.filename = event.target.files[0].name;
    }
	
	scope.onboardfile=function(inname){
		
		var flvr=scope.filename;		
		var imgn=scope.imagename;		
		var VnfNam=inname;
		var servertyp=scope.servertype;
		var diskfor=scope.diskformat;
		var contype=scope.container;
		var proto=scope.protocol;
		var dirc=scope.direction;
		var ethertype=scope.ether;
		var availzone=scope.availablezone;
		var vnftype=scope.vtype;
		var grpNam=scope.groupName;
		var imgNa=scope.onbrdimgName;
		var cdvnftype=vnftype.split(",");
		
		scope.searchButton ='searching';
		
		http.get("http://localhost:8080/vnfonboardimage1")
		.then(function (response) {
		console.log("executedata------------------"+response.data);
		scope.nval=false;
		});
		setTimeout(function () {
		    scope.$apply(function(){
			scope.searchButton="false";
			console.log("stoped----")
			//scope.names = response.data;
			//scope.report = response.report;
			
            scope.viewDisplay = true;			
			
		document.getElementById('rep').className='active';
		document.getElementById('test').className='';
		scope.onpath='onboardreports.html';
		  });
		}, 660000);	
		
		
		http({
			url: "http://localhost:8080/vnfonboardimage",
			method:"POST",
			params:{Vnfname:VnfNam,onboard_image:imgn,onboard_flavour:flvr,servertp:servertyp,Diskformat:diskfor,
			        Container:contype,protoCol:proto,direction:dirc,etherty:ethertype,availZon:availzone,vnftypename:cdvnftype[1],vnftypeid:cdvnftype[0],imGnam:imgNa,Grpnam:grpNam}
			
			}).then(function (response) {
			var odata=JSON.stringify(response.data);
			console.log("----------"+ response.data);
			scope.nval=false;
			
			}); 
	}
	
	scope.offboardVnftypeChange=function(selectedovnftype){		
		
		//var vnftype=scope.selectedovnftype;
		//var cdvnftype=vnftype.split(",");
		//console.log(flvr+imgn+cdvnftype[0]+cdvnftype[1]+inname);
		var VnfTypeId=1;
			scope.offboardvtype=selectedovnftype;
				
		http({
			url: "http://localhost:8080/vnfOffboardNames",
			method:"GET",		
			params:{VnfTypeId:VnfTypeId}
			
			}).then(function (response) {
				
				console.log(JSON.stringify(response.data));	
				var data=JSON.stringify(response.data);					
				var ojdata=JSON.parse(data);				
				scope.vnfNames = ojdata;
				
			
	}); 
			
	
	}
	
	scope.offboardVnftypeChange=function(selectedovnftype){		
		
		//var vnftype=scope.selectedovnftype;
		//var cdvnftype=vnftype.split(",");
		//console.log(flvr+imgn+cdvnftype[0]+cdvnftype[1]+inname);
		var VnfTypeId=1;
			scope.offboardvtype=selectedovnftype;
				
		http({
			url: "http://localhost:8080/vnfOffboardNames",
			method:"GET",		
			params:{VnfTypeId:VnfTypeId}
			
			}).then(function (response) {
				
				console.log(JSON.stringify(response.data));	
				var data=JSON.stringify(response.data);					
				var ojdata=JSON.parse(data);				
				scope.vnfNames = ojdata;
				
			
	}); 
	}
	
	scope.offboardfile=function(offboardvtype,selectedoVNFName){		
		scope.searchButtonview ='Serachingg';
		console.log("1234");
		var VnfName=selectedoVNFName;
		//console.log(JSON.stringify(VnfName));	
		 var vnftype=offboardvtype;
		var VnfTypeId=vnftype.split(",");
		console.log(VnfName+VnfTypeId[0]+VnfTypeId[1]);
		//var VnfTypeId=1;
		//var VnfName="Demo1";
		console.log("controller");
		
		http({
			url: "http://localhost:8080/vnfOffboardView",
			method:"GET",
			//params:{vnfname,vnftypename:cdvnftype[1],vnftypeid:cdvnftype[0]}
			params:{VnfName:VnfName,VnfTypeId:VnfTypeId[0]}
			
			}).then(function (response) {
				
				console.log(JSON.stringify(response.data));	
				var data=JSON.stringify(response.data);	
				var ojdata=JSON.parse(data);
				if(data.indexOf('Failed')>=0){
				
				scope.offboardFileFailure = true;
				
			}
			else{ 
				scope.offboardFileSuccess = true;
			} 				
				scope.searchButtonview ='stop';
				scope.offboardMessage = ojdata;
			    
	}); 
	}
	
}]);