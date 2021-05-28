import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  ListContracts,
  CreateContract,
  UpdateContract,
  DeleteContract,
} from "graphql/schema/Contract.schema";
import {MaterialUITable} from "components";
import { useEffect } from "react";

export function ContractTable() {
  const [errorField, setErrorField] = useState("");
  const { loading, error, data } = useQuery(ListContracts);
  const [createContract] = useMutation(CreateContract);
  const [updateContract] = useMutation(UpdateContract);
  const [deleteUContract] = useMutation(DeleteContract);

  const [state, setState] = useState({
    columns: [
      { title: "Number", field: "number" },
      { title: "Name", field: "name" },
      { title: "Start_date", field: "start_date", type:"datetime" },
      { title: "End_date", field: "end_date", type:"datetime" },
      { title: "User", field: "user.name" },
    ],
  });

  useEffect(() => {

    if (error) {
      // TODO: handel error case
      alert(error);
      return;
    }

    
    console.log(loading);
    if (!loading) {
        console.log(data);
      setState({
        ...state,
        data: data.listContracts.map((item) => ({...item})),
      });
    }
    console.log("-----");
    console.log("Loading", loading);
    console.log("Error", error);
    console.log("Data", data);
  }, [loading, error, data]);

  return (
      
    <MaterialUITable
      title="Contracts"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              createContract({
                variables: {
                  number: newData.number,
                  name: newData.name,
                  start_date: newData.start_date,
                  end_date: newData.end_date,
                  userId: newData.userId,
                },
              }).catch((e) => {
                console.log("error de update" + e);
              });
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();

              updateContract({
                variables: {
                  id: oldData.id,
                  number: newData.number,
                  name: newData.name,
                  start_date: newData.start_date,
                  end_date: newData.end_date,
                  userId: newData.userId,
                },
              });
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              console.log(oldData.id);
              deleteUContract({ variables: { id: oldData.id } });
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
