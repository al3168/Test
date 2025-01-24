export default function EmployeeListPage() {
    return <>
        import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    styled,
    tableCellClasses,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  
  interface EmployeesListQuery {
   
    id: 0;
    code: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
    department: [
      code: string,
      description: string,
    ];
  }

  
  export default function EmployeeListPage() {
    const [list, setList] = useState<EmployeesListQuery[]>([]);
  
    useEffect(() => {
      fetch("/api/employees/list")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setList(data as EmployeesListQuery[]);
        });
    }, []);
  
    return (
      <>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 4 }}>
          EMPLOYEE
        </Typography>
  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <StyledTableHeadCell>code</StyledTableHeadCell>
                <StyledTableHeadCell>firstName</StyledTableHeadCell>
                <StyledTableHeadCell>lastName</StyledTableHeadCell>
                <StyledTableHeadCell>address</StyledTableHeadCell>
                <StyledTableHeadCell>Email</StyledTableHeadCell>
                <StyledTableHeadCell>Phone</StyledTableHeadCell>
                <StyledTableHeadCell>department</StyledTableHeadCell>
                

              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell>{row.code}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                

             
                 
                 
              
               
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
  
  const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  }));
    </>
}
