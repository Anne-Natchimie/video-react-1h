export function Tweet({name, content, like}) {

    const onlike = () => {
        console.log("LIKE", name); 
    };
    
    return (
        <div className="Tweet">
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onlike()}>{like} ❤️</button>
        </div>
    ); 
}