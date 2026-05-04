# Railway.app Deployment Guide - Flächen Frei Website

Vollständige Schritt-für-Schritt-Anleitung für das Deployment der Flächen Frei Website auf Railway.app.

---

## 📋 Inhaltsverzeichnis

1. [Voraussetzungen](#voraussetzungen)
2. [Railway Account Setup](#railway-account-setup)
3. [GitHub Repository vorbereiten](#github-repository-vorbereiten)
4. [Railway Projekt erstellen](#railway-projekt-erstellen)
5. [Build & Deploy Konfiguration](#build--deploy-konfiguration)
6. [Domain & DNS Setup](#domain--dns-setup)
7. [Post-Deployment Checklist](#post-deployment-checklist)
8. [SEO & Search Console Setup](#seo--search-console-setup)
9. [Troubleshooting](#troubleshooting)
10. [Kosten & Pricing](#kosten--pricing)

---

## ✅ Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie folgendes haben:

- ✓ GitHub Account
- ✓ Railway.app Account (kostenloses Starter-Konto ausreichend)
- ✓ Zugriff auf die Domain flaechenfrei.at (für DNS-Konfiguration)
- ✓ Dieses Projekt (Source Code)

### 📦 Wichtige Projekt-Dateien für Railway

Ihr Projekt enthält bereits alle notwendigen Konfigurationsdateien:

- ✅ **`Dockerfile`** - **KRITISCH:** Erzwingt Node.js 20+ (erforderlich!)
- ✅ **`.dockerignore`** - Optimiert Docker Build-Geschwindigkeit
- ✅ **`railway.json`** - Build und Deployment-Konfiguration
- ✅ **`package.json`** - Build-Scripts für Production
- ✅ **`server/indexnow.ts`** - IndexNow Integration
- ✅ **`client/public/sitemap.xml`** - 120+ SEO-optimierte URLs

**⚠️ WICHTIG:** Das `Dockerfile` ist **zwingend erforderlich**, da der Code `import.meta.dirname` verwendet, welches erst ab Node.js 20.11+ verfügbar ist. Railway's Nixpacks erkennt die Version manchmal nicht korrekt. Das Dockerfile garantiert Node.js 20+ und volle Kontrolle über den Build-Prozess.

---

## 🚀 Railway Account Setup

### Schritt 1: Railway Account erstellen

1. Gehen Sie zu [railway.app](https://railway.app)
2. Klicken Sie auf **"Start a New Project"** oder **"Login with GitHub"**
3. Autorisieren Sie Railway für Ihren GitHub Account
4. Verifizieren Sie Ihre E-Mail-Adresse

### Schritt 2: Starter Plan prüfen

Railway bietet:
- **Hobby Plan**: $5/Monat + $0.000463/GB-hour
- **Trial Credits**: $5 kostenlos zum Testen (500 Stunden verfügbar)

Für diese Website (statische + API):
- Geschätzte Kosten: ~$5-10/Monat (abhängig vom Traffic)

---

## 📦 GitHub Repository vorbereiten

### Option A: Neues Repository erstellen

1. Erstellen Sie ein neues GitHub Repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Flächen Frei website"
   git branch -M main
   git remote add origin https://github.com/IHR-USERNAME/flaechenfrei-website.git
   git push -u origin main
   ```

2. **Wichtig**: Erstellen Sie eine `.gitignore` Datei (falls noch nicht vorhanden):
   ```
   node_modules/
   dist/
   .env
   .env.local
   *.log
   .DS_Store
   ```

### Option B: Bestehendes Repository verwenden

Falls Sie bereits ein Repository haben:
```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

---

## 🏗️ Railway Projekt erstellen

### Schritt 1: Neues Projekt erstellen

1. Login auf [railway.app](https://railway.app)
2. Klicken Sie auf **"New Project"**
3. Wählen Sie **"Deploy from GitHub repo"**
4. Autorisieren Sie Railway, auf Ihre GitHub Repositories zuzugreifen
5. Wählen Sie Ihr `flaechenfrei-website` Repository

### Schritt 2: Service konfigurieren

Railway erkennt automatisch, dass es sich um eine Node.js Anwendung handelt.

**Wichtig**: Überprüfen Sie die automatische Konfiguration:

1. Gehen Sie zu **Settings** → **Build & Deploy**
2. Stellen Sie sicher, dass folgende Werte gesetzt sind:

---

## ⚙️ Build & Deploy Konfiguration

### Build Einstellungen (Settings → Build)

Railway erkennt automatisch die `package.json` und verwendet:

```yaml
# Railway generiert automatisch:
Build Command: npm install && npm run build
Start Command: npm start
```

**Manuell überprüfen**:

1. **Root Directory**: `/` (Standard)
2. **Build Command**: `npm run build`
3. **Start Command**: `npm start`
4. **Node Version**: 20.x (automatisch erkannt aus package.json engines)

### Umgebungsvariablen (Settings → Variables)

Railway stellt automatisch folgende Variablen bereit:

| Variable | Wert | Beschreibung |
|----------|------|--------------|
| `PORT` | Auto (Railway managed) | ✅ Automatisch gesetzt |
| `NODE_ENV` | `production` | ✅ Automatisch gesetzt |

**Keine zusätzlichen Variablen erforderlich!** ✨

Die Website verwendet **in-memory storage** (keine Datenbank) und alle statischen Dateien (IndexNow-Key, robots.txt, sitemap.xml) sind bereits im Code enthalten.

### Optionale Variablen (nur wenn Sie E-Mail verwenden):

Falls Sie später E-Mail-Versand implementieren möchten:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

---

## 🌍 Domain & DNS Setup

### Schritt 1: Domain in Railway hinzufügen

1. Gehen Sie zu Ihrem Railway Service
2. Klicken Sie auf **Settings** → **Domains**
3. Klicken Sie auf **"Custom Domain"**
4. Geben Sie ein: `flaechenfrei.at`
5. Railway zeigt Ihnen die DNS-Konfiguration an

### Schritt 2: DNS-Einträge bei Ihrem Domain-Provider konfigurieren

Railway bietet zwei Optionen:

#### Option A: CNAME Record (Empfohlen für Subdomains)

Wenn Sie `www.flaechenfrei.at` verwenden:

```
Type:  CNAME
Name:  www
Value: ihr-service-name.up.railway.app
TTL:   3600
```

#### Option B: A Record (Für Root Domain)

Für `flaechenfrei.at` (ohne www):

Railway gibt Ihnen eine **IP-Adresse**:

```
Type:  A
Name:  @  (oder leer lassen)
Value: XXX.XXX.XXX.XXX  (IP von Railway)
TTL:   3600
```

**Wichtig**: Konfigurieren Sie **beide** (www und non-www):

1. **A Record** für `flaechenfrei.at`
2. **CNAME Record** für `www.flaechenfrei.at`
3. Optional: **Redirect** von www → non-www (oder umgekehrt)

### Schritt 3: DNS-Propagierung abwarten

- DNS-Änderungen benötigen **10 Minuten bis 48 Stunden**
- Testen Sie mit: `nslookup flaechenfrei.at`
- Railway zeigt einen ✅ Status, sobald die Domain verifiziert ist

### Schritt 4: SSL/TLS Zertifikat (automatisch)

Railway generiert **automatisch ein kostenloses SSL-Zertifikat** via Let's Encrypt:
- ✅ HTTPS wird automatisch aktiviert
- ✅ HTTP → HTTPS Redirect ist eingebaut
- ✅ Kein manueller Setup erforderlich

---

## ✅ Post-Deployment Checklist

Nach erfolgreichem Deployment, überprüfen Sie:

### 1. Website ist erreichbar

```bash
# Test mit curl
curl -I https://flaechenfrei.at

# Sollte zurückgeben: HTTP/2 200
```

### 2. Statische Dateien sind verfügbar

```bash
# IndexNow Key File
curl https://flaechenfrei.at/4360887d417651be8e892bc97ab0625dce0349081491ae37c119b83258d0df32.txt

# Sollte zurückgeben: 4360887d417651be8e892bc97ab0625dce0349081491ae37c119b83258d0df32

# Robots.txt
curl https://flaechenfrei.at/robots.txt

# Sitemap.xml
curl https://flaechenfrei.at/sitemap.xml

# Favicon
curl -I https://flaechenfrei.at/favicon.png
```

### 3. IndexNow API funktioniert

```bash
# Test URL Submission
curl -X POST https://flaechenfrei.at/api/indexnow/submit-url \
  -H "Content-Type: application/json" \
  -d '{"url": "https://flaechenfrei.at/"}'

# Erwartete Antwort:
# {"success":true,"status":202,"message":"URL received, key validation pending"}
```

### 4. Alle Seiten laden korrekt

Testen Sie im Browser:
- ✓ Homepage: `https://flaechenfrei.at/`
- ✓ Englische Version: `https://flaechenfrei.at/en`
- ✓ Services: `https://flaechenfrei.at/leistungen`
- ✓ Service Details: `https://flaechenfrei.at/leistungen/wohnungsraeumungen`
- ✓ Kontakt: `https://flaechenfrei.at/kontakt`

---

## 🎯 SEO & Search Console Setup

### 1. Bing Webmaster Tools Setup

📄 **Folgen Sie der Anleitung**: `BING_WEBMASTER_SETUP.md`

Zusammenfassung:
1. Gehen Sie zu [bing.com/webmasters](https://www.bing.com/webmasters)
2. Fügen Sie `https://flaechenfrei.at` hinzu
3. Verifizieren Sie via HTML-Tag (bereits in index.html integriert)
4. Reichen Sie die Sitemap ein: `https://flaechenfrei.at/sitemap.xml`
5. Testen Sie IndexNow über Bing Webmaster Tools

### 2. Google Search Console Setup

📄 **Folgen Sie der Anleitung**: `GOOGLE_SEARCH_CONSOLE_SETUP.md`

Zusammenfassung:
1. Gehen Sie zu [search.google.com/search-console](https://search.google.com/search-console)
2. Fügen Sie `https://flaechenfrei.at` hinzu
3. Verifizieren Sie via HTML-Tag oder DNS
4. Reichen Sie die Sitemap ein: `https://flaechenfrei.at/sitemap.xml`
5. Überprüfen Sie Mobile Usability

### 3. IndexNow automatisch triggern (Optional)

Nach jeder Content-Änderung können Sie IndexNow triggern:

```bash
# Option 1: Einzelne URL
curl -X POST https://flaechenfrei.at/api/indexnow/submit-url \
  -H "Content-Type: application/json" \
  -d '{"url": "https://flaechenfrei.at/neue-seite"}'

# Option 2: Alle Prioritäts-Seiten (120+ URLs)
curl -X POST https://flaechenfrei.at/api/indexnow/submit-sitemap
```

**Automation-Tipp**: Erstellen Sie ein GitHub Action Workflow, der nach jedem Deployment automatisch die Sitemap submittet!

---

## 🐛 Troubleshooting

### Problem 1: Build schlägt fehl

**Symptom**: Railway Build-Log zeigt Fehler

**Lösung**:
```bash
# Testen Sie lokal
npm install
npm run build

# Falls es lokal funktioniert, überprüfen Sie:
# 1. package.json ist korrekt committed
# 2. Keine fehlenden Dependencies
# 3. Node Version ist kompatibel (20.x)
```

### Problem 2: Website zeigt 404

**Symptom**: `https://flaechenfrei.at` gibt 404 zurück

**Lösung**:
1. Überprüfen Sie Railway Logs: **View Logs** im Dashboard
2. Stellen Sie sicher, dass der Build erfolgreich war
3. Überprüfen Sie, dass `npm start` funktioniert:
   ```bash
   # Im Railway Log sollte stehen:
   # "serving on port 5000"
   ```

### Problem 3: IndexNow gibt 502 zurück

**Symptom**: API gibt `{"success":false,"status":502}`

**Lösung**:
- Das ist **normal** wenn Bing/IndexNow temporär nicht erreichbar ist
- Der Fehler ist korrekt gehandelt (kein Crash)
- Versuchen Sie es in einigen Minuten erneut

### Problem 4: Domain zeigt Railway-Domain

**Symptom**: Browser wird zu `*.up.railway.app` umgeleitet

**Lösung**:
1. Überprüfen Sie DNS-Einträge mit `nslookup flaechenfrei.at`
2. Warten Sie auf DNS-Propagierung (bis zu 48h)
3. Löschen Sie Browser-Cache und versuchen Sie Incognito-Modus

### Problem 5: SSL-Zertifikat Fehler

**Symptom**: Browser zeigt "Not Secure" oder SSL-Warnung

**Lösung**:
1. Warten Sie 10-15 Minuten nach Domain-Verifikation
2. Railway generiert automatisch Let's Encrypt Zertifikat
3. Überprüfen Sie im Railway Dashboard: Settings → Domains → SSL Status

---

## 💰 Kosten & Pricing

### Railway Pricing (Stand November 2025)

**Hobby Plan**: $5/Monat + Nutzungsbasiert

| Resource | Kosten | Geschätzt für Flächen Frei |
|----------|--------|----------------------------|
| Base Fee | $5/Monat | $5.00 |
| Compute | $0.000463/GB-hour | ~$2-3/Monat (bei geringem Traffic) |
| Outbound Data | $0.10/GB | ~$1-2/Monat |
| **Total** | - | **~$8-10/Monat** |

### Kostenoptimierung:

1. **Caching aktivieren**: Reduziert Serverload
2. **Static Assets**: Werden effizient von Railway CDN ausgeliefert
3. **Horizontale Skalierung**: Nur bei Bedarf (Railway skaliert automatisch)

### Alternative: Replit Deployments

Falls Sie auf Replit entwickeln:
- Replit bietet **Reserved VM Deployments** ab $7/Monat
- Vorteil: Direkte Integration, keine GitHub nötig
- Nachteil: Weniger Kontrolle über Infrastruktur

**Empfehlung**: Railway für Production, Replit für Development ✅

---

## 🎉 Deployment abgeschlossen!

Nach erfolgreicher Durchführung aller Schritte haben Sie:

✅ Website läuft auf Railway.app  
✅ Custom Domain `flaechenfrei.at` konfiguriert  
✅ SSL/TLS automatisch aktiviert  
✅ SEO-Dateien (robots.txt, sitemap.xml) verfügbar  
✅ IndexNow API funktionsfähig  
✅ Bereit für Bing & Google Indexierung  

### Nächste Schritte:

1. ✓ Bing Webmaster Tools Setup durchführen
2. ✓ Google Search Console Setup durchführen
3. ✓ Content regelmäßig updaten
4. ✓ IndexNow bei Updates triggern
5. ✓ Analytics einrichten (optional)

---

## 📞 Support & Hilfe

**Railway Support**:
- Dokumentation: [docs.railway.app](https://docs.railway.app)
- Discord: [railway.app/discord](https://railway.app/discord)
- Status: [status.railway.app](https://status.railway.app)

**Flächen Frei Website**:
- SEO Analyse: Siehe `SEO_ANALYSIS.md` (95/100 Score)
- IndexNow Nutzung: Siehe `INDEXNOW_USAGE.md`
- Bing Setup: Siehe `BING_WEBMASTER_SETUP.md`
- Google Setup: Siehe `GOOGLE_SEARCH_CONSOLE_SETUP.md`

---

**Viel Erfolg mit Ihrem Deployment! 🚀**
