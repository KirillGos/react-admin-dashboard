import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user", 
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "transaction", headerName: "Transaction", width: 160 },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <button className="userListEdit">Edit</button>
          <DeleteOutline className="userListDelete"/>
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Tony Stark",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "starkInt@hotmail.com",
    status: "active",
    transaction: "$200.000.00",
  },
  {
    id: 3,
    username: "Bruce Benner",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "hulk@gmail.com",
    status: "unactive",
    transaction: "$0.00",
  },
  {
    id: 4,
    username: "Paul Alen",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "flash@outlook.com",
    status: "active",
    transaction: "$50.00",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    username: "Tony Stark",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "starkInt@hotmail.com",
    status: "active",
    transaction: "$200.000.00",
  },
  {
    id: 7,
    username: "Bruce Benner",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "hulk@gmail.com",
    status: "unactive",
    transaction: "$0.00",
  },
  {
    id: 8,
    username: "Paul Alen",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "flash@outlook.com",
    status: "active",
    transaction: "$50.00",
  },
  {
    id: 9,
    username: "Paul Alen",
    avatar:
      "https://yt3.ggpht.com/yti/ANjgQV-6phaliBvMyMnCHcNM4kNgc9J74FLqhbiLm9Y-l4J_TQ=s88-c-k-c0x00ffffff-no-rj",
    email: "flash@outlook.com",
    status: "active",
    transaction: "$50.00",
  },
];

export default function UserList() {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
