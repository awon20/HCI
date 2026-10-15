# HCI · Sketchbox-Prototyp

Experimenteller React-Prototyp für Human-Computer Interaction mit Zeichenflächen, Board-Verwaltung und Medienaufnahme.

## Umfang

- Zeichen- und Board-Komponenten
- Oberflächen für Kamera-, Mikrofon- und Aufnahmefunktionen
- Lokaler Socket.IO-Demoserver

## Firebase ist zur Stilllegung vorgesehen

Die Anwendung soll nicht mehr auf Firebase zugreifen. Im bisherigen Hauptbranch kann die alte Anbindung noch enthalten sein. Der unten verlinkte Wartungs-PR entfernt den Clientzugriff und bereitet Firestore- und Storage-Regeln mit `allow read, write: if false;` vor.

Diese Repository-Änderungen veröffentlichen noch keine Regeln in Firebase. Alte Deployments, Download-Token und administrative Zugänge müssen separat geprüft beziehungsweise deaktiviert werden. Gespeicherte Daten werden dadurch nicht gelöscht. Den alten Stand nicht erneut mit Firebase verbinden.

## Wartungsstand

Die Sicherheits- und Abhängigkeitsänderungen werden in [PR #4](https://github.com/awon20/HCI/pull/4) verfolgt. Sie sind noch nicht in den Quellcode-Hauptbranch übernommen. Die README-Ergänzung führt diesen Pull Request nicht zusammen.

## Lokal starten

Die folgenden Befehle verwenden ausdrücklich den vorbereiteten Wartungsbranch. Dessen Änderungen sind noch in Prüfung; offene Paketwarnungen stehen im zugehörigen PR. Der bisherige Hauptbranch verwendet teilweise ältere Build-Werkzeuge und kann mit neueren Node-Versionen fehlschlagen.

Voraussetzungen: Git, Node.js und npm. Die lokalen Web-Builds des Wartungsstands wurden mit Node.js 24.19.0 und npm 11.21.0 geprüft. Ein erfolgreicher Build bedeutet keine vollständige Behebung aller Paketwarnungen.

```sh
git clone --branch codex/security-maintenance-2026-10-13 https://github.com/awon20/HCI.git
cd HCI
npm ci --ignore-scripts
npm start
```

Die vom Entwicklungsserver ausgegebene lokale Adresse öffnen. Zum Beenden im Terminal `Ctrl+C` drücken.

## Build und Prüfungen

```sh
npm run build
npm audit
```

Der statische Web-Build liegt in `build/`. `npm test` startet den konfigurierten Test-Runner; die Existenz des Skripts allein belegt keine vollständige Testabdeckung.

## Optionaler lokaler Demoserver

Im Wartungsstand lässt sich der Socket.IO-Demoserver aus dem Projektstamm mit `node server/index.js` starten. Er lauscht auf `127.0.0.1:8081` und besitzt keine Benutzerauthentifizierung. Kamera- und Mikrofonfunktionen erfordern eine Freigabe im Browser.

## Projektstruktur

- [`src/components`](https://github.com/awon20/HCI/tree/main/src/components)
- [`src/pages`](https://github.com/awon20/HCI/tree/main/src/pages)
- [`src/hooks`](https://github.com/awon20/HCI/tree/main/src/hooks)
- [`server`](https://github.com/awon20/HCI/tree/main/server)

## Beiträge

Änderungen mit einer kurzen Beschreibung und passenden Prüfergebnissen als Pull Request einreichen. Keine Zugangsdaten, privaten Schlüssel oder lokalen Abhängigkeitsordner hinzufügen.

## Lizenz

Siehe [LICENSE](https://github.com/awon20/HCI/blob/main/LICENSE).

<details>
<summary>Bisherige Projektnotizen (historischer Stand)</summary>

Die folgenden Hinweise bleiben als ursprüngliche Dokumentation erhalten. Für den aktuellen Wartungsstand gelten die Angaben oben.

# HCI
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>
