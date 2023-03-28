// Modules
const { dialog } = require("electron")
const { autoUpdater } = require("electron-updater")

// Configure log debugging
autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "debug"

// Disable auto downloading of updates
autoUpdater.autoDownload = false

// Single export to check for and apply any available updates
export const updater = () => {

    // Check for update (GH Releases)
    autoUpdater.checkForUpdates()

    // Listen for update found
    autoUpdater.on("update-available", () => {

        // Prompt user to start download
        dialog.showMessageBox({
            type: "info",
            title: "Update available",
            message: "A new version of consulting overview is available. " +
                "Do you want to to update now?",
            buttons: ["Update", "No"],
            noLink: true
        })
            .then(result => {
                let button_index = result.response

                // If button 0 (Update), start downloading the update
                if(button_index === 0){
                    autoUpdater.downloadUpdate()
                }
            })
    })

    // Listen for update downloaded
    autoUpdater.on("update-downloaded", () => {

        // Prompt the user to install the update
        dialog.showMessageBox({
            type: "info",
            title: "Update ready",
            message: "Install & restart now?",
            buttons: ["Yes", "Later"],
            noLink: true
        })
            .then(result => {
                let button_index = result.response

                // Install & restart If button 0 (Yes)
                if(button_index === 0){
                    autoUpdater.quitAndInstall(false, true)
                }
            })
    })

}