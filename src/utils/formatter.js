export default {
	zf(val){
		if(Number(val) > 0){
			return "+" + (val||0);
		}else{
			return (val||0);
		}
	},
	abs(val){
		return Math.abs(Number((val||0)*1));
	},
	if(val,okMsg,failMsg){
		if(val){
			return okMsg;
		}else{
			return failMsg;
		}
	},
	fixed(val,count){

		let val1 = ""+(val||0)*1;

		if(val1.match(/[0-9.]+/)){
			return (val1*1).toFixed(count);
		}

		return val1;
	},
	iconUD(val){
		if(Number(val*1) >= 0){
			return "icon icon-up";
		}else{
			return "icon icon-down";
		}
	}
};