const fields = [
  "firstName",
  "lastName",
  "maidenName",
  "age",
  "gender",
  "email",
  "phone",
  "username",
  "password",
  "birthDate",
  "bloodGroup",
  "macAddress",
  "university",
  "eyeColor",
];
export const User = ({ data }) => {
  return (
    <>
      <div className="container" key={data.key}>
        <div className="row">
          <div className="col-4">
            <img
              src={data.image}
              className="img-fluid rounded-top w-100"
              alt={data.firstName}
            />
            <h3 className="text-center">
              {data.firstName} {data.lastName}
            </h3>
          </div>
          <div className="col-8">
            <div class="table-borderless">
              <table class="table table-primary">
                {Object.keys(data).map((key) => {
                  return fields.includes(key) ? (
                    <tr key={Math.random()}>
                      <th className="">{key}</th>
                      <td>{typeof data[key] != "object" ? data[key] : ""}</td>
                    </tr>
                  ) : (
                    ""
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
