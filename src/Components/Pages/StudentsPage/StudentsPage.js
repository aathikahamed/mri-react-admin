import Table from "../../Table/Table";

const StudentsPage = () => {
  const students = [
    {
      name: "Aathik",
      year: 12,
      age: 16,
    },
  ];

  return (
    <Table
      columns={[
        { title: "Name", field: "name" },
        {
          title: "Year",
          field: "year",
          lookup: { 34: "Year 1", 63: "Year 2" },
        },
        { title: "Age", field: "age", type: "numeric" },
      ]}
      data={students}
      title="Demo Title"
      options={{
        selection: true,
        filtering: true,
        exportButton: true,
      }}
      onSelectionChange={(rows) => {
        console.log("Rows: ", rows);
      }}
    />
  );
};

export default StudentsPage;
