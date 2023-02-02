export function Calculate(arg:string | number):any {
	if(typeof arg == 'number'){
		return arg * 2;
	}else{
		return arg +" "+ arg
	}
}

export type name = string;