import {useState, useTransition} from "react";
import {createRoot} from "react-dom/client";

function SearchBar() {
    const [text, setText] = useState("");
    const [results, setResults] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        // Urgent
        setText(e.target.value);

        // Non-Urgent
        startTransition(() => {
            setResults(e.target.value);
        });
    };

    return (
        <div>
            <input value={text} onChange={handleChange} />
            {/* isPending이 true일 때 Loading 표시, 
                false일 때 검색 결과 표시 */}
            {isPending ? (<p>Loading...</p>) : (<p>Search result for : {results} </p>)}
        </div>
    );
}

createRoot(document.getElementById('root')).render(<SearchBar />);
