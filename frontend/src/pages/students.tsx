import { useLoaderData, Link } from "react-router-dom";

import { fetchStudents } from "../api";

import { Table, THead, Th, Tr, TBody, Td } from "../components/Table";

export async function loader() {
  const students = await fetchStudents();

  return { students };
}

export function Students() {
  const { students } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <Table>
      <THead>
        <Tr>
          <Th>Id</Th>
          <Th>Firstname</Th>
          <Th>Grade</Th>
          <Th>Birthday</Th>
        </Tr>
      </THead>

      <TBody>
        {students.map((student) => (
          <Tr key={student.id}>
            <Td>
              <Link
                className="text-blue-700 hover:underline"
                to={String(student.id)}
              >
                {student.id}
              </Link>
            </Td>
            <Td>{student.firstname}</Td>
            <Td>{student.grade}</Td>
            <Td>{student.birthday}</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}
