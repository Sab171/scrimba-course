import Casa from "./images/Casablanca.jpeg"
import Fuji from "./images/Fuji.jpeg"
import Sidney from "./images/Sidney.jpeg"


export default [
    {
        id: 1,
        location: "Mount Fuji",  /* == location */
        country: "JAPAN",
        maps_link: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        image: Fuji,
    },
    {
        id: 2,
        location: "Casablanca",  /* == location */
        country: "MOROCCO",
        maps_link: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "27 May, 2021",
        endDate: "8 Jun, 2021",
        description: "Casablanca is the largest city in Morocco, known for its modern architecture and lively atmosphere. Located on the Atlantic coast, it boasts a bustling port and a vibrant cultural scene. Visitors can explore the grand Hassan II Mosque, wander the charming Old Medina, or enjoy the city's many cafes and restaurants.",
        image: Casa,
    },
    {
        id: 3,
        location: "Sydney Opera House",  /* == location */
        country: "AUSTRALIA",
        maps_link: "https://goo.gl/maps/S1SABs6irtkS9jwD9",
        startDate: "01 Oct, 2021",
        endDate: "18 Nov, 2021",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        image: Sidney,
    }
]