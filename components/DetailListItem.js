const DetailListItem = ({ label, info, matchStrength }) => {
  return (
    <div className="flex my-2 px-6">
      <div className="mr-4 font-roboto">{label}</div>
      <div className="">{info}</div>
      <div className="grow"></div>
      <div>{matchStrength}</div>
    </div>
  );
};
export default DetailListItem;
