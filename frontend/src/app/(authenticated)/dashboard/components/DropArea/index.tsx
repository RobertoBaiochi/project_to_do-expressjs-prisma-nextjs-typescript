import { ReactElement, useState } from "react";
import styles from "./droparea.module.css";
import { updateIndexTask } from "@/services/api-requests/update-index-task";

interface DropAreaProps {
    handleOnDrop: () => Promise<void>;
    children?: ReactElement;
    indexArray: number;
}

export const DropArea = ({
    handleOnDrop,
    children,
    indexArray,
}: DropAreaProps) => {
    const [showDrop, setShowDrop] = useState<boolean>(false);

    const handle = async () => {
        await handleOnDrop();
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
            {children || `Drag here - ${indexArray}`}
        </div>
    );
};
