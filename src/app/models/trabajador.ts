export interface Trabajador {
    _id: string;
    nombre: string;
    apellidos: string;
    img: string;
    email: string;
    //1 a 5 son lunes a viernes 
    horario: {
        "1": [ 
        ],
        "2": [ 
        ],
        "3": [ 
        ],
        "4": [ 
        ],
        "5": [ 
        ]
    }
}