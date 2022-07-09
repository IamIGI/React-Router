import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className="Missing">
            <h2> Page not found</h2>
            <p>
                Sometimes life gets in the way, but don't worry about it. <br /> You're wonderful
            </p>
            <p>
                {' '}
                <Link to="/">Visit Our Homepage</Link>
            </p>
        </main>
    );
};

export default Missing;
