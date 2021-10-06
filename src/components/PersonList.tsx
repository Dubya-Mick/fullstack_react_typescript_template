import { useParams, Redirect } from 'react-router-dom';

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  const { name } = useParams<{ name: string | undefined }>();
  const { names } = props;
  const fullName = names.find(({ first }) => first === name);

  if (!fullName) return <Redirect to="/" />;
  else return <div>{`${fullName.first}, ${fullName.last}`}</div>;
};
