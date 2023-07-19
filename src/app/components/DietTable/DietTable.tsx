'use client'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  monday: number,
  tuesday: number,
  wensday: number,
  thursday: number,
  friday: number,
  saturday: number,
  sunday: number,
) {
  return { name, monday, tuesday, wensday, thursday, friday, saturday, sunday };
}

export default function DietTable({rows}: any) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Lunes</TableCell>
            <TableCell align="right">Martes</TableCell>
            <TableCell align="right">Miercoles</TableCell>
            <TableCell align="right">Jueves</TableCell>
            <TableCell align="right">Viernes</TableCell>
            <TableCell align="right">Sabado</TableCell>
            <TableCell align="right">Domingo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.monday}</TableCell>
              <TableCell align="right">{row.tuesday}</TableCell>
              <TableCell align="right">{row.wensday}</TableCell>
              <TableCell align="right">{row.thursday}</TableCell>
              <TableCell align="right">{row.friday}</TableCell>
              <TableCell align="right">{row.saturday}</TableCell>
              <TableCell align="right">{row.sunday}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}