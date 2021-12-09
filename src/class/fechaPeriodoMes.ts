import moment = require("moment");
import { RangoFecha } from "./RangoFecha";

export class FechaPeriodoMes extends RangoFecha {
  periodo: number;
  constructor(rangoFecha, periodo) {
    super(rangoFecha);
    this.periodo = periodo;
  }
  validaPeriodo() {
    let desde = moment(this.desde, "DD-MM-YYYY");
    let hasta = moment(this.hasta, "DD-MM-YYYY");
    if (this.validaRangoFechas()) {
      if (hasta.diff(desde, "months") <= this.periodo) {
        return true;
      }
      return false;
    }
    return false;
  }
}
