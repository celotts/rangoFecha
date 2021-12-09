import moment = require("moment");
import { FechaPeriodoMes } from "./fechaPeriodoMes";
export class FechaPeriodoMesAno extends FechaPeriodoMes {
  periodo: number;
  year: number;
  constructor(rangoFecha, periodo, year) {
    super(rangoFecha, periodo);
    this.periodo = periodo;
    this.year = year;
  }
  validaPeriodoYear() {
    console.log("validaPeriodoYear");
    let desde = moment(this.desde, "DD-MM-YYYY");
    let hasta = moment(this.hasta, "DD-MM-YYYY");
    if (this.validaRangoFechas()) {
      if (hasta.diff(desde, "years") <= this.year) {
        return true;
      }
      return false;
    }
    return false;
  }
}
