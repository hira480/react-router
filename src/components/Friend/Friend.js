import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;

    const navigat = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigat(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/' + id}>Show Detail</Link>
            <button onClick={showFriendDetail}>{username} : {id}</button>
        </div>
    );
};

export default Friend;