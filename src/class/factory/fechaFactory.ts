import { FechaPeriodoMes } from "../fechaPeriodoMes";
import { FechaPeriodoMesAno } from "../fechaPeriodoMesAno";
import { RangoFecha } from "../RangoFecha";

export class FechaFactory {
  factoryClass = "";
  constructor(nameClass) {
    this.factoryClass = nameClass;
  }

  activeFactory(rangoFecha, periodoMes = 0, periodoAno = 0) {
    console.log(this.factoryClass);
    if (this.factoryClass == "fecha") {
      return new RangoFecha(rangoFecha);
    }
    if (this.factoryClass == "periodoMes") {
      return new FechaPeriodoMes(rangoFecha, periodoMes);
    }
    if (this.factoryClass == "periodoMesAno") {
      return new FechaPeriodoMesAno(rangoFecha, periodoMes, periodoAno);
    }
    return new RangoFecha(rangoFecha);
  }
}
