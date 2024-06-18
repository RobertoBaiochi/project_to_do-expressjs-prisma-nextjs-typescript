import { MouseEvent, ReactElement } from "react";
import styles from "./modal.module.css";
import { IoCloseOutline } from "react-icons/io5";
interface ModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactElement;
    titleModal: string;
}

export const Modal = ({ setOpenModal, children, titleModal }: ModalProps) => {
    const handleClick = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
        e.stopPropagation();
        setOpenModal((prev) => !prev);
    };

    return (
        <section className={styles.modal_container}>
            <article className={styles.article_container}>
                <div className={styles.action_container}>
                    <h1 className={styles.modal_title}>{titleModal}</h1>

                    <button onClick={handleClick} className={styles.modal_btn}>
                        <IoCloseOutline size={24} color="#fff" />
                    </button>
                </div>
                {children}
            </article>
        </section>
    );
};
