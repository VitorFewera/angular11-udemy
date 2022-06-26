export class ConversaoResponse{
    constructor(
        public base: string,
        public date: string,
        public rates: any){}
    }
//("base: "USD", "date", "2017-03-08", "rates":{"BRL":3.1405}) 
// Quando o usuario faz uma requisição retorna de acordo acima
//'base do app retorna o tipo da moeda', 'data que a pesquisa foi realizada, em USA', 
// e 'rates que retorna o que foi solicitado ao app' - tipo moeda e seu valor 