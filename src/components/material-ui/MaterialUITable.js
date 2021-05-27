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
import MaterialTable from "material-table";


export function MaterialUITable({ title, columns, data, editable }) {
  return (
    <MaterialTable
      style={{
        color: "#4a4a4ade",
        fontFamily: "arial",
        fontSize: "0.9rem",
      }}
      icons={{
        Check: Check,
        ResetSearch: Clear,
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
      title={title}
      columns={columns}
      data={data}
      editable={editable}
    />
  );
}
