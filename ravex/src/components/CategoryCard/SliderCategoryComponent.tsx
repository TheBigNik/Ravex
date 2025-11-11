import type { ReactNode } from "react";

const SliderCategoryComponent = ({
  children,
}: SliderCategoryComponentProps) => {
  return (
    <div className="flex w-full items-stretch gap-3 overflow-x-auto py-4">
      {children}
    </div>
  );
};

export default SliderCategoryComponent;
