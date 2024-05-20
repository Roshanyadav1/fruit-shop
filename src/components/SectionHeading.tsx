const SectionHeading = ({
  title,
  options,
}: {
  title: string;
  options: string[];
}) => {
  return (
    <>
      <div className="flex justify-between m-4">
        <div className=" font-semibold text-lg">{title}</div>
        <div className=" sm:flex sm:flex-wrap md:grid gap-4 grid-flow-col cursor-pointer">
          {options.map((e , i) => {
            return (
              <span key={i} className={`${!i ? "text-emerald-500" : ""} `}>
                {e}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionHeading