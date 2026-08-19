# Bierbaar

GitHub Pages website voor Bierbaar, een merk voor circulair bier.

## Nog te vervangen voordat de site live/echt gebruikt wordt

- **Footer-gegevens** (`index.html`, sectie `<footer>`): adres, e-mail, telefoonnummer en KVK-nummer zijn placeholders.
- **Privacybeleid**: er staat nu alleen een link naar `#`, er is nog geen echte privacyverklaring.
- **Reviews**: duidelijk gelabeld als "Voorbeeldreview" in `index.html`, vervang door echte klantreviews zodra die er zijn.
- **Foto's**: alle afbeeldingen zijn tijdelijke, rechtenvrije stockfoto's van Unsplash (hero + productfoto's). Vervang door eigen foto's van het product/team/sfeer.
- **Koop-knoppen**: "In winkelmand" is nu puur visueel (toont een melding "binnenkort beschikbaar"). Er is nog geen winkelmandje of Firebase-backend gekoppeld.

## Lokaal bekijken

```
npx http-server . -p 8123
```

## Structuur

- `index.html` - alle content en secties
- `css/styles.css` - styling (Inter font, amber/gold accent)
- `js/main.js` - slideshow, accordion en koop-knop gedrag
