import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs"
import App from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Aplicação Web com ReactJS",
          type: "deposit",
          category: "jobs",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "house",
          amount: 800,
          createdAt: new Date("2021-03-01 10:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", {...data, createdAt: new Date()});
    });
  },
});

// createServer({

//   models: {
//     transaction: Model
//   },

//   seeds(server) {
//     server.db.loadData ({
//       transactions: [
//         {
//           id: 1,
//           title: 'freela',
//           type: 'deposit',
//           category: 'Dev',
//           amount: 6000,
//           createdAt: new Date('2021-02-19 09:00:00')
//         },
//         {
//           id: 2,
//           title: 'Internet',
//           type: 'withdraw',
//           category: 'Despesas',
//           amount: 100,
//           createdAt: new Date('2021-02-20 09:00:00')
//         },
//         {
//           id: 3,
//           title: 'Lanche',
//           type: 'withdraw',
//           category: 'Alimentação',
//           amount: 50,
//           createdAt: new Date('2021-02-20 12:00:00')
//         },
//       ]
//     })
//   },

//   routes() {
//     this.namespace = 'api'

//     this.get('/transactions', () => {
//       return this.schema.all('transaction')
//     })

//     this.post('/transactions', (schema, request) => {
//       const data = JSON.parse(request.requestBody)
//       //  console.log({mirage: data})
//       //  return this.schema.create('transaction', data)
//       return this.schema.create('transaction', data)
//     })
//   }
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

