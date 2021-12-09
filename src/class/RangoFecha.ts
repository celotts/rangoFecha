import moment = require("moment");

export interface IFechasRango {
  desde: string;
  hasta?: string;
  cantMeses?: number;
  validaRangoFechas(fechas: IFechasRango, cantMeses: number): boolean;
}

export class RangoFecha implements IFechasRango {
  validaPeriodoYear() {
    throw new Error("Method not implemented.");
  }
  hasta: any;
  desde: any;
  cantMeses = 1;
  constructor(fechas: any) {
    this.desde = fechas.desde || this.newFecha();
    if (fechas.hasta === undefined) {
      this.hasta = "";
    } else {
      this.hasta = fechas.hasta || this.newFecha();
    }
  }

  private newFecha(): string {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) {
      return `${day}/0${month}/${year}`;
    }
    return `${day}-${month}-${year}`;
  }
  private formatoFecha(day, month, year): string {
    if (month < 10) {
      return `${day}/0${month}/${year}`;
    }
    return `${day}-${month}-${year}`;
  }

  validaRangoFechas(): boolean {
    let desde = moment(this.desde, "DD/MM/YYYY");
    let hasta = moment(this.hasta, "DD/MM/YYYY");
    if (desde.isAfter(hasta)) {
      return false;
    }
    return true;
  }
}
