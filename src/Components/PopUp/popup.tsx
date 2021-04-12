import React, { ReactNode } from 'react';

import './popup.css';

type ItemsPopUp = {
  children: ReactNode;
};

export const PopUp: React.FC<ItemsPopUp> = ({ children }: ItemsPopUp) => (
  <div className="popUp">{children}</div>
);
