type Props = {
  title: string;
};

export default function NotificationCard({ title }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <button>Mark Read</button>
      <button>Delete</button>
      <hr />
    </div>
  );
}