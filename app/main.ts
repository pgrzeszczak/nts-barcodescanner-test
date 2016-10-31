// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SecondComponent } from "./second.component";
import { MainComponent } from "./main.component";
import { routes } from "./app.routes";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    declarations: [MainComponent, AppComponent, SecondComponent],
    bootstrap: [MainComponent],
    imports: [
      NativeScriptModule,
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes)
    ]
})
class AppModule {}

platformNativeScriptDynamic().bootstrapModule(AppModule);
