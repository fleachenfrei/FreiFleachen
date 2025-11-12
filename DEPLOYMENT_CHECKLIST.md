# 🚀 Deployment Checklist - Flächen Frei

Schnelle Checkliste für das Railway.app Deployment

---

## Pre-Deployment ✅

- [ ] GitHub Repository erstellt und Code committed
- [ ] `.gitignore` enthält: `node_modules/`, `dist/`, `.env`
- [ ] Railway.app Account erstellt
- [ ] Domain-Zugriff verfügbar (für DNS-Konfiguration)

---

## Railway Setup ⚙️

- [ ] Neues Railway Projekt erstellt
- [ ] GitHub Repository verbunden
- [ ] Build Settings überprüft:
  - Build Command: `npm run build`
  - Start Command: `npm start`
- [ ] **Keine** manuellen Environment Variables nötig (PORT & NODE_ENV sind automatisch)

---

## Domain Konfiguration 🌍

- [ ] Custom Domain in Railway hinzugefügt: `flaechenfrei.at`
- [ ] DNS A-Record konfiguriert: `@` → Railway IP
- [ ] DNS CNAME-Record konfiguriert: `www` → `*.up.railway.app`
- [ ] DNS Propagierung abgewartet (10 Min - 48h)
- [ ] SSL-Zertifikat automatisch generiert (✅ in Railway Dashboard)

---

## Post-Deployment Tests 🧪

### 1. Website Erreichbarkeit
```bash
curl -I https://flaechenfrei.at
# Erwartung: HTTP/2 200
```

- [ ] Homepage lädt: `https://flaechenfrei.at/`
- [ ] Englisch lädt: `https://flaechenfrei.at/en`
- [ ] Services lädt: `https://flaechenfrei.at/leistungen`
- [ ] Kontakt lädt: `https://flaechenfrei.at/kontakt`

### 2. SEO-Dateien verfügbar
```bash
curl https://flaechenfrei.at/robots.txt
curl https://flaechenfrei.at/sitemap.xml
curl https://flaechenfrei.at/favicon.png
```

- [ ] robots.txt gibt Inhalt zurück (nicht 404)
- [ ] sitemap.xml gibt XML zurück
- [ ] favicon.png lädt

### 3. IndexNow Key File
```bash
curl https://flaechenfrei.at/4360887d417651be8e892bc97ab0625dce0349081491ae37c119b83258d0df32.txt
```

- [ ] Gibt Key zurück: `4360887d417651be8e892bc97ab0625dce0349081491ae37c119b83258d0df32`

### 4. IndexNow API Test
```bash
curl -X POST https://flaechenfrei.at/api/indexnow/submit-url \
  -H "Content-Type: application/json" \
  -d '{"url": "https://flaechenfrei.at/"}'
```

- [ ] Response: `{"success":true,"status":202,...}`

---

## SEO Setup 📊

### Bing Webmaster Tools
- [ ] Account erstellt auf [bing.com/webmasters](https://www.bing.com/webmasters)
- [ ] Domain `flaechenfrei.at` hinzugefügt
- [ ] Verifizierung abgeschlossen (HTML-Tag oder DNS)
- [ ] Sitemap submitted: `https://flaechenfrei.at/sitemap.xml`
- [ ] IndexNow Key verifiziert in Webmaster Tools

### Google Search Console
- [ ] Account erstellt auf [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Domain `flaechenfrei.at` hinzugefügt
- [ ] Verifizierung abgeschlossen (HTML-Tag oder DNS)
- [ ] Sitemap submitted: `https://flaechenfrei.at/sitemap.xml`
- [ ] Mobile Usability überprüft

---

## Optional: GitHub Actions 🤖

### IndexNow Auto-Submit
- [ ] `.github/workflows/deploy-indexnow.yml` committed
- [ ] Workflow manuell getriggert (Actions Tab)
- [ ] Erfolgreich durchgelaufen (✅ grünes Häkchen)

### Health Check
- [ ] `.github/workflows/health-check.yml` committed
- [ ] Läuft täglich automatisch
- [ ] Benachrichtigungen bei Fehlern konfiguriert (optional)

---

## Monitoring & Wartung 📈

### Tägliche Checks
- [ ] Website erreichbar
- [ ] Keine SSL-Fehler
- [ ] Railway Dashboard: Keine Errors

### Wöchentliche Checks
- [ ] Bing Webmaster: Indexierungs-Fortschritt
- [ ] Google Search Console: Performance-Berichte
- [ ] Railway: Kosten-Übersicht

### Monatliche Checks
- [ ] SEO-Rankings überprüfen
- [ ] Content-Updates durchführen
- [ ] IndexNow nach Updates triggern

---

## Kosten-Übersicht 💰

| Service | Kosten/Monat | Status |
|---------|--------------|--------|
| Railway Hobby Plan | $5 Base + ~$3-5 Usage | ~$8-10 total |
| Domain (flaechenfrei.at) | Bereits vorhanden | - |
| SSL-Zertifikat | Kostenlos (Let's Encrypt) | ✅ |
| **Total** | **~$8-10/Monat** | ✅ |

---

## Wichtige Links 🔗

### Deployment
- Railway Dashboard: https://railway.app/project/[your-project]
- GitHub Repository: https://github.com/[your-username]/[repo-name]
- Live Website: https://flaechenfrei.at

### SEO Tools
- Bing Webmaster: https://www.bing.com/webmasters
- Google Search Console: https://search.google.com/search-console
- IndexNow Docs: https://www.indexnow.org/documentation

### Support
- Railway Docs: https://docs.railway.app
- Railway Discord: https://railway.app/discord
- Deployment Guide: `RAILWAY_DEPLOYMENT_GUIDE.md`

---

## Nächste Schritte 🎯

Nach erfolgreicher Deployment:

1. **Woche 1-2**: Bing & Google Indexierung überwachen
2. **Monat 1**: SEO-Performance messen, erste Rankings checken
3. **Laufend**: Content aktualisieren, IndexNow bei Änderungen triggern

---

**Status**: 
- [ ] Pre-Deployment
- [ ] In Progress
- [ ] Deployed & Testing
- [ ] Live & SEO Setup Complete
- [ ] ✅ Fully Operational

**Deployment Datum**: _______________

**Deployed von**: _______________

---

💡 **Tipp**: Speichern Sie diese Checkliste ab und haken Sie die Punkte während des Deployments ab!
