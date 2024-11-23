import React, {useEffect, useState} from "react";
import "./Spinner.css";

const Spinner = ({loading, isSection=false, isElement=false}) => {

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

    const getClassName = () => {
        const defaultClass = "spinner-container";
        const elementClass = isElement ? "spinner-element" : "";
        const sectionClass = isSection ? "spinner-section" : "";
        return `${defaultClass} ${elementClass} ${sectionClass}`;
    }

    return isVisible && (
        <div className={`${getClassName()} ${!loading ? "hidden" : ""}`}>
            <div className="spinner"></div>
        </div>
    );
}
    ;

    export default Spinner;