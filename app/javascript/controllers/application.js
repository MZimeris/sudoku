import { Application } from "@hotwired/stimulus"
import highlight from "controllers/highlight"
const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
export { highlight }
