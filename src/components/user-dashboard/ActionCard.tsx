type ActionCardProps = {
  description: React.ReactNode;
  button: React.ReactNode;
};

const ActionCard = ({ description, button }: ActionCardProps) => {
  return (
    <div className='relative flex flex-row justify-center rounded-lg border-1 border-primary-800 bg-white drop-shadow-2xl p-4 transition hover:opacity-100 md:hover:scale-105'>
      <div className='flex flex-col md:grid md:grid-cols-2 md:place-items-center'>
        <p>{description}</p>
        <p>{button}</p>
      </div>
    </div>
  );
};

export default ActionCard;
