import moment from "moment";
import "./style.css";

const Event = ({
    id, title, description, date,
    location, created_at, updated_at
}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{moment(date).format("DD.MM.YYYY HH:mm")}</td>
            <td>{location}</td>
            <td>{moment(created_at).fromNow()}</td>
            <td>{moment(updated_at).fromNow()}</td>
        </tr>
    );
}

export default Event;