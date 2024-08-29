type ActionCardProps = {
  description: React.ReactNode;
  button: React.ReactNode;
};

const ActionCard = ({ description, button }: ActionCardProps) => {
  return (
    <div className='relative flex flex-row justify-center rounded-lg border-1 border-primary-800 bg-white drop-shadow-2xl p-4 transition hover:opacity-100'>
      <div className='flex flex-row md:justify-items-center md:items-center'>
        <p>{description}</p>
        <p className='scale-75'>{button}</p>
      </div>
      {/* flex flex-col md:grid md:grid-cols-2 md:place-items-center */}
      {/* flex flex-row justify-center items-center */}
    </div>
  );
};

export default ActionCard;
