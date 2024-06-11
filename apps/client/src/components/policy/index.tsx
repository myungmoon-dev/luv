import { useState } from "react";
import PolicyTermsContent from "./terms";
import { cn } from "ui";
import PolicyTab from "./tab";

const POLICY_TAB_DATA = [
  {
    label: "이용약관",
    content: <PolicyTermsContent />,
  },
  {
    label: "개인정보취급방침",
  },
];

const Policy = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-10 overflow-x-hidden">
      <div className="flex w-full flex-col">
        <nav className="mb-10 flex h-[70px] w-full items-center justify-center gap-1">
          {POLICY_TAB_DATA.map((menu, idx) => (
            <PolicyTab
              currnetIndex={idx}
              selectedIndex={tabIndex}
              label={menu.label}
              onClick={(selctedIndex) => setTabIndex(selctedIndex)}
            />
          ))}
        </nav>
        {POLICY_TAB_DATA[tabIndex].content}
      </div>
    </div>
  );
};

export default Policy;
