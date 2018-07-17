---
layout: tutorial
title: "Einen Webshop mit Passwort schützen"
subtitle: "Wie kann ich meinen Webshops gegen ungewollten Zugriff von außen schützen? [DE]"
date: 2018-07-16 10:30:00
author: "Martin Kolb"
header-img: "img/2018-06-18-prestashop-installieren/presta_header.jpg"
tags: tutorial
---

Beim Unterrichtseinsatz von Webshops, ist es aus rechtlichen Gründen auf jeden Fall zu empfehlen, einen Kennwortschutz einzurichten, um den Zugriff von Außenstehenden auf den Shop zu verhindern. Diese Anleitung zeigt kurz, wie man dazu vorgeht.

## Verzeichnisschutz über den Hosting-Provider
Häufig bieten Hosting-Provider bereits in ihrer Administrationsoberfläche an, einen Passwortschutz einzurichten. Falls diese Möglichkeit vorhanden ist, sollte man diese auch nutzen. Anleitungen dazu bieten die Hosting-Anbieter in der Regel auf ihren Support-Seiten an. Hier eine kurze Liste zu ausgewählten Hosting-Providern:

* [1und1 Verzeichnisschutz einrichten](https://hilfe-center.1und1.de/hosting/1und1-webhosting-c10085285/webspace-und-zugaenge-c10085091/verzeichnisschutz-c10085367/verzeichnisschutz-im-1und1-control-center-einrichten-a10790593.html)
* [Strato Hosting FAQ - Kann ich einzelne Verzeichnisse fuer bestimmte Nutzer Nutzergruppen mit einem Passwort schuetzen?](https://www.strato.de/faq/article/818/Kann-ich-einzelne-Verzeichnisse-fuer-bestimmte-Nutzer-Nutzergruppen-mit-einem-Passwort-schuetzen.html)
* Falls Ihr Hosting-Provider das Plesk-Administrationssystem verwendet, finden Sie eine Anleitung hier: [https://docs.plesk.com](https://docs.plesk.com/de-DE/onyx/customer-guide/websites-und-domains/einschränken-des-zugriffs-auf-inhalte.65152/)

## Verzeichnisschutz manuell einrichten
Der Verzeichnisschutz kann auch leicht manuell eingerichtet werden. Dazu teilen wir dem Web-Server über eine Textdatei mit, dass er für ein Verzeichnis ein Kennwort anfordern soll, bevor er die Dateien in dem Verzeichnis an den Besucher übermittelt. Diese Anleitung geht davon aus, dass der Shop über die gängigste Webserver-Software Apache bzw. über Nginx/Apache betrieben wird.

<div class='alert-info' markdown='1'>
Sie können die Erstellung eines Verzeichnisschutzes auch mit Ihrem lokalen Webserver und Webshop ausprobieren (siehe [Tutorial: Einen Webshop lokal installieren](/tutorials/2018-06-18-prestashop-installieren/))
</div>

### Die Funktionsweise des Kennwortschutzes über HTPPasswd
Grundsätzlich funktioniert der Kennwortschutz mit .htacess/.htpasswd mit zwei Dateien.

* **.htpasswd**:In dieser Datei wird der Benutzername und das verschlüsselte Kennwort (korrekterweise ein [MD5-Hash des Kennworts](https://de.wikipedia.org/wiki/Message-Digest_Algorithm_5)) gespeichert.
* **.htaccess**: In dieser Datei steht die Anweisung für den Webserver, nur die in der .htpasswd-Datei aufgeführten Benutzer nach Eingabe des Kennworts Zugriff auf den geschützten Bereich zu gewähren.

### Die Kennwortdatei generieren
Wir werden nun zunächst die .htpasswd-Datei mit dem Benutzernamen und Kennwort erstellen. Öffnen Sie dazu die Seite [http://www.htaccesstools.com/htpasswd-generator/](http://www.htaccesstools.com/htpasswd-generator/). Geben Sie dort den gewünschten Benutzernamen und Kennwort ein.
![02 Htaccess Fertig](/img/2018-07-17-verzeichnis-schutz-erstellen/02-htpasswd-fertig.png)

Klicken Sie auf "Create .htpasswd file" und es öffnet sich die folgende Seite mit dem Inhalt der .htpasswd-Datei: 
![02 Htaccess Fertig](/img/2018-07-17-verzeichnis-schutz-erstellen/02-htpasswd-fertig.png)

Kopieren Sie nun den Text aus dem Textfeld in einen Texteditor und speichern Sie die Datei unter dem Namen ".htpasswd" ab.

### Die Regeln für den Zugriff erstellen
Im zweiten Schritt generieren wir nun die .htaccess-Datei, die den Zugriff auf das Verzeichnis regeln soll. Dazu öffnen wir die Seite [http://www.htaccesstools.com/htaccess-authentication/](http://www.htaccesstools.com/htaccess-authentication/) und geben dort einen kurzen Begrüßungstext ein, der im Anmeldefenster des geschützten Bereichs erscheinen wird. Im zweiten Eingabefeld muss der **absolute Pfad(!)** der .htpasswd-Datei eingegeben werden, in der die Zugangsdaten gespeichert sind.

![04 Htaccess Erstellen](/img/2018-07-17-verzeichnis-schutz-erstellen/04-htaccess-erstellen.png)

<div class='alert-info' markdown='1'>
Den absoluten Pfad können Sie zum Beispiel auf folgende Art herausfinden:

Erstellen Sie eine PHP-Datei mit folgendem Inhalt und laden diese in das von Ihnen vorgesehene Verzeichnis des Webservers hoch.

``` php
<?php
$dir = dirname(__FILE__);
echo "<p>Full path to this dir: " . $dir . "</p>";
echo "<p>Full path to a .htpasswd file in this dir: " . $dir . "/.htpasswd" . "</p>";
?>
````
![05 Htaccess Texteditor](/img/2018-07-17-verzeichnis-schutz-erstellen/05-htaccess-texteditor.png)
</div>

Rufen Sie die Seite im Browser über die Webserver-Adresse auf und Sie erhalten den absoluten Pfad zum Verzeichnis.
![06 Htaccess Pfad](/img/2018-07-17-verzeichnis-schutz-erstellen/06-htaccess-pfad.png)

Geben Sie diesen Pfad in die Maske der Website htaccesstools ein.

**Wichtig:** Wenn Sie Windows verwenden, ersetzen Sie die Backslashes \ durch "normale" Slashes / (siehe Screenshot).

![07 Htaccess Pfad Seite](/img/2018-07-17-verzeichnis-schutz-erstellen/07-htaccess-pfad-seite.png)

Speichern Sie die Datei unter dem Namen .htaccess und laden Sie sie ebenfalls in das vorgesehene Verzeichnis des Webservers hoch. Ihr zu schützendes Verzeichnis sollte nun folgende Dateien beinhalten:

```
│Mein geschütztes Verzeichnis
├── .htaccess
├── .htpasswd
├── … andere Dateien
```

Rufen Sie nun im Browser eine Datei im geschützten Verzeichnis auf. Anstelle der Datei sollte nun ein Anmeldefenster in Ihrem Browser erscheinen, das das vergebene Kennwort abfragt.

![08 Htaccess Login](/img/2018-07-17-verzeichnis-schutz-erstellen/08-htaccess-login.png)