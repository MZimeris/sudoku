// app/javascript/controllers/highlight_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("ça commence à me gonfler")
    // Récupérer toutes les cellules
    const cells = Array.from(this.element.querySelectorAll('.cell'));

    // Parcourir les cellules et ajouter un écouteur d'événement pour le clic
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        // Supprimer la surbrillance de toutes les cellules
        cells.forEach(cell => cell.classList.remove('highlighted'));

        // Ajouter la surbrillance à la cellule sélectionnée
        cell.classList.add('highlighted');
      });
    });
  }
}
