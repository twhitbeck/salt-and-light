import React from "react";

// TODO: merge className
export const Table = (props: React.ComponentProps<"table">) => (
  <table className="w-full" {...props} />
);

export const THead = (props: React.ComponentProps<"thead">) => (
  <thead {...props} />
);

export const Tr = (props: React.ComponentProps<"tr">) => <tr {...props} />;

// TODO: merge className
export const Th = (props: React.ComponentProps<"th">) => (
  <th
    className="border-b pb-3 text-left font-medium first:pl-0 last:pr-0"
    {...props}
  />
);

export const TBody = (props: React.ComponentProps<"tbody">) => (
  <tbody {...props} />
);

export const Td = (props: React.ComponentProps<"td">) => (
  <td
    className="border-b border-slate-100 p-2 first:pl-0 last:pr-0"
    {...props}
  />
);
