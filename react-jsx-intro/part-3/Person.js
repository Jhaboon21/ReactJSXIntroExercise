function Person({name, age, hobbies}) {
    const vote = age >= 18 ? "please go vote!" : "you must be 18.";

    const hobbyArr = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {name.slice(0, 6)}</li>
                <li>Age: {age}</li>
                <p>Hobbies:</p>
                <ul>
                    {hobbyArr}
                </ul>
            </ul>
            
            <h3>{vote}</h3>
        </div>
    );
}