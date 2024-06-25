import { StaticImageData } from "next/image";
import photo1 from "/public/assets/imgs/users/photo1.jpg";
import photo2 from "/public/assets/imgs/users/photo2.jpg";
import photo3 from "/public/assets/imgs/users/photo3.jpg";

interface UserTestimonialsModel {
    id: number;
    image: StaticImageData;
    name: string;
    testimonial: string;
}

export const userTestimonials: UserTestimonialsModel[] = [
    {
        id: 1,
        image: photo1,
        name: "Carla Menezes",
        testimonial:
            "O Bee Done revolucionou minha rotina! Antes, me sentia perdida com tantas tarefas. Agora, consigo visualizar todas as minhas atividades e priorizá-las de forma eficaz. A interface é intuitiva e a colaboração com minha equipe nunca foi tão fácil. Recomendo demais!",
    },
    {
        id: 2,
        image: photo2,
        name: "João Carvalho",
        testimonial:
            "Trabalho com gestão de projetos e o Bee Done é uma ferramenta indispensável para mim. A organização no estilo Kanban simplificou a forma como acompanho o progresso das tarefas. A produtividade da minha equipe aumentou significativamente. Estamos muito satisfeitos!",
    },
    {
        id: 3,
        image: photo3,
        name: "Ana Paula Oliveira",
        testimonial:
            "O Bee Done me ajudou a equilibrar minhas tarefas pessoais e profissionais. A possibilidade de criar quadros personalizados e definir prioridades fez toda a diferença. Agora, sinto que tenho controle total sobre minhas atividades diárias. É simplesmente fantástico!",
    },
];
