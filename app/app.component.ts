import {Component, OnInit} from "@angular/core";
import {BarcodeScanner} from "nativescript-barcodescanner";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  wanted: string;
  barcodescanner: BarcodeScanner;

  ngOnInit() {
    this.wanted = this.generateRandomText();
    this.barcodescanner = new BarcodeScanner();
    this.barcodescanner.hasCameraPermission()
      .then((granted) => {
        if (!granted) {
          this.barcodescanner.requestCameraPermission();
        }
      });
  }

  scan() {
    this.barcodescanner.scan({
      formats: "QR_CODE",
      message: "Code to find: " + this.wanted,
      continuousScanCallback: (result) => {
        console.log(`SCANNED: ${result.text} WANTED: ${this.wanted}`);
        if (result.text == this.wanted) {
          this.barcodescanner.stop();
          console.log("Valid code!");
        } else {
          console.log("Invalid code!");
        }
      }
    })
      .then((result) => {
      }, (error) => {
        console.log("No scan: " + error);
      });
  }

  private generateRandomText() {
   let text = "";
   let possible = "abcdefghijklmnopqrstuvwxyz";
   for (let i=0; i<5; i++) {
     text += possible.charAt(Math.floor(Math.random() * possible.length));
   }

   return text;
  }
}
