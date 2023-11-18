import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div>
            Page not found <Link to="/">to Home</Link>
        </div>
    );
}