import "./style.css";
import {useEffect, useRef, useState} from "react";
import {api} from "../../services/API/BackendAPI";
import Event from "../Event";

const Events = () => {
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState(false);
    const arrowRef = useRef();

    useEffect(() => {
        (async () => {
            setList(await api.getEvents());
        })()
    }, []);

    const dateClickHandle = (e) => {
        setFilter(!filter);
        e.stopPropagation();

        if(arrowRef.current) {
            if (arrowRef.current.classList.contains("arrow-down"))
                arrowRef.current.classList.remove("arrow-down");
            else
                arrowRef.current.classList.add("arrow-down");
        }


        setList(list => {
            return [...list.sort((a, b) => {
                if(filter) {
                    if (a.date > b.date)
                        return -1;
                    else if (a.date < b.date)
                        return 1;

                    return 0
                }

                if (a.date > b.date)
                    return 1;
                else if (a.date < b.date)
                    return -1;

                return 0
            })];
        })
    }

    return (
        <div id="events">
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th onClick={dateClickHandle}>Date <span ref={arrowRef} className="arrow">^</span></th>
                    <th>Location</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                </tr>
                </thead>
                <tbody>
                {list.map(item => <Event key={item.id} {...item} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Events;