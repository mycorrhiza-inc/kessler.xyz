// BasicComponents.tsx
import React from "react";

interface ParagraphProps {
  children: ReactNode;
}
export const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <p className="mb-4  text-lg">{children}</p>
);

interface ListProps {
  children: ReactNode[];
}
export const List: React.FC<ListProps> = ({ children }) => (
  <ul className="list-disc list-inside mb-4  text-lg">{children}</ul>
);

interface ListItemProps {
  children: ReactNode;
}
export const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <li className="mb-2">{children}</li>
);

interface TableProps {
  children: ReactNode[];
}
export const Table: React.FC<TableProps> = ({ children }) => (
  <table className="table-auto w-full mb-4">
    <tbody>{children}</tbody>
  </table>
);

interface TableRowProps {
  children: ReactNode[];
}
export const TableRow: React.FC<TableRowProps> = ({ children }) => (
  <tr>{children}</tr>
);

interface TableCellProps {
  children: ReactNode;
  header?: boolean;
}
export const TableCell: React.FC<TableCellProps> = ({ children, header }) => (
  <td className={`border px-4 py-2 ${header ? "font-bold" : ""}`}>
    {children}
  </td>
);

interface LinkProps {
  url: string;
  children: ReactNode;
}
export const Link: React.FC<LinkProps> = ({ url, children }) => (
  <a href={url} className="text-blue-400 hover:text-pink-500">
    {children}
  </a>
);
