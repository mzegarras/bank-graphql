import { GraphQLServer } from "graphql-yoga";
import db from './db'


const resolvers = {
    Query: {
        customer: (parent,{id},{db},info) => db.customers.find(customer=>customer.id===id),
        accounts: (parent,{customerId},{db},info) =>db.accounts.filter(account=>account.customer===customerId)
    },

    Customer: {
        contacts: (parent,args,{db},info) =>{
            const contacts=[];

            db.customersContacts.filter(c=>c.customerId===parent.id).forEach(contact=>{
                 var customer = db.customers.find(customer=>customer.id===contact.contact);
                 contacts.push(customer);
            });

            return contacts;
        },
        accounts:(parent,args,{db},info) =>db.accounts.filter(account=>account.customer===parent.id)
    },
    Account:{
        transactions: (parent,args,{db},info) =>db.transactions.filter(tx=>tx.account===parent.id),
        owner:(parent,args,{db},info) =>db.customers.find(c=>c.id===parent.customer)

    }
}


const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers,
    context:{
        db
    }
})

server.start(() => {
    console.log("Server is up!")
})
