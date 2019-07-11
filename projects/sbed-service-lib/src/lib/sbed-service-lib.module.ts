import { NgModule } from '@angular/core';
import { ServiceLibComponent } from './sbed-service-lib.component';
import { TelemetryGeneratorService } from './telemetry/telemetry-generator.service'

@NgModule({
  declarations: [ServiceLibComponent],
  imports: [
  ],
  exports: [ServiceLibComponent],
  providers : [TelemetryGeneratorService]
})
export class ServiceLibModule { }
