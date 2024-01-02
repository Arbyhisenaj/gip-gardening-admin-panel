type Props = {
  iso8601Timestamp: string;
};

const DateFormatter: React.FC<Props> = ({ iso8601Timestamp }) => {
  const timestamp = new Date(iso8601Timestamp);

  const formattedDate = timestamp.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <span>{formattedDate}</span>;
};

export default DateFormatter;
