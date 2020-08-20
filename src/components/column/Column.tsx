import React, { ReactNode } from 'react';

import s from './Column.scss';

interface ColumnProps {
  children: ReactNode;
  col2?: string;
  col3?: string;
  col4?: string;
}

export const Column = ({ children, col2, col3, col4 }: ColumnProps) => {
  return (
    <div
      className={s(s.column, (col2 ? s.column2 :''),  (col3 ? s.column3 :''),  (col4 ? s.column4 :'')  )}
    >
      {children}
    </div>
  );
};
