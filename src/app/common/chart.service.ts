declare let require;
import {Injectable} from "@angular/core";
const CHART = require('../../../node_modules/chart.js/dist/Chart.js');
@Injectable()
export class ChartService {
  instantiate(ctx,opt): CHART {
    return new CHART(ctx,opt);
  }
}
