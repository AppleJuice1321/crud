import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <Link href="create">create</Link>
        <Link href="read">read</Link>
      </nav>
      <ToastContainer />
    </>
  );
}
