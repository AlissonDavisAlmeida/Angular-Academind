import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipes-edit",
  templateUrl: "./recipes-edit.component.html",
  styleUrls: ["./recipes-edit.component.css"],
})
export class RecipesEditComponent implements OnInit {
  id : number ;

  editMode : boolean = false;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) => {
      if (params.id !== undefined) {
        this.id = +params.id;
        this.editMode = true;
      }
    });
  }
}
