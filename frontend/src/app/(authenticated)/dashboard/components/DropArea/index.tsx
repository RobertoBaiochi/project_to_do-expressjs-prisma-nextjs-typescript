import { ReactElement, useState } from "react";
import styles from "./droparea.module.css";

interface DropAreaProps {
    handleOnDrop: () => void;
    children?: ReactElement;
}

export const DropArea = ({ handleOnDrop, children }: DropAreaProps) => {
    const [showDrop, setShowDrop] = useState<boolean>(false);

    const handle = () => {
        handleOnDrop();
        setShowDrop(false);
    };

    return (
        <div
            className={showDrop ? styles.show_drop_area : styles.hide_drop_area}
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            onDrop={handle}
            onDragOver={(e) => e.preventDefault()}
        >
            {children || "Drag Here"}
        </div>
    );
};
