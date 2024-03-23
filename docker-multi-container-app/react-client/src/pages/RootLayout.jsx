import { Outlet } from "react-router-dom";

export default function RootLayout(){

    return(
        <Outlet/>
    );

}

export async function rootLayoutLoaderFunction({request, params}){

    const response = await fetch("http://127.0.0.1:8000/api/v1/reviews");

    if (!response.ok) throw new Error ("An error occured while fetching data - rootLayoutLoaderFunction");

    const resolvedData = await response.json();
    return resolvedData;


}