import { useLoaderData } from "react-router-dom";

import { fetchClassTitles } from "../api";
import { Table, TBody, Th, THead, Tr, Td } from "../components/Table";

export async function loader() {
  const classes = await fetchClassTitles();

  return { classes };
}

export function Classes() {
  const { classes } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <Table>
      <THead>
        <Tr>
          <Th>Id</Th>
          <Th>Description</Th>
        </Tr>
      </THead>

      <TBody>
        {classes.map((cls) => (
          <Tr key={cls.id}>
            <Td>{cls.id}</Td>
            <Td>{cls.description}</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}
