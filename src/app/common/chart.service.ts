declare let require;
import {Injectable} from "@angular/core";
import { Chart } from "../../../node_modules/chart.js/dist/Chart.js";
const CHART = require('../../../node_modules/chart.js/dist/Chart.js');
@Injectable()
export class ChartService {
  instantiate(ctx,opt): Chart {
    return new Chart(ctx,opt);
  }
}
