import React, {useEffect, useState} from "react";
import "./Spinner.css";

const Spinner = ({loading, isSection=false}) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (loading) {
            // Show spinner immediately when loading starts
            setIsVisible(true);
        } else {
            // Delay hiding spinner to complete fade-out animation
            const timeout = setTimeout(() => setIsVisible(false), 500);
            return () => clearTimeout(timeout); // Cleanup timeout on unmount or new loading state
        }
    }, [loading]);

    return isVisible && (
        <div className={`spinner-container ${!loading ? 'hidden' : ''} ${isSection ? "spinner-section" : ""}`}>
            <div className="spinner"></div>
        </div>
    );
}
    ;

    export default Spinner;