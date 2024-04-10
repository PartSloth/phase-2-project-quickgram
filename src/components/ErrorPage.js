import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <h1>Something went wrong! Please try again.</h1>
        </>
    )
}

export default ErrorPage;