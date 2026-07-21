
const Table = ({ children }) => {
  return (
    <table className="w-full text-left text-sm whitespace-nowrap">
      {children}
    </table>
  );
};

function Header({ children }) {
  return (
    <thead className="bg-orange-50 text-zinc-500 uppercase text-xs font-semibold">
      {children}
    </thead>
  );
}

function Body({ children }) {
  return (
    <tbody className="divide-y divide-gray-200">
      {children}
    </tbody>
  );
}

function Row({ children }) {
  return <tr className="hover:bg-zinc-50/50 transition-colors">{children}</tr>;
}

function Cell({ children, className="" }) {
  return (
    <td className={className}>
      {children}
    </td>
  );
}

function Head({ children }) {
  return (
    <th className="px-6 py-3">
      {children}
    </th>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.Head = Head;

export default Table;
