import React from 'react';

import './CustomCheckbox.css';

export type CusCheckbox = {
  checked: boolean;
  title: string;
  id: string;
};

interface ICusCheckbox {
  checked: boolean;
  title: string;
  onChange: () => void;
}

export const CustomCheckbox: React.FC<ICusCheckbox> = ({
  checked,
  title,
  onChange,
}: ICusCheckbox) => (
  <>
    <label htmlFor="cusCheckbox">
      <input
        className="cusCheckbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {title}
    </label>
  </>
);
