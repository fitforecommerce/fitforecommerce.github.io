---
layout: tutorial
title: "Tutorial: Einen Webshop lokal installieren"
subtitle: "Einen Webshop lokal installieren und testen [DE]<br>Update: 17.07.2018"
date: 2018-06-24 10:30:00
author: "Martin Kolb"
header-img: "img/2018-06-18-prestashop-installieren/presta_header.jpg"
tags: tutorial
---

*Dieser Artikel wurde am 17.07.2018 aktualisiert.* Im Zuge der Einführung des Ausbildungsberufs "Kaufmann/-frau im E-Commerce" stehen viele Schulen vor dem Problem ein Webshop-System für Unterrichtszwecke vorzuhalten. Ein System, mit der wir im Rahmen des Erasmus+ Projekts "Fit for E-Commerce" sehr gute Erfahrungen gemacht haben, ist Prestashop. Der folgende Artikel gibt eine kurze Einführung, wie man Prestashop auf einem lokalen Windows-Rechner installieren und betreiben kann.

## Was wird benötigt?
Um Prestashop lokal betreiben zu können benötigt man folgende Software:

1. Eine Web-Server-Anwendung zum Betrieb auf dem lokalen Rechner. Hier verwenden wir das Softwarepaket XAMPP. XAMPP ist kostenlos erhältlich und enthält den Webserver Apache, die Datenbank-Software MariaDB und die Programmiersprachen PHP und Perl.
2. Die eigentlich "Shop-Software", in unserem Fall Prestashop, die dann auf unserem Server betrieben wird. Prestashop ist in PHP programmiert und kann daher unter XAMPP betrieben werden.

## Installation von XAMPP
1. Download des Installationspakets: Laden Sie die XAMPP-Software von <a href="https://www.apachefriends.org/index.html" target="_blank">https://www.apachefriends.org/index.html</a> herunter. {% include imgclick.html src="/img/2018-06-18-prestashop-installieren/01-download-xampp.png" alt="01 Download Xampp" %}
2. Starten Sie den Installer in Ihrem Download-Verzeichnis. {% include imgclick.html alt="02 Download Folder" src ="/img/2018-06-18-prestashop-installieren/02-download-folder-installer.png" %}
3. Bestätigen Sie die Willkommens-Nachricht durch Klick auf 'Next'. {% include imgclick.html alt="03 Installer Welcome" src="/img/2018-06-18-prestashop-installieren/03-installer-welcome.png" %}
4. Wählen Sie die benötigten Komponenten aus. Dies sind in der Regel: Apache, MySQL, Mercury Mail Server, PHP und Perl. Die zusätzlichen Komponenten phpMyAdmin, Webalizer und Fake Sendmail sind empfehlenswert, aber nicht unbedingt notwenig. {% include imgclick.html alt="04 Installer Components" src="/img/2018-06-18-prestashop-installieren/04-installer-components.png" %}
5. Wählen Sie das Verzeichnis aus, in das XAMPP installiert werden soll. {% include imgclick.html alt="05 Installer Folder" src="/img/2018-06-18-prestashop-installieren/05-installer-folder.png" %}
6. Nach einem Werbeangebot werden die Dateien installiert. {% include imgclick.html alt="07 Installer Running" src="/img/2018-06-18-prestashop-installieren/07-installer-running.png" %}
7. Eventuell erscheint bereits während oder nach der Installation eine Sicherheitswarnung von Windows. Um Sicherheitsproblemen vorzubeugen empfiehlt es sich auf private Netzwerke zu beschränken (siehe Screenshot). {% include imgclick.html alt="08 Installer Firewall" src="/img/2018-06-18-prestashop-installieren/08-installer-firewall.png" %}
8. Die Installation ist abgeschlossen. {% include imgclick.html alt="09 Installer Complete" src="/img/2018-06-18-prestashop-installieren/09-installer-complete.png" %}

