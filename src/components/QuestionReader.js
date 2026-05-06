import "./Components.css"

import { useEffect, useState } from "react";

function QuestionReader({ questionText, readingDelay, buzzed }) {

    const [questionReaderText, setQuestionReaderText] = useState("hey");

    useEffect(() => {

        let i = 0;

        const interval = setInterval(() => {
            if (!buzzed) {
                setQuestionReaderText(questionText.slice(0, i));
                i++;
            }
        }, readingDelay);

        // Cleanup
        return () => {
            clearInterval(interval);
        };

    }, [questionText, readingDelay, buzzed]);

    return (
        <div className="QuestionReader">

            <p style={{ marginTop: "0px" }}>{ questionReaderText }</p>

        </div>
    );
}

export default QuestionReader;