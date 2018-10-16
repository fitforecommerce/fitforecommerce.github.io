---
layout: tutorial
title: "Tutorial: PrestaCollege einsetzen [DE]"
subtitle: "Ein Modul für den Unterrichtseinsatz von Prestashop"
date: 2018-09-25 08:30:00
author: "Martin Kolb"
header-img: "img/2018-06-18-prestashop-installieren/presta_header.jpg"
tags: tutorial
---
**Update am 16.10.2018** - Das Modul PrestaCollege wurde entwickelt, um erfolgreiches Unterrichten mit dem Shopsystem Prestashop zu erleichtern. Diese Tutorial zeigt, wie man das Modul installieren und einsetzen kann.

## Installation des Moduls
1. Laden Sie die aktuelle Version von der [Github Projektseite](https://github.com/fitforecommerce/prestacollege/releases) herunter. {% include imgclick.html alt="Die Github Releases Seite" src="/img/2018-09-25-prestacollege-installieren/01_github_download.png" %}
2. Öffnen Sie das Backend Ihrer Prestashop-Installation und wählen Sie den Menupunkt "Module". 
3. Klicken Sie auf den Befehl "Modul hochladen". {% include imgclick.html alt="Befehl Modul hochladen" src="/img/2018-09-25-prestacollege-installieren/02_install_module_start.png" %}
4. Ziehen Sie die heruntergeladene ZIP-Datei in das Pop-Up-Fenster. {% include imgclick.html alt="ZIP-Datei hochladen" src="/img/2018-09-25-prestacollege-installieren/03_upload_module.png" %}
5. Das Modul wird installiert und Sie sollten eine Erfolgsmeldung erhalten.{% include imgclick.html alt="ZIP-Datei hochladen" src="/img/2018-09-25-prestacollege-installieren/05_install_success.png" %}

## Fehlerbehebung bei der Installation
### Fehler "Modul darf max. X MB groß sein"
Tritt dieser Fehler auf, so ist die maximale Dateigröße für Uploads beschränkt. Diese Einstellung muss in der php.ini, der zentralen Einstellungsdatei für PHP behoben werden. Je nach Hosting-Art kann dies auf folgende Art und Weise behoben werden: 

* **Lokales Hosting über XAMP:** Öffnen Sie die Konfigurationsdatei 'php.ini' - ändern Sie den Eintrag ´´upload_max_filesize=2M´´ in z.B. ´´upload_max_filesize=64M´´ um Uploads von maximal 64 Megabyte zu erlauben. {% include imgclick.html alt="" src="/img/2018-09-25-prestacollege-installieren/09_xampp_open_php_ini.png" %} {% include imgclick.html alt="" src="/img/2018-09-25-prestacollege-installieren/10_xampp_phpini_edit.png" %}
* **Hosting mit PLESK:** Klicken Sie unter der jeweiligen Domain auf "PHP-Einstellungen" und setzen dann auf der folgenden Seite den Wert ´´´upload_max_filesize´´´ {% include imgclick.html alt="" src="/img/2018-09-25-prestacollege-installieren/11_plesk_hosting_einstellungen.png" %} {% include imgclick.html alt="" src="/img/2018-09-25-prestacollege-installieren/12_plesk_php_file_size.png" %}

## Laden von Shop-Daten von einer URL
Hierzu benötigen Sie eine Internetadresse (URL) unter der ein gültiger PrestaCollege-Snapshot gespeichert ist. Gehen Sie dann wie folgt vor:

1. Geben Sie die URL des Snapshots in das Text-Eingabefeld ein. Achten Sie darauf, dass Sie zwischen Datenbank-Snapshot und Datei-Snapshot unterscheiden! {% include imgclick.html alt="ZIP-Datei hochladen" src="/img/2018-09-25-prestacollege-installieren/06_download_db_snapshot.png" %} {% include imgclick.html alt="ZIP-Datei hochladen" src="/img/2018-09-25-prestacollege-installieren/07_download_file_snapshot.png" %}
2. Klicken Sie auf "Datenbank-Snapshot hochladen" bzw. "Datei-Snapshot hochladen". Der Snapshot wird geladen, bitte haben Sie etwas Geduld - das Laden kann einige Sekunden bis Minuten dauern.
3. Nachdem Sie den Snapshot hochgeladen haben, taucht er im Auswahlfeld unter "Snapshot importieren" auf (Falls nicht, laden Sie die Seite bitte erneut). Nun können Sie diesen Snapshot importieren, indem Sie auf den Button "Snapshot importieren" klicken. {% include imgclick.html alt="ZIP-Datei hochladen" src="/img/2018-09-25-prestacollege-installieren/08_snapshot_select.png" %}
4. Löschen Sie nach dem Import den Cache von Prestashop und die Daten bzw. Dateien sollten importier sein.