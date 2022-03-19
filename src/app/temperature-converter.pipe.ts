import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {

    if (value && !isNaN(value)) {

      if (unit === 'C') {
        var temperature = (value - 32) / 1.8;
        return temperature.toFixed(2);
      }
      if (unit === 'F') {
        var temperature = 1.8 * (value - 273) + 32;
        return temperature.toFixed(2);
      }
    }
    return;
  }

}
