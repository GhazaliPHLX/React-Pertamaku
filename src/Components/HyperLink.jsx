import { Link } from "react-router-dom";

export default function HyperLink({ to, children }) {
  return (
    <Link to={ to }>
      <div className="text-lg p-4 text-cyan-300 w-fit rounded-full bg-gray-600 my-2 hover:bg-black font-semibold ">
        { children }
      </div>
    </Link>
  );
}
