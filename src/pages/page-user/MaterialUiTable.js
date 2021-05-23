import React, { useState } from "react";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import Delete from "@material-ui/icons/Delete";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Cancel from "@material-ui/icons/Cancel";
import Clear from "@material-ui/icons/Clear";
import ClearAll from "@material-ui/icons/ClearAll";
import { useQuery, useMutation } from '@apollo/client';
import {Users, DeleteUser} from 'graphql/schema/User.Schema'
import MaterialTable from "material-table";
import { useEffect } from "react";


export function MaterialUiTable() {

  const { loading, error, data } = useQuery(Users);
  const [deleteUSer] = useMutation(DeleteUser)

  const [state, setState] = useState({
    columns: [
      { title: "Id", field: "id" },
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
    ]
  })

  useEffect(() => {
    
    if (error)
    {
      // TODO: handel error case
      alert(error);
      return ;
    }

    if (!loading)
    {
      setState({
        ...state,
        data: data.listUsers.map(item => ({...item})),
      })
    }
    console.log('-----');
    console.log("Loading", loading)
    console.log("Error", error);
    console.log("Data", data);
  }, [loading, error, data]);


  return (
    <MaterialTable
      style={{
        color: "#4a4a4ade",
        fontFamily: "arial",
        fontSize: "0.9rem",
      }}
      icons={{
        Check: Check,
        Add: Add,
        Delete: Delete,
        Edit: Edit,
        Close: Close,
        ClearAll: ClearAll,
        Cancel: Cancel,
        Clear: Clear,
        DeleteOutline: DeleteOutline,
        ViewColumn: ViewColumn,
        DetailPanel: ChevronRight,
        Export: SaveAlt,
        Filter: FilterList,
        FirstPage: FirstPage,
        LastPage: LastPage,
        NextPage: ChevronRight,
        PreviousPage: ChevronLeft,
        Search: Search,
        ThirdStateCheck: Remove,
      }}
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
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
              deleteUSer({variables:{ id: oldData.id }});
              setState((prevState) => {
                console.log(prevState.data)
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
