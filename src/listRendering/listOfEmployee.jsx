import React, { Component } from "react";

class ListOfEmployee extends Component {
  //here there is a unique value  EmployeeCode which is passed as key in the list of employee and warning is removed here.
  render() {
    const employeeDetail = [
      {
        EmployeeCode: "SG0001",
        EmployeeName: "Olivia Lum",
        DepartmentCode: "CO",
      },
      {
        EmployeeCode: "SG0002",
        EmployeeName: "Lim Ah Hua",
        ManagerCode: "SG0001",
        DepartmentCode: "HR",
      },
      {
        EmployeeCode: "SG0004",
        EmployeeName: "Aik Hockf Tan2",
        ManagerCode: "SG0001",
        DepartmentCode: "CO",
      },
      {
        EmployeeCode: "SG0005",
        EmployeeName: "Micheal Chok",
        ManagerCode: "SG0001",
        DepartmentCode: "HR",
      },
      {
        EmployeeCode: "SG0007",
        EmployeeName: "James Bongx",
        ManagerCode: "SG0002",
        DepartmentCode: "CO",
      },
      {
        EmployeeCode: "SG0007V2",
        EmployeeName: "James Fake",
        ManagerCode: "SG0007",
        DepartmentCode: "CO",
      },
      
      {
        EmployeeCode: "SG00098",
        EmployeeName: "Emp E0003d",
        DepartmentCode: "HR",
      },
      {
        EmployeeCode: "SG0010",
        EmployeeName: "Ben Ten (Split Shift)",
        ManagerCode: "SG0002",
        DepartmentCode: "IT",
      },
     
    
      {
        EmployeeCode: "SG0017",
        EmployeeName: "Seven Teen MY",
        DepartmentCode: "CO",
      },
      {
        EmployeeCode: "SG0018",
        EmployeeName: "Eight IN",
        DepartmentCode: "IT",
      },
      {
        EmployeeCode: "SG0019",
        EmployeeName: "Nine TH Teen",
        ManagerCode: "SG0004",
        DepartmentCode: "CO",
      },
      {
        EmployeeCode: "SG0021",
        EmployeeName: "tww 1 aaaaaaa",
        DepartmentCode: "CO",
      },
      {
        EmployeeCode: "SG0022",
        EmployeeName: "Karmen Raider 22",
        DepartmentCode: "HR",
      },
      {
        EmployeeCode: "SG0023",
        EmployeeName: "Jordan 23 ",
        ManagerCode: "SG00098",
        DepartmentCode: "HR"
      }
    ];
    return (
      <div>
        ListOfEmployee
        {employeeDetail.map((details) => (
          <h4 key={details.EmployeeCode}>
            {details.EmployeeCode} is named as {details.EmployeeName} of department {details.DepartmentCode}
          </h4>
        ))}
      </div>
    );
  }
}

export default ListOfEmployee;
