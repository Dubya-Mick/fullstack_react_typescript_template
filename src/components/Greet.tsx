type GreetProps = {
  name: String;
  messageCount: Number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { name, messageCount = 0, isLoggedIn } = props;

  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Hello ${name} you got ${messageCount} messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
