const customers = [
    {id:"CLI001",firstName:"Messi",lastName:"Lionel"},
    {id:"CLI002",firstName:"Ronaldo",lastName:"Cristiano"},
    {id:"CLI003",firstName:"Kylian",lastName:"Mbappé"},
    {id:"CLI004",firstName:"Paul",lastName:"Pogba"},
    {id:"CLI005",firstName:"Luis",lastName:"Suarez"},
    {id:"CLI006",firstName:"Luka",lastName:"Modric"},
]

const customersContacts = [
    {customerId:"CLI001",contact:"CLI002"},
    {customerId:"CLI001",contact:"CLI003"},
    {customerId:"CLI001",contact:"CLI004"}
]

const accounts = [
    {id:"1000001",customer:"CLI002",balance:11.6,nickName:"fds",type:'Checking',currency:'DOL'},
    {id:"1000002",customer:"CLI001",balance:14.6,nickName:"equipo1",type:'Savings',currency:'EUR'},
    {id:"1000003",customer:"CLI001",balance:11.6,nickName:"sueldo",type:'Checking',currency:'DOL'},
    {id:"1000004",customer:"CLI004",balance:12.6,nickName:"mama",type:'Checking',currency:'DOL'},
    {id:"1000005",customer:"CLI006",balance:15.1,nickName:"equipo2",type:'Savings',currency:'PEN'},
    {id:"1000006",customer:"CLI005",balance:10.6,nickName:"sueldo",type:'Checking',currency:'EUR'},
]

const transactions = [
    {id:"T000001",type:"cash_deposit",description:"sueldo",date:"2021-05-04 06:00",currency:'EUR',amount:1000,account:"1000001"},
    {id:"T000002",type:"cash_withdrawal",description:"pet",date:"2021-05-04 07:00",currency:'EUR',amount:-400,account:"1000001"},
    {id:"T000003",type:"cash_deposit",description:"sueldo",date:"2021-05-04 06:00",currency:'EUR',amount:1000,account:"1000002"},
    {id:"T000005",type:"cash_deposit",description:"sueldo",date:"2021-05-04 07:00",currency:'EUR',amount:300,account:"1000002"},
    {id:"T000006",type:"refund",description:"coffe",date:"2021-05-04 07:00",currency:'EUR',amount:-50,account:"1000002"},
    {id:"T000007",type:"cash_deposit",description:"sueldo",date:"2021-05-04 06:00",currency:'EUR',amount:1000,account:"1000003"},
    {id:"T000008",type:"cash_deposit",description:"sueldo",date:"2021-05-04 06:00",currency:'EUR',amount:1000,account:"1000004"},
    {id:"T000009",type:"cash_deposit",description:"sueldo",date:"2021-05-04 06:00",currency:'EUR',amount:1000,account:"1000005"},
    {id:"T000010",type:"cash_deposit",description:"sueldo",date:"2021-05-04 06:00",currency:'EUR',amount:1000,account:"1000006"}
]

const db = {
    customers,
    customersContacts,
    accounts,
    transactions
}

export {db as default}