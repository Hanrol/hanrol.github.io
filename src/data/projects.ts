import examenFullStack from '../assets/images/Proyecto-Examen FullStack I.png'
import mediReservas from '../assets/images/Proyecto-MediReservas.png'
import portafolio from '../assets/images/Proyecto-Portafolio.png'

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
