import { useLoaderData } from "react-router-dom";

import { fetchClassTitles } from "../api";

export async function loader() {
  const classes = await fetchClassTitles();

  return { classes };
}

export function Classes() {
  const { classes } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {classes.map((cls) => (
          <tr key={cls.id}>
            <td>{cls.id}</td>
            <td>{cls.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
