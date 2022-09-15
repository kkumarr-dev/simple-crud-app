import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { LoaderContext } from "../../Contexts";
import { User } from "./User";
import { UserService } from "../../services";
const columns = [
  {
    name: "Name",
    selector: (row) => `${row.firstName} ${row.lastName}`,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
    sortable: true,
  },
  {
    name: "email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "phone",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "birthDate",
    selector: (row) => row.birthDate,
    sortable: true,
  },
  {
    name: "bloodGroup",
    selector: (row) => row.bloodGroup,
    sortable: true,
  },
  {
    name: "university",
    selector: (row) => row.university,
    sortable: true,
  },
];
export const Users = () => {
  const [users, setUsers] = useState([]);
  const _loader = useContext(LoaderContext);
  useEffect(() => {
    _loader.initLoader(1);
    getUsers();
  }, []);
  const getUsers = async () => {
    await UserService.Users()
      .then((res) => {
        debugger;
        _loader.initLoader(0);
        if (res.status === 200) setUsers(res.data.users);
      })
      .catch((err) => {
        _loader.initLoader(0);
        console.error(err);
      });
  };
  const expandedComponent = (e) => <User data={e.data} />;
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <DataTable
              data={users}
              columns={columns}
              pagination
              highlightOnHover
              title="Users"
              fixedHeader
              fixedHeaderScrollHeight="450px"
              expandOnRowClicked
              expandableRows
              expandableRowsComponent={expandedComponent}
              expandableIcon="false"
            />
          </div>
        </div>
      </div>
    </>
  );
};
