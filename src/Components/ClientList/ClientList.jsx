import Client from "./Client";
import ClientForm from "./ClientForm";
import { useState } from "react";

export default function ClientList() {
  const [state, setState] = useState({
    title: "Liste des clients",
    clients: [
      { id: 0, name: "John Doe" },
      { id: 1, name: "Jane Doe" },
      { id: 2, name: "Will Doe" }
    ]
  });

  const handleDeleteClient = (id) => {
    const clients = [...state.clients];
    const clientIndex = clients.findIndex((client) => {
      return client.id === id;
    });
    clients.splice(clientIndex, 1);
    setState((prevState) => ({
      ...prevState,
      clients
    }));
  };

  const handleAddClient = (client) => {
    const clients = [...state.clients, client];
    setState((prevState) => ({
      ...prevState,
      clients
    }));
  };

  return (
    <div>
      <h1>{state.title}</h1>
      <ul className="clientsList">
        {state.clients.map((client) => {
          return (
            <Client
              key={client.id}
              details={client}
              onDelete={handleDeleteClient}
            />
          );
        })}
      </ul>
      <ClientForm
        placeHolder="New user name"
        buttonText="Add user"
        alertEmptyText="Add a new name before"
        onAdd={handleAddClient}
      />
    </div>
  );
}
