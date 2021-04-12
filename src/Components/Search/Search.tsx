import React from 'react';

import './Search.css';

export type CusSearch = {
  value: string;
  id: string;
};

interface ICusSearch {
  fields: CusSearch;
  onChange: (value: string, id: string) => void;
}

export const CustomSearch: React.FC<ICusSearch> = ({
  fields,
  onChange,
}: ICusSearch) => {
  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value, e.currentTarget.id);
  };

  return (
    <input
      className="search-input"
      value={fields.value}
      id={fields.id}
      onChange={onInput}
    />
  );
};
