import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { fetchStudent, fetchStudentRegistrations } from "../api";
import { Table, TBody, Td, Th, THead, Tr } from "../components/Table";

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

      <Table>
        <THead>
          <Tr>
            <Th>Class</Th>
          </Tr>
        </THead>

        <TBody>
          {registrations.map((registration) => (
            <Tr key={registration.id}>
              <Td>{registration.class_id}</Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </div>
  );
}
