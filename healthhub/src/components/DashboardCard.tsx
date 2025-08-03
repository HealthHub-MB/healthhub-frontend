export const DashboardCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="w-[456px] min-w-[158px] h-[112px] p-6 rounded-lg flex flex-col gap-2">
    <p className="text-base font-medium text-[#121417]">{title}</p>
    <p className="text-2xl font-bold text-[#121417]">{value}</p>
  </div>
);