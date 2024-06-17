import { ReactElement } from "react";

interface ModalProps {
    closeModal: () => void;
    children: ReactElement;
}

export const Modal = ({ closeModal, children }: ModalProps) => {
    return <section onClick={closeModal}>{children}</section>;
};
