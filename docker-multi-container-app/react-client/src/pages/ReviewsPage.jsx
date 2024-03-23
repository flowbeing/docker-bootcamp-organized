import { useRouteLoaderData ,useLoaderData, useActionData, Link, NavLink, json, Await, useNavigate, useNavigation } from "react-router-dom"

export default function ReviewsPage(){

    const data = useRouteLoaderData("root");
    console.log(`data: ${data}`);
    data.forEach(key => console.log(`${key}: ${data[key]}`));

    return (
        <p>Reviews</p>
    );

}
