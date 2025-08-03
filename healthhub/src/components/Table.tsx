import React from 'react';

type CellData = {
  content: string | JSX.Element;
  width: string; // Tailwind width class like 'w-[258px]'
  align?: 'left' | 'center' | 'right';
};

type RowData = CellData[];

type TableCardProps = {
  headers: RowData;
  rows: RowData[];
  cardHeight?: string;
  rowHeight?: string;
};

const TableCard: React.FC<TableCardProps> = ({
  headers,
  rows,
  cardHeight = 'h-auto',
  rowHeight = 'h-[72px]',
}) => {
  return (
    <div
      className={`w-[928px] ${cardHeight} bg-white border border-[#DBE0E6] rounded-xl flex flex-col`}
    >
      {/* Header Row */}
      <div className="flex w-full h-[46px]">
        {headers.map((cell, idx) => (
          <div
            key={idx}
            className={`px-4 py-3 ${cell.width} font-medium text-sm text-[#121417] text-${cell.align || 'left'}`}
          >
            {cell.content}
          </div>
        ))}
      </div>

      {/* Body Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className={`flex items-center border-t border-[#E6E8EB] ${rowHeight}`}
        >
          {row.map((cell, j) => (
            <div
              key={j}
              className={`px-4 py-2 ${cell.width} flex items-center text-sm text-[#121417] text-${cell.align || 'left'}`}
            >
              {cell.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableCard;
