const App = () => (
    <div>
        <Tweet 
            name="fake name" 
            username="friedchicken"
            date={new Date().toDateString()}
            msg="This is the first tweet"
            />
        <Tweet 
            name="fake name2" 
            username="friedrice"
            date={new Date().toDateString()}
            msg="This is the second tweet"
        />
        <Tweet 
            name="fake name3" 
            username="frenchfrylover123"
            date={new Date().toDateString()}
            msg="This is the third tweet"
        />
    </div>
);