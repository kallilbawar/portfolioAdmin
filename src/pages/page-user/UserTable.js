import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Users,
  CreateUSer,
  UpdateUSer,
  DeleteUser,
} from "graphql/schema/User.Schema";
import {MaterialUITable} from "components";
import { useEffect } from "react";
import { TextField } from "@material-ui/core";

export function UserTable() {
  const [errorField, setErrorField] = useState("");
  const { loading, error, data } = useQuery(Users);
  const [createUser] = useMutation(CreateUSer);
  const [updateUser] = useMutation(UpdateUSer);
  const [deleteUser] = useMutation(DeleteUser);

  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      {
        title: "Password",
        field: "password",
        render: (rowData) => <p>••••••</p>,
        editComponent: (props) => (
          <TextField
            type="password"
            placeholder="Password"
            onChange={(e) => props.onChange(e.target.value)}
          />
        ),
      },
    ],
  });

  useEffect(() => {
    if (error) {
      // TODO: handel error case
      alert(error);
      return;
    }

    if (!loading) {
      setState({
        ...state,
        data: data.listUsers.map((item) => ({ ...item })),
      });
    }
    console.log("-----");
    console.log("Loading", loading);
    console.log("Error", error);
    console.log("Data", data);
  }, [loading, error, data]);

  return (
    <MaterialUITable
      title="Users"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              createUser({
                variables: {
                  name: newData.name,
                  email: newData.email,
                  password: newData.password,
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

              updateUser({
                variables: {
                  id: oldData.id,
                  name: newData.name,
                  email: newData.email,
                  password: newData.password,
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
              deleteUser({ variables: { id: oldData.id } });
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
