import { useLoaderData, Link } from "react-router-dom";

import { fetchStudents } from "../api";

export async function loader() {
  const students = await fetchStudents();

  return { students };
}

export function Students() {
  const { students } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Id</th>
          <th>Firstname</th>
          <th>Grade</th>
          <th>Birthday</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>
              <Link
                className="text-blue-700 hover:underline"
                to={String(student.id)}
              >
                {student.id}
              </Link>
            </td>
            <td>{student.firstname}</td>
            <td>{student.grade}</td>
            <td>{student.birthday}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
