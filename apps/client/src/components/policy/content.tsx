import { IPolicyData } from ".";

interface IPolicyContentProps {
  data: IPolicyData[];
}

const PolicyContent = ({ data }: IPolicyContentProps) => {
  return (
    <div
      data-aos="fade-left"
      className="mx-auto mb-20 flex w-full flex-col items-center justify-center gap-10 overflow-x-hidden"
    >
      {data.map((policy, idx) => (
        <div className="flex w-full flex-col gap-2 px-10">
          <p className="text-xl font-bold text-blue-600">
            {idx !== data.length - 1 ? `제 ${policy.id}조 ${policy.title}` : policy.title}
          </p>
          <p className="whitespace-pre-wrap break-keep">{policy.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PolicyContent;
