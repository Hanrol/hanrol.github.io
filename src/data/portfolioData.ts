import examenFullStack from '../assets/images/Proyecto-Examen FullStack I.png'
import mediReservas from '../assets/images/Proyecto-MediReservas.png'
import portafolio from '../assets/images/Proyecto-Portafolio.png'

export const education = [
    {
        period: '2025 - Actualidad',
        institution: 'Duoc UC',
        program: 'Ingeniería en Informática',
    },
    {
        period: '2023 - 2024',
        institution: 'Universidad Técnica Federico Santa María',
        program: 'Ingeniería Civil en Informática',
    },
    {
        period: '2019 - 2022',
        institution: 'Liceo Bicentenario Italia',
        program: 'Enseñanza media',
    },
    {
        period: '2010 - 2018',
        institution: 'Escuela Hermanos Matte',
        program: 'Enseñanza básica',
    },
]

export const experience = [
    {
        period: 'Julio 2025 - Diciembre 2025',
        role: 'Ayudante del área de informática',
        company: 'Duoc UC',
        description: 'Apoyo en la organización y realización de eventos y charlas del área informática. Preparación de puestos, orden y acondicionamiento de salas, orientación a asistentes y explicación de las actividades y proyectos presentados. Colaboración con docentes y otros ayudantes para asegurar el correcto desarrollo de cada evento.',
    },
    {
        period: 'Diciembre 2024 - Febrero 2025',
        role: 'Operario de bodega, área administrativa',
        company: 'Blue Express · Part-time',
        description: 'Responsable de controlar vuelos y cargas que llegaban a la bodega desde aduanas, la principal tarea consistía en completar datos en múltiples tablas de Excel.',
    },
]

export const skillGroups = [
    {
        category: 'Técnicas',
        skills: ['HTML, CSS y JavaScript', 'Python', 'Java', 'C/C++', 'Excel'],
    },
    {
        category: 'Idiomas',
        skills: ['Inglés intermedio'],
    },
    {
        category: 'Personales',
        skills: ['Trabajo en equipo', 'Organización', 'Resolución de problemas'],
    },
]

export const projects = [
    {
        title: 'MediReservas',
        description: 'MediReservas es un sistema de reservas médicas desarrollado bajo una arquitectura de microservicios con Spring Boot.',
        image: mediReservas,
        imageAlt: 'Vista previa del proyecto MediReservas',
        repositoryUrl: 'https://github.com/GabFloresLuna/MediReservas',
    },
    {
        title: 'Examen FullStack I',
        description: 'Resolución del Examen Transversal del ramo FullStack I.',
        image: examenFullStack,
        imageAlt: 'Vista previa del proyecto Examen FullStack I',
        repositoryUrl: 'https://github.com/Hanrol/ExamenTransversal-FullStack1',
    },
    {
        title: 'Portafolio y CV',
        description: 'Codigo fuente de esta misma página.',
        image: portafolio,
        imageAlt: 'Vista previa del proyecto Portafolio',
        repositoryUrl: 'https://github.com/Hanrol/hanrol.github.io',
    },
]
