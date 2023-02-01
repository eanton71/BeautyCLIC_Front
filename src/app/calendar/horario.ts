export class Hora {
    hora: number;
    min: number;
    constructor(hora: number, minutos: number) {
        this.hora = hora;
        this.min = minutos;
    }
    addMinutos(min: number) { 
        this.min = (this.min + min) % 60;
        this.hora = this.hora + Math.floor((this.min + min) / 60);
    }
}

export class Horario<Hora> {
    horario: Hora[];
    length: number = 0;
    constructor(length: number) {
        this.horario = new Array(length);
    }
    getHorario() {
        return this.horario;
    }
    getHora(i:number) {
        return this.horario[i];
    }
    generarHorario(intervalo: number) { 
        let h:any = new Hora(9, 0);
        for (let i = 1; i < length; i++) {
            this.horario.push(h);
            h.addMinutos(intervalo);
        } 
    }
    push(hora: Hora) {
        this.horario.push(hora);
    }
}
