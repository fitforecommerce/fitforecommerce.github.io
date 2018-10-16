---
layout: tutorial
title: "Tutorial: Prestashop-Installation bei 1und1"
subtitle: "Beispiel wie man Prestashop bei 1und1 installieren kann [DE]"
date: 2018-07-31 08:30:00
author: "Andreas Loibl & Martin Kolb"
header-img: "img/2018-06-18-prestashop-installieren/presta_header.jpg"
tags: tutorial
---
In diesem Tutorial wird am Beispiel des Hosting-Providers 1und1 erklärt, wie man dort Prestashop zur Nutzung im Unterricht installieren kann. Herzlichen Dank an Andreas Loibl für die Bereitstellung der Notizen und Screenshots.


## Datenbank anlegen
Für jeden Shop muss eine Datenbank angelegt werden. Die Informationen zur Datenbank sind in einem späteren Schritt bei der Installation des Presta-Shops wieder erforderlich.

* <a href="https://1und1.de" target="_blank">Loggen Sie sich in Ihrem 1und1-Account ein.</a>
* Wählen Sie im Menu "MySQL-Datenbank" und dort den Befehl "Neue MySQL-Datenbank" {% include imgclick.html alt="Das 1und1 Hauptmenü" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-01.JPG" %}
* Erstellen Sie die Datenbank mit der Beschreibung: ShopXY (XY = die laufende Nummer des Shops)
* Vergeben Sie ein beliebiges Passwort, das wir später bei der Einrichtung von Prestashop benötigen werden {% include imgclick.html alt="Screenshot Datenbank erstellen" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-02.JPG" %}
* Kopien Sie die Datenbank Details, um später die Datenbankverbindung zu erstellen {% include imgclick.html alt="Zusammenfassung der Datenbank Details" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-03.JPG" %}
* Wiederholen Sie diesen Schritt, um alle erforderlichen Datenbanken zu erstellen (z.B. 10 Datenbanken für insgesamt 10 Shops)

## FTP Ordner für Shop erstellen (nur einmal erforderlich)
{% include imgclick.html alt="Screenshot einen neuen sicheren FTP-Zugang anlegen" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-04.JPG" %}

* Neuer sicherer FTP Zugang.
* Neuen Ordner erstellen: ecommerce und Kennwort vergeben
* Das Kennwort ist nicht für die späteren Verwender (Schüler) erforderlich. Es kann aber unter Umständen benötigt werden, um z.B. die CSS-Dateien des Shops zu bearbeiten

{% include imgclick.html alt="Zusammenfassung der Verbindungsdaten" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-05.JPG" %}
* Die Verbindungsdaten werden für die Verbindung mit dem FTP-Programm (z.B. Filezilla) benötigt

## Filezilla – Prestashop hochladen
Wir starten nun das FTP-Programm - in unserem Fall das kostenlos verfügbare Programm [Filezilla](https://filezilla-project.org). Zunächst müssen wir Filezilla so einrichten, dass wir Zugriff zu dem neu erstellen FTP-Zugang erhalten.

{% include imgclick.html alt="Die Filezilla Einstellungen" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-06.JPG" %}

* Öffnen Sie über das Menu den Befehl "Datei -> Servermanager"
* Tragen Sie die Daten ein, wie im letzten Schritt festgelegt, speichern Sie die Daten und verbinden Sie sich anschließend mit dem Server.

{% include imgclick.html alt="Der Filezilla Bildschirm nach der erfolgreichen Verbindung mit dem FTP-Server" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-07.JPG" %}
Wenn Sie alles richtig gemacht haben, sollten Sie sich erfolgreich mit dem Server verbinden können. Das Verzeichnis "/" bedeutet, dass Sie sich in dem neu angelegten Verzeichnis "ecommerce" auf dem Webserver befinden.

Erstellen Sie nun für jeden zu erstellenden Shop einen Unterordner mit der Bezeichnung "shop01", "shop02", usw.

Laden Sie nun Prestashop herunter, entzippen Sie den Download und laden Sie die Inhalte des Ordners "prestashop_1.7.XY" mit Filezilla in jedes der angelegten Shop-Verzeichnisse hoch. Es sollte sich folgende Datei-Struktur auf dem Server ergeben:

```
ecommerce 
├──shop01 
│  ├── Install_PrestaShop.html 
│  ├── index.php 
│  ├── prestashop 
│  └── prestashop.zip 
├──shop02 
│  ├── Install_PrestaShop.html 
│  ├── index.php 
│  ├── prestashop 
│  └── prestashop.zip 
├──shop03 
│  ├── Install_PrestaShop.html 
│  ├── index.php 
│  ├── prestashop 
│  └── prestashop.zip 
...
```
{% include imgclick.html alt="Die Dateistruktur in Filezilla" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-08.JPG" %}

## Subdomain für den Shop erstellen
Für den Unterrichtseinsatz empfiehlt es sich eine Subdomain zu erstellen, unter der die Shops später erreichbar sind. Die Adressen können dann zum Beispiel so gestaltet werden:

````
http://ecommerce.bs-musterstadt.de/shop01
http://ecommerce.bs-musterstadt.de/shop02
http://ecommerce.bs-musterstadt.de/shop03
````

* Wir verwenden dazu im 1und1 Hauptmenü den Punkt "Domains" und klicken in der Liste auf unsere Hauptdomain z.B. "bs-musterstadt.de".
* Rechts erscheint der Befehl "Subdomain erstellen", den wir auswählen.
* Als Name der Subdomain geben wir "ecommerce" ein. {% include imgclick.html alt="Der Dialog Subdomain erstellen" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-09.JPG" %}
* Im nächsten Schritt müssen wir die Verwendungsart der Subdomain festlegen. Wir wählen "Webspace verbinden" und wählen im folgenden Dialog den Ordner "ecommerce" aus, den wir mit Filezilla vorher angelegt haben. {% include imgclick.html alt="Verwendungsart anpassen" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-10.JPG" %}
{% include imgclick.html alt="Ordnerauswahl für den Befehl Webspace verbinden. " src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-11.JPG" %}

## Installation von Prestashop
Nachdem alle erforderlichen Dateien hochgeladen sind, werden wir den Prestashop-Installer aufrufen. Dazu starten wir den Browser und rufen die Adresse http://ecommerce.bs-musterstadt.de/shopXY auf, wobei XY durch die jeweilige Shopnummer ersetzt wird.

{% include imgclick.html alt="" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-12.JPG" %}

* Die Installation wird gestartet. Zunächst wird die zip-Datei auf dem Server entpackt, anschließend startet der Prestashop-Installer (siehe hierzu auch das [Tutorial: Einen Webshop lokal installieren](/tutorials/2018-06-18-prestashop-installieren/)).
* {% include imgclick.html alt="Zugangsdaten Administrator-Account anlegen" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-13.JPG" %} Geben Sie beim Schritt 4 der Installation die Zugangsdaten für Ihren Shop-Administrator ein. Es empfiehlt sich für alle Shops den **gleichen Administrator** mit identischem Kennwort anzulegen!
* {% include imgclick.html alt="Eingabe der Datenbank Zugangsdaten" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-14.JPG" %} Im nächsten Schritt sind die Datenbank-Zugangsdaten zum Shop anzugeben. Geben Sie hier die Daten aus dem Schritt "Datenbank anlegen" vom Beginn des Tutorials ein. Testen Sie die Datenbankverbindung. Bei Fehlern überprüfen Sie Ihre Zugangsdaten. {% include imgclick.html alt="Erfolgreicher Test der Datenbank-Verbindung" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-15.JPG" %}
* Die Installation von Prestashop sollte nun fertig gestellt werden können. {% include imgclick.html alt="Meldung der erfolgreichen Installation von Prestashop" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-16.JPG" %}

Nach der erfolgreichen Installation sind noch die folgenden Nacharbeiten in Filezilla zu erledigen:

1. Den Installationsordner in den Shops löschen. Der Pfad lautet ``shopXY/install``. Klicken Sie auf den Ordner mit der rechten Maustaste und wählen Sie "Löschen". {% include imgclick.html alt="" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-17.JPG" %}
2. Den Administrations-Ordner umbenennen von ``shopXY/admin``in z.B. "shopXY/admin0815". Diese Umbenennung ist eine Sicherheitsmaßnahme, die Prestashop erfordert, damit der Zugang zum Backend nicht leicht von Hackern erraten werden kann. Klicken Sie auf den Ordner mit der rechten Maustaste und wählen Sie "Umbenennen". {% include imgclick.html alt="" src="/img/2018-08-01-prestashop-1und1-installation/1und1-install-18.JPG" %}

<div class='alert-info' markdown='1'>
### Warum der gleiche Administrator-Account für alle Shops?
Ein einheitlicher Administrator-Zugang hat folgende Vorteile:

* Sie müssen sich nicht unterschiedliche Zugänge und Kennwörter merken.
* Sie können den Administrator-Zugang auch an Schüler weitergeben, damit diese zu Beginn der Arbeit mit dem Shop eigene Mitarbeiter-Accounts einrichten können.
* Der einheitliche Administrator-Zugang sollte nicht gelöscht werden und kann bei späteren Problemen mit Shops jederzeit als "Not-Zugang" von den Lehrkräften verwendet werden.
</div>

## Prestashop aufrufen
Rufen Sie nun den installierten Shop über die URL ``http://ecommerce.bs-musterstadt.de/shopXY`` auf. Das Backend können Sie über die Adresse ``http://ecommerce.bs-musterstadt.de/shopXY/admin0815`` erreichen.

Zusätzlich empfiehlt es sich, die Shops mit einem [Kennwortschutz zu versehen](/tutorials/2018-07-17-verzeichnis-schutz-erstellen/).