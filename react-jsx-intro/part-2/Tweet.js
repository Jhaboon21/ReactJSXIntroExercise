const Tweet = ({username, name, date, msg}) => {
    return (
        <div className="tweet">
            <h1>{name}</h1>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p>{msg}</p>
        </div>
    );
}