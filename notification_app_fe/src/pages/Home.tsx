import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <NotificationCard title="New Assignment Uploaded" />
      <NotificationCard title="Exam Schedule Released" />
      <NotificationCard title="Fee Payment Reminder" />
    </>
  );
}