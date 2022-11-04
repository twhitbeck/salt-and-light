import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { fetchStudent, fetchStudentRegistrations } from "../api";

export async function loader({ params }: LoaderFunctionArgs) {
  const [student, registrations] = await Promise.all([
    fetchStudent(params.studentId!),
    fetchStudentRegistrations(params.studentId!),
  ]);

  return { student, registrations };
}

export function Student() {
  const { student, registrations } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <div>
      {student.firstname}

      <table>
        <thead>
          <tr>
            <th>Class</th>
          </tr>
        </thead>

        <tbody>
          {registrations.map((registration) => (
            <tr key={registration.id}>
              <td>{registration.class_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
