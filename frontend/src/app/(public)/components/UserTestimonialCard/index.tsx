import Image, { StaticImageData } from "next/image";
import styles from "./usertestimonial.module.css";

interface UserTestimonialCardProps {
    image: StaticImageData;
    name: string;
    testimonial: string;
}

export const UserTestimonialCard = (user: UserTestimonialCardProps) => {
    return (
        <div className={styles.card_container}>
            <Image
                src={user.image}
                alt=""
                width={500}
                height={500}
                className={styles.image}
            />
            <h2 className={styles.name}>{user.name}</h2>
            <p className={styles.text}>{user.testimonial}</p>
        </div>
    );
};
