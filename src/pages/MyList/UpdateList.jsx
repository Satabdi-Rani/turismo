import { useLoaderData } from "react-router-dom";

const UpdateList = () => {
    const clickList = useLoaderData();

    return (
        <div>
            {clickList.name}
        </div>
    );
};

export default UpdateList;