## Testen, ob XAMPP funktioniert
Nun wollen wir überprüfen, ob XAMPP korrekt arbeitet. Erledigen Sie dazu folgende Schritte:

1. Starten Sie das Programm XAMPP über das Start-Menu. {% include imgclick.html alt="10 Xampp Control Panel" src="/img/2018-06-18-prestashop-installieren/10-xampp-control-panel.png" %}
2. Klicken Sie im Control-Panel neben Apache und MySQL auf den Button "Starten". Nach einigen Sekunden sind die Programmnamen grün hinterlegt {% include imgclick.html alt="11 Xampp Running" src="/img/2018-06-18-prestashop-installieren/11-xampp-running.png" %}
3. Öffnen Sie nun Ihren Browser und tippen Sie in der Adresszeile die Adresse [127.0.0.1](http://127.0.0.1) ein. {% include imgclick.html alt="12 Browser Test" src="/img/2018-06-18-prestashop-installieren/12-browser-test.png" %}
4. Wenn Sie alles richtig gemacht haben, sollte sich folgende Seite öffnen. Herzlichen Glückwunsch Sie haben nun einen funktionsfähigen Webserver auf Ihrem Rechner installiert! {% include imgclick.html alt="13 Browser Success" src="/img/2018-06-18-prestashop-installieren/13-browser-success.png" %}

<div class='alert-info' markdown='1'>
### Fehlermeldung: Fehlerhafte Port-Einstellungen
Unter Umständen erhalten Sie beim Start von XAMPP die Fehlermeldung "Fehler: Apache wurde unerwartet beendet. Ursache könnte ein geblockter Port sein…"
{% include imgclick.html alt="11 Xampp Error Port" src="/img/2018-06-18-prestashop-installieren/11-xampp-error-port.png" %}

Gehen Sie folgendermaßen vor, um diesen Fehler zu beheben:

1. Öffnen Sie das XAMPP-Control-Panel und klicken Sie bei Apache auf 'Konfig' und dann auf den Eintrag ``httpd.conf`` {% include imgclick.html alt="44 Prestashop Installer Open Httpdconf" src="/img/2018-06-18-prestashop-installieren/45-prestashop-installer-open-httpdconf.png" %}
2. Die Datei httpd.conf wird im Text-Editor geöffnet. Suchen Sie nun nach dem Eintrag ``Listen 80`` und ersetzen Sie diesen durch den Wert ``Listen 8080``
3. Testen Sie nun erneut, ob der Web-Server reagiert. Wenn nicht, nehmen Sie auch noch Schritt 4 vor.
4. Öffnen Sie das XAMPP-Control-Panel und klicken Sie bei Apache auf 'Konfig' und dann auf den Eintrag ``httpd-ssl.conf``. Ändern Sie in dieser Datei den Wert ``Listen 443``in ``Listen 14443`` um. Testen Sie nun die Verbindung erneut.
</div>

## Installation von Prestashop
### Vorbereiten der Datenbank
Bevor wir Prestashop installieren können, müssen wir zunächst die MySQL-Datenbank für Prestashop vorbereiten, in der dann alle Daten (wie z.B. Artikel, Produktkategorien, usw.) gespeichert werden. Dazu erledigen wir die folgenden Schritte:

1. Öffnen Sie die XAMPP-Homepage unter der Adresse [127.0.0.1](http://127.0.0.1) und klicken Sie oben rechts auf den Link 'phpMyAdmin'. {% include imgclick.html alt="20 Phpmyadmin Link" src="/img/2018-06-18-prestashop-installieren/20-phpmyadmin-link.png" %}
2. Klicken Sie im Menu von phpmyadmin auf "Benutzerkonten". {% include imgclick.html alt="21 Phpmyadmin Userstart" src="/img/2018-06-18-prestashop-installieren/21-phpmyadmin-userstart.png" %}
3. …anschließend auf 'Benutzerkonto hinzufügen' {% include imgclick.html alt="22 Phpmyadmin Create User" src="/img/2018-06-18-prestashop-installieren/22-phpmyadmin-create-user.png" %}
4. Im folgenden Formular geben Sie die folgenden Werte ein: Benutzername ``'prestashop'``, Passwort ``'meinpasswort'``. Vergessen Sie nicht den Haken beim Feld 'Erstelle eine Datenbank mit gleichem Namen und gewähre alle Rechte' - damit wird eine Datenbank angelegt, für die der neue Benutzer alle Zugriffsrechte hat. {% include imgclick.html alt="23 Phpmyadmin User Form" src="/img/2018-06-18-prestashop-installieren/23-phpmyadmin-user-form.png" %}
5. Aus technischen Gründen ist es notwendig, dass wir nun noch einmal einen identischen Benutzer anlegen, allerdings für den Host 'localhost'. Dies ist notwendig, um vom lokalen Rechner (=localhost) auf die Datenbank zugreifen zu können.
5. Die Daten des Benutzers brauchen wir beim nächsten Schritt, wenn wir den Prestashop-Installer ausführen.

### Download und Ausführen des Prestashop-Installers
 Im nächsten Schritt werden wir die Prestashop-Software installieren.
 
1. Dazu laden wir zunächst die aktuelle Version von Prestashop unter folgender Adresse herunter: <a href="https://prestashop.com/de/download" target="_blank">https://prestashop.com/de/download</a> {% include imgclick.html alt="30 Prestashop Download" src="/img/2018-06-18-prestashop-installieren/30-prestashop-download.png" %}
2. Danach wird die heruntergeladene zip-Datei entpackt und der Ordner in den Ordner 'htdocs' (in der Regel lautet der Pfad ``C:\xampp\htdocs\``) von XAMPP kopiert. {% include imgclick.html alt="31 Prestashop Download Folder" src="/img/2018-06-18-prestashop-installieren/31-prestashop-download-folder.png" %} {% include imgclick.html alt="32 Prestashop Unzip" src="/img/2018-06-18-prestashop-installieren/32-prestashop-unzip.png" %} {% include imgclick.html alt="33 Prestashop Move" src="/img/2018-06-18-prestashop-installieren/33-prestashop-move.png" %}
3. Um die Adresse der Webseite (siehe Schritt 4) lesbarer zu gestalten, ist es sinnvoll den Prestashop-Ordner in 'prestashop' umzubenennen.{% include imgclick.html alt="34 Prestashop Rename Folder" src="/img/2018-06-18-prestashop-installieren/34-prestashop-rename-folder.png" %}
4. Nun rufen wir im Browser die Adresse [127.0.0.1/prestashop](http://127.0.0.1/prestashop) auf, um den Installer zu starten. {% include imgclick.html alt="35 Prestashop Start Installer" src="/img/2018-06-18-prestashop-installieren/35-prestashop-start-installer.png" %} {% include imgclick.html alt="36 Prestashop Installer Unzip" src="/img/2018-06-18-prestashop-installieren/36-prestashop-installer-unzip.png" %}
5. Nach erfolgreichem Start, erscheint die erste Einstellungsseite, in der wir die Sprache des Installers festlegen. Klicken Sie dann auf 'Next' {% include imgclick.html alt="37 Prestashop Installer Lang" src="/img/2018-06-18-prestashop-installieren/37-prestashop-installer-lang.png" %}
6. Akzeptieren Sie danach die Prestashop-Lizenz. {% include imgclick.html alt="38 Prestashop Installer License" src="/img/2018-06-18-prestashop-installieren/38-prestashop-installer-license.png" %}
7. Im nächsten Schritt führt Prestashop einen Test des installierten Systems durch, der erfolgreich verlaufen sollte. {% include imgclick.html alt="39 Prestashop Installer Systemcheck" src="/img/2018-06-18-prestashop-installieren/39-prestashop-installer-systemcheck.png" %}
8. Nun werden die Daten für den Administrator-Zugang des Shops festgelegt. {% include imgclick.html alt="40 Prestashop Installer Account" src="/img/2018-06-18-prestashop-installieren/40-prestashop-installer-account.png" %}
9. Als letzten Schritt der Installation geben wir nun die oben festgelegten Zugangsdaten für die MySQL-Datenbank (siehe Schritt "Vorbereiten der Datenbank") ein. Die Werte lauten: Server: ``127.0.0.1`` Database name: ``prestashop`` und Password: ``meinpasswort``. Den Wert Table-Prefix können wir ignorieren. Klicken Sie dann auf 'Test your database connection now!', um die Datenbankverbindung zu überprüfen. {% include imgclick.html alt="41 Prestashop Installer Mysql" src="/img/2018-06-18-prestashop-installieren/41-prestashop-installer-mysql.png" %}
10. Wenn der Test erfolgreich verläuft, klicken Sie auf weiter und der Installer erstellt die Tabellen in der Datenbank. 

<div class="gallery clearfix">
  <a href="/img/2018-06-18-prestashop-installieren/42-prestashop-installer-mysql-test.png" data-toggle="lightbox" data-gallery="sunday" class="col-sm-4" style="background-image:url('{{ site.baseurl }}/img/2018-06-18-prestashop-installieren/42-prestashop-installer-mysql-test.png')" alt="image"> </a>
  <a href="/img/2018-06-18-prestashop-installieren/43-prestashop-installer-running.png" data-toggle="lightbox" data-gallery="sunday" class="col-sm-4" style="background-image:url('{{ site.baseurl }}/img/2018-06-18-prestashop-installieren/43-prestashop-installer-running.png')" alt="image"> </a>
</div>

<div class='alert-info' markdown='1'>
### Fehlermeldung: HTTP Error 500
{% include imgclick.html alt="44 Prestashop Installer Error500png" src="/img/2018-06-18-prestashop-installieren/44-prestashop-installer-error500png.png" %}
Falls Sie während des letzten Installationsschrittes die Fehlermeldung ``HTTP 500 -error-`` erhalten, nehmen Sie bitte folgende Schritte vor, um das Problem zu beheben:

1. Öffnen Sie das XAMPP-Control-Panel und klicken Sie bei Apache auf 'Konfig' und dann auf den Eintrag ``httpd.conf`` {% include imgclick.html alt="44 Prestashop Installer Open Httpdconf" src="/img/2018-06-18-prestashop-installieren/45-prestashop-installer-open-httpdconf.png" %}
2. Die Datei öffnet sich im Programm Textedit. Suchen Sie die Zeile mit dem Eintrag ``AllowOverride None`` und änder Sie diese um in ``AllowOverride All`` und speichern Sie die Datei über "Datei -> Speichern". {% include imgclick.html alt="46 Prestashop Installer Textedit" src="/img/2018-06-18-prestashop-installieren/46-prestashop-installer-textedit.png" %}
3. Wechseln Sie zurück in den Browser und klicken Sie auf den Link *clicking here*, um den letzten Schritt der Installation erneut zu starten. {% include imgclick.html alt="47 Prestashop Installer Error500 Marked" src="/img/2018-06-18-prestashop-installieren/47-prestashop-installer-error500-marked.png" %}

### Fehlermeldung: HTTP Error 500 - Variante 2
Wenn die oben beschriebene Lösung nicht weiterhilft, kann evt. folgender Hinweis helfen: [siehe auch hier](https://www.prestashop.com/forums/topic/855919-error-during-prestashop-174-installation/)

Zur Behebung muss man in die Datei ``/www/modules/ps_themecusto/ps_themecusto.php`` in die Zeile 193 gehen und dort die Zeile mit 'de' einfügen, so dass es folgendermaßen aussieht:

``` php
<?
public function getTabNameByLangISO()
{
    return array(
        $this->controller_name[1] => array(
            'fr'    => 'Configuration page d\'accueil',
            'en'    => 'Homepage Configuration',
            'es'    => 'Configuración página de inicio',
            'it'    => 'Configurazione homepage',
            'de'    => 'Homepage konfigurieren'
        ),
        $this->controller_name[0] => array(
            'fr'    => 'Personnalisation avancée',
            'en'    => 'Advanced Customization',
            'es'    => 'Personalización avanzada',
            'it'    => 'Personalizzazione avanzata',
            'de'    => 'Personalisieren'
        ),
    );
}
?>
````

Danach die Datei speichern und die Installation noch einmal starten….

</div>

Wenn alles glatt verläuft, sollten Sie am Ende folgende Erfolgsmeldung sehen: 
[{% include imgclick.html alt="48 Prestashop Installer Success" src="/img/2018-06-18-prestashop-installieren/48-prestashop-installer-success.png" %}
](/img/2018-06-18-prestashop-installieren/48-prestashop-installer-success.png
)
### Test des Shop-Frontends
Nun rufen wir unseren Shop zum ersten Mal auf, indem wir im Browser die Adresse [127.0.0.1/prestashop](http://127.0.0.1/prestashop) in das Adressfeld eingeben. Es sollte sich unser "fertiger" Online-Shop - das sogenannte **Frontend** - öffnen:
{% include imgclick.html alt="49 Prestashop Installer Frontend Test" src="/img/2018-06-18-prestashop-installieren/49-prestashop-installer-frontend-test.png" %}

### Test des Shop-Backends
Zur Verwaltung des Shops müssen wir uns als Administrator in den Administrations-Bereich - das sogenannten **Backend** - einloggen. Aus Sicherheitsgründen verlangt Prestashop, dass wir vor dem Login das Administrations-Verzeichnis umbenennen. Wir öffnen dazu im Windows-Explorer den Ordner 'C:\xampp\htdocs\prestashop'. 

Dort ändern wir den Namen des Ordners 'admin' in zum Beispiel 'admin428' um. Dies soll verhindern, dass Unbefugte Zugriff auf den Login des Shops erhalten, indem Sie die Web-Adresse des Admin-Bereichs erraten. {% include imgclick.html alt="50 Prestashop Installer Rename Admin" src="/img/2018-06-18-prestashop-installieren/50-prestashop-installer-rename-admin.png" %}

Daneben müssen wir noch den Ordner 'install' löschen, damit niemand aus Versehen die Installation erneut starten kann. {% include imgclick.html alt="51 Prestashop Installer Delete Install" src="/img/2018-06-18-prestashop-installieren/51-prestashop-installer-delete-install.png" %}

Rufen Sie nun die Adresse [127.0.0.1/prestashop/admin428](http://127.0.0.1/prestashop/admin428) auf. Melden Sie sich mit den Daten des Administrator-Benutzers (siehe 8. im Schritt "Download und Ausführen des Prestashop-Installers") an und Sie sollten in das Backend des Shops gelangen.

<div class="gallery clearfix" markdown="1">
<a href="/img/2018-06-18-prestashop-installieren/52-prestashop-backend-url.png" data-toggle="lightbox" data-gallery="sunday" class="col-sm-4" style="background-image:url('{{ site.baseurl }}/img/2018-06-18-prestashop-installieren/52-prestashop-backend-url.png')" alt="image"> </a>
<a href="/img/2018-06-18-prestashop-installieren/53-prestashop-backend-login.png" data-toggle="lightbox" data-gallery="sunday" class="col-sm-4" style="background-image:url('{{ site.baseurl }}/img/2018-06-18-prestashop-installieren/53-prestashop-backend-login.png')" alt="image"> </a>
<a href="/img/2018-06-18-prestashop-installieren/54-prestashop-backend-success.png" data-toggle="lightbox" data-gallery="sunday" class="col-sm-4" style="background-image:url('{{ site.baseurl }}/img/2018-06-18-prestashop-installieren/54-prestashop-backend-success.png')" alt="image"> </a>
</div>