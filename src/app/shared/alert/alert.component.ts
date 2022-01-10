import {
  Component, EventEmitter, Input, Output,
} from "@angular/core";

@Component(
  {
    selector: "app-allert",
    styleUrls: ["./alert.component.css"],
    templateUrl: "./alert.component.html",
  },
)
export class AlertComponent {
  @Input()mensagem :string;

  @Output() fecharModal = new EventEmitter<boolean>(true);

  fechar() {
    this.fecharModal.emit(null);
  }
}
