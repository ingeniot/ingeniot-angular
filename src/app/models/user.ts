export class User{
    constructor(
        public id:number,
        public customer_id:number,
        public email:string,
        public password:string,
        public name:string,
        public surname:string,
        public role:string,
        public description:string,
        public image:string
    ){}
} 