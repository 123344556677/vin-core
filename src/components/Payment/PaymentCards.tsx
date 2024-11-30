const PaymentCard = ({ title, description, icon, selected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer p-4 rounded-md shadow-md border ${
        selected ? "border-primary bg-primary/10" : "border-gray-300"
      } transition-all hover:shadow-lg`}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
