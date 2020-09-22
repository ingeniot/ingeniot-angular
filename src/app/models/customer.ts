export class Customer{
    constructor(
        public id:number,
        public tenant_id:number,
        public name:string,
        public type:string,
        public country:string,
        public state:string,
        public city:string,
        public address:string,
        public phone:string,
        public email:string
    ){}
} 