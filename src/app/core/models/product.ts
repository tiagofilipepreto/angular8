export class Product {

    'id': number;
    "nome": string;
	"initprice": number;
	"discount": number;
	"iva" : number;
      
    constructor(data?:any){
        Object.assign(this, data);
    }
}
