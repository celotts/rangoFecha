/* import { FechaPeriodoMes } from "./class/fechaPeriodoMes";
import { RangoFecha } from "./class/RangoFecha";
 */ import moment = require("moment");
//import { FechaPeriodoMesAno } from "./class/fechaPeriodoMesAno";
import { FechaFactory } from "./class/factory/fechaFactory";

const yer = new Date();

//const classFactory = new FechaFactory("periodoMesAno");
const classFactory = new FechaFactory("periodoMesAno");

const factory = classFactory.activeFactory(
  {
    desde: moment("07/09/2019", "DD/MM/YYYY"),
    hasta: moment("08/12/2021", "DD/MM/YYYY"),
  },
  3,
  5
);

const resp = factory.validaPeriodoYear();
console.log(resp);
/* const fecha = new RangoFecha({
  desde: new Date("07/12/2021"),
  hasta: new Date("08/12/2021"),
}); */
/* const resp = fecha.validaRangoFechas();
console.log("qqqqqq", resp);
 */
/* const fechaPeriodo = new FechaPeriodoMes(
  {
    desde: moment("07/09/2021", "DD/MM/YYYY"),
    hasta: moment("08/12/2021", "DD/MM/YYYY"),
  },
  3
);
const resp2 = fechaPeriodo.validaPeriodo();
console.log("43534534532", resp2);
const fechaPeriodoYear = new FechaPeriodoMesAno(
  {
    desde: moment("07/09/2015", "DD/MM/YYYY"),
    hasta: moment("08/12/2021", "DD/MM/YYYY"),
  },
  3,
  5
);
const resp3 = fechaPeriodoYear.validaPeriodoYear();
console.log("56464575647---", resp3);
 */
