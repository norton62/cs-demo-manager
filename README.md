# CS Demo Manager - CLI Highlights Enhancement

This is a fork of the powerful CS Demo Manager desktop application, enhanced with a new, highly customizable command-line interface (CLI) tool for automatically generating player-specific highlights from Counter-Strike 2 demos.

The core purpose of this fork is to provide a "fire-and-forget" command that can be used for automation, scripting, or quickly generating clips without using the GUI.

---

## What's New: The `highlights` Command ✨

This fork introduces a new CLI command with the following key features:

* **Player-Specific Highlights**: Provide a demo file path and a player's SteamID64, and the tool will automatically launch the game and play *only* that player's kills.
* **Custom Resolution**: The game launch resolution can be easily configured in a settings file.
* **Automatic Game Shutdown**: Once the highlight playback is complete, the game will automatically close itself, making it perfect for automated workflows.
* **CLI-Driven**: The entire process is controlled from your terminal, providing detailed log output.

---

## Prerequisites

Before you begin, ensure you have the following installed and running:

* **Node.js**: Version 22 or higher.
* **PostgreSQL**: A running instance of a PostgreSQL database.
* **Counter-Strike 2**: Installed and configured on your machine.

---

## Setup ⚙️

Follow these steps to set up the development environment and configure the CLI tool.

### 1. Clone the Repository

Clone this forked repository to your local machine.

```bash
git clone <your-fork-repo-url>
cd <repo-folder>
```

### 2. Install Dependencies

Install all the necessary Node.js packages.

```bash
npm install
```

### 3. Configure the Application

The CLI tool reads its configuration from a `settings.json` file located in your user's application data folder. You must create this file manually.

* **Navigate to the settings folder.** The developer version of this app uses a hidden folder in your user directory. On Windows, this is:
    `C:\Users\<YourUser>\.csdm-dev\`
    *(You may need to create the `.csdm-dev` folder if it doesn't exist.)*

* **Create the settings file.** Inside that folder, create a new file named **`settings.json`**.

* **Add your configuration.** Copy and paste the template below into your `settings.json` file, and be sure to **replace the placeholder values** with your actual database credentials.

    ```json
    {
      "database": {
        "host": "127.0.0.1",
        "port": 5432,
        "user": "postgres",
        "password": "YOUR_DATABASE_PASSWORD_HERE",
        "database": "csdm"
      },
      "playback": {
        "width": 1920,
        "height": 1080,
        "closeGameAfterHighlights": true
      }
    }
    ```

---

## Usage 🚀

The CLI uses a two-terminal workflow for development.

### 1. Start the Builder

In your **first terminal**, run the build script. This will compile the application and watch for any code changes you make.

```bash
node scripts/develop-cli.mjs
```

Leave this terminal running in the background.

### 2. Run the `highlights` Command

In a **second terminal**, you can now run the `highlights` command.

**Syntax:**

```bash
node out/cli.js highlights "<path-to-demo-file>" "<player-steam-id-64>"
```

**Example:**

```bash
node out/cli.js highlights "C:\demos\mymatch.dem" "76561198015717598"
```

This will launch Counter-Strike 2, play all the highlights for the specified player, and then automatically close the game when finished.

---

## Acknowledgments

This project is a fork of the excellent [CS Demo Manager](https://github.com/akiver/cs-demo-manager). All credit for the core application, its architecture, and the user interface goes to the original authors.