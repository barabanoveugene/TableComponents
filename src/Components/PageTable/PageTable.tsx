import React, { useEffect, useState } from 'react';
import './PageTable.css';

type Field = {
  name: string;
  norm: string;
  id: string;
};

type TableItemData = {
  name: string;
  fields: Field[];
  id: string;
};

type TableItemsData = {
  members: TableItemData[];
};

export const PageTable = () => {
  const [pageState, setPageState] = useState<TableItemsData>({ members: [] });

  useEffect(() => {
    const setPageStateFromFetch = async () => {
      const data = await (
        await fetch('/api/normative-documents?page=3')
      ).json();
      console.log(data);
      const members: TableItemData[] = data['hydra:member'];
      members.forEach((member) => {
        member.fields.reverse();
      });
      setPageState({ ...pageState, members });
    };
    setPageStateFromFetch();
  }, []);

  return (
    <div className="wrapper">
      <div className="title">
        <h2>Title page</h2>
      </div>
      <div className="button">
        <button type="button"> Create document </button>
      </div>
      <table className="">
        <thead>
          <tr>
            <td>Title item</td>
            <td>Title item</td>
            <td>Title item</td>
          </tr>
        </thead>
        <tbody>
          {pageState.members.map((item) => {
            const tr = item.fields.map((field, i) => {
              let name = null;
              if (i === 0) {
                name = <td rowSpan={item.fields.length}>{item.name}</td>;
              }
              return (
                <tr key={field.id}>
                  {name}
                  <td>{field.name}</td>
                  <td>{field.norm}</td>
                </tr>
              );
            });
            return tr;
          })}
        </tbody>
      </table>
      <div className="pagination">
        <a href="#">1</a>
        <a href="#">1</a>
        <a href="#">1</a>
      </div>
    </div>
  );
};

// eslint-disable-next-line no-lone-blocks
{
  /* <tbody>
  {pageState.members.map((item) => {
    const fields = item.fields
      .map((field) => (
        <tr key={`${field.id}`}>
          <td>{field.name}</td>
          <td>{field.norm}</td>
        </tr>
      ))
      .reverse();
    return (
      <tr key={item.id}>
        <td rowSpan={2}>{item.name}</td>
        {fields}
      </tr>
    );
  })}
</tbody>; */
}

{
  /* <td rowSpan={2}>{item.name}</td>
              <td>{item.fields[0].name}</td>
              <td>{item.fields[1].name}</td> */
}

{
  /* <tbody>
  {pageState.members.map((item) => {
    const fields = item.fields
      .map((field) => (
        <table key={`${field.id}`}>
          <tbody>
            <tr>
              <td>{field.name}</td>
              <td>{field.norm}</td>
            </tr>
          </tbody>
        </table>
      ))
      .reverse();
    return (
      <tr key={item.id}>
        <td rowSpan={2}>{item.name}</td>
        {fields}
      </tr>
    );
  })}
</tbody>; */
}
