type StatusProps = {
  status: 'loading' | 'success' | 0 | 'error';
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === 'loading') {
    message = 'burgers';
  } else if (props.status === 'success') {
    message = 'Data fetched successfulyy';
  } else if (props.status === 'error') {
    message = 'error fetching the dater';
  } else if (props.status === 0) {
    message = "It's zero";
  }

  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};